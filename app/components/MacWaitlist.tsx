'use client'
import { useState } from 'react'

export default function MacWaitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    const data = await res.json()
    if (res.ok) {
      setStatus('success')
      setMessage('登録しました！Mac版リリース時にお知らせします。')
      setEmail('')
    } else {
      setStatus('error')
      setMessage(data.error || '登録に失敗しました')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="メールアドレスを入力"
        required
        className="px-4 py-3 rounded-xl text-sm flex-1 max-w-sm"
        style={{ background: '#162033', border: '1px solid rgba(255,255,255,0.15)', color: '#e8e8f8', outline: 'none' }}
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-85 disabled:opacity-50"
        style={{ background: '#4ade80', color: '#0d1526' }}
      >
        {status === 'loading' ? '登録中...' : '通知を受け取る'}
      </button>
      {message && (
        <p className="w-full text-sm mt-1" style={{ color: status === 'success' ? '#4ade80' : '#f87171' }}>
          {message}
        </p>
      )}
    </form>
  )
}
