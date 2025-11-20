import { useState } from 'react'

const BASE = import.meta.env.VITE_BACKEND_URL

export default function AuthModal({ open, onClose }) {
  const [mode, setMode] = useState('login')
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  if (!open) return null

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setBusy(true); setError(null); setSuccess(null)
    try {
      const path = mode === 'login' ? '/api/auth/login' : '/api/auth/register'
      const payload = mode === 'login' ? { email: form.email, password: form.password } : form
      const res = await fetch(`${BASE}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Request failed')
      setSuccess(mode === 'login' ? `Welcome back, ${data.user.name}!` : 'Account created. You can sign in now.')
      if (mode === 'login') setTimeout(onClose, 1000)
      if (mode === 'register') setMode('login')
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/40" onClick={onClose} />
      <div className="relative w-full max-w-md mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{mode === 'login' ? 'Sign in' : 'Create account'}</h3>
          <button className="text-slate-500" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={submit} className="mt-4 space-y-3">
          {mode === 'register' && (
            <input name="name" required value={form.name} onChange={onChange} placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
          )}
          <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
          <input type="password" name="password" required value={form.password} onChange={onChange} placeholder="Password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
          <button disabled={busy} className="w-full py-3 rounded-full bg-slate-900 text-white disabled:opacity-60">{busy ? 'Please wait...' : (mode === 'login' ? 'Sign in' : 'Create account')}</button>
          <p className="text-sm text-slate-600 text-center">
            {mode === 'login' ? (
              <>No account? <button type="button" onClick={() => setMode('register')} className="underline">Create one</button></>
            ) : (
              <>Have an account? <button type="button" onClick={() => setMode('login')} className="underline">Sign in</button></>
            )}
          </p>
          {error && <p className="text-sm text-rose-600 text-center">{error}</p>}
          {success && <p className="text-sm text-emerald-600 text-center">{success}</p>}
        </form>
      </div>
    </div>
  )
}
