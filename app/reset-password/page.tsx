'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

function ResetPasswordForm() {
  const searchParams = useSearchParams()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [sessionReady, setSessionReady] = useState(false)

  useEffect(() => {
    // Supabaseはリセットリンクのトークンをハッシュに付与する
    // URLのハッシュからセッションを復元する
    const hash = window.location.hash
    if (hash) {
      const params = new URLSearchParams(hash.slice(1))
      const accessToken = params.get('access_token')
      const refreshToken = params.get('refresh_token')
      if (accessToken && refreshToken) {
        supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
          .then(() => setSessionReady(true))
          .catch(() => {
            setStatus('error')
            setMessage('リンクの有効期限が切れています。もう一度パスワードリセットをお試しください。')
          })
      } else {
        setStatus('error')
        setMessage('無効なリンクです。もう一度パスワードリセットをお試しください。')
      }
    } else {
      // クエリパラメータのケース（Supabaseのバージョンによる）
      const code = searchParams.get('code')
      if (code) {
        supabase.auth.exchangeCodeForSession(code)
          .then(() => setSessionReady(true))
          .catch(() => {
            setStatus('error')
            setMessage('リンクの有効期限が切れています。もう一度パスワードリセットをお試しください。')
          })
      } else {
        setStatus('error')
        setMessage('無効なリンクです。もう一度パスワードリセットをお試しください。')
      }
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password !== confirm) {
      setStatus('error')
      setMessage('パスワードが一致しません。')
      return
    }
    if (password.length < 6) {
      setStatus('error')
      setMessage('パスワードは6文字以上で入力してください。')
      return
    }
    setStatus('loading')
    setMessage('')
    const { error } = await supabase.auth.updateUser({ password })
    if (error) {
      setStatus('error')
      setMessage(error.message || 'エラーが発生しました。')
    } else {
      setStatus('success')
      setMessage('パスワードを変更しました。アプリからログインしてください。')
    }
  }

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '360px',
        background: '#1e1e38',
        borderRadius: '16px',
        padding: '32px 28px',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <h1 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>
        パスワードの再設定
      </h1>
      <p style={{ fontSize: '13px', color: '#7878a8', marginBottom: '24px', textAlign: 'center', lineHeight: '1.6' }}>
        新しいパスワードを入力してください。
      </p>

      {status === 'success' ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <p style={{ color: '#4caf50', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>{message}</p>
          <a
            href="/"
            style={{
              display: 'block',
              padding: '11px',
              background: '#4ade80',
              color: '#0d1526',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            トップページへ戻る
          </a>
        </div>
      ) : status === 'error' && !sessionReady ? (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
          <p style={{ color: '#4ade80', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>{message}</p>
          <a
            href="/"
            style={{
              display: 'block',
              padding: '11px',
              background: '#4ade80',
              color: '#0d1526',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            トップページへ戻る
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="新しいパスワード（6文字以上）"
              required
              disabled={!sessionReady}
              style={{
                width: '100%',
                padding: '10px 12px',
                background: '#28284a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#e8e8f8',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ marginBottom: '14px' }}>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="新しいパスワード（確認）"
              required
              disabled={!sessionReady}
              style={{
                width: '100%',
                padding: '10px 12px',
                background: '#28284a',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#e8e8f8',
                fontSize: '14px',
                outline: 'none',
              }}
            />
          </div>
          {message && (
            <p style={{
              fontSize: '12px',
              color: status === 'error' ? '#f87171' : '#4ade80',
              marginBottom: '12px',
              textAlign: 'center',
              lineHeight: '1.4',
            }}>
              {message}
            </p>
          )}
          <button
            type="submit"
            disabled={status === 'loading' || !sessionReady}
            style={{
              width: '100%',
              padding: '11px',
              background: '#4ade80',
              color: '#0d1526',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: status === 'loading' || !sessionReady ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' || !sessionReady ? 0.5 : 1,
            }}
          >
            {status === 'loading' ? '変更中...' : 'パスワードを変更する'}
          </button>
        </form>
      )}
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: '#0e0e1e',
        color: '#e8e8f8',
      }}
    >
      <div style={{ marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2px', marginBottom: '4px' }}>
          <span style={{ fontSize: '22px', fontWeight: '900', color: '#4ade80' }}>Hub</span>
          <span style={{ fontSize: '22px', fontWeight: '900' }}>Chat</span>
        </div>
      </div>
      <Suspense fallback={<div style={{ color: '#7878a8', fontSize: '14px' }}>読み込み中...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  )
}
