import { useState } from 'react'

const BASE = import.meta.env.VITE_BACKEND_URL

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setBusy(true)
    setStatus(null)
    try {
      const res = await fetch(`${BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Error')
      setStatus({ type: 'ok', msg: data.message })
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus({ type: 'err', msg: e.message })
    } finally {
      setBusy(false)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s talk</h2>
          <p className="mt-2 text-slate-600">Have questions? We’d love to hear from you.</p>
        </div>
        <form onSubmit={onSubmit} className="bg-white/80 backdrop-blur rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required value={form.name} onChange={onChange} placeholder="Your name" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
            <input type="email" name="email" required value={form.email} onChange={onChange} placeholder="Email" className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
          </div>
          <textarea name="message" required value={form.message} onChange={onChange} placeholder="How can we help?" rows={5} className="mt-4 w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
          <div className="mt-4 flex items-center gap-3">
            <button disabled={busy} className="px-5 py-3 rounded-full bg-slate-900 text-white disabled:opacity-60">{busy ? 'Sending...' : 'Send message'}</button>
            {status && (<span className={`${status.type==='ok'?'text-emerald-600':'text-rose-600'}`}>{status.msg}</span>)}
          </div>
        </form>
      </div>
    </section>
  )
}
