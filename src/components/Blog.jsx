import { useEffect, useState } from 'react'

const BASE = import.meta.env.VITE_BACKEND_URL

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${BASE}/api/blogs`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-sky-50/40 to-emerald-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">From the blog</h2>
            <p className="mt-2 text-slate-600">Product updates, design notes, and lessons learned.</p>
          </div>
        </div>

        {loading ? (
          <p className="text-slate-500">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {posts.map(p => (
              <article key={p.id} className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition">
                {p.cover_image && (
                  <div className="aspect-[16/9] bg-slate-100">
                    <img src={p.cover_image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 line-clamp-2">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.excerpt || p.content}</p>
                  <div className="mt-4 text-xs text-slate-500">By {p.author}</div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
