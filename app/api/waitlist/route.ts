import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!
  )
  const { email } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'メールアドレスが無効です' }, { status: 400 })
  }

  const { error } = await supabase.from('mac_waitlist').insert({ email })

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'すでに登録済みです' }, { status: 409 })
    }
    return NextResponse.json({ error: '登録に失敗しました' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
