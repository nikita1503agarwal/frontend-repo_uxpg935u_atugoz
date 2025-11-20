import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-24" id="home">
      <div className="relative h-[70vh] min-h-[520px] w-full overflow-hidden rounded-b-3xl">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-40 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">The softest way to launch your fintech SaaS</h1>
          <p className="mt-4 text-slate-600 text-lg">Accept payments, issue cards, and manage revenue with a pastel-first design that feels modern, calm, and trustworthy.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition">See pricing</a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50">Explore features</a>
          </div>
        </div>
      </div>
    </section>
  );
}
