export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      tagline: "Everything to validate your idea",
      features: [
        "1,000 card API calls/mo",
        "Community support",
        "Basic analytics",
      ],
      cta: "Get started",
      popular: false,
    },
    {
      name: "Growth",
      price: "$39",
      tagline: "For teams shipping fast",
      features: [
        "100,000 API calls/mo",
        "Priority support",
        "Webhooks & events",
        "Advanced analytics",
      ],
      cta: "Start trial",
      popular: true,
    },
    {
      name: "Scale",
      price: "$149",
      tagline: "Serious volume & control",
      features: [
        "Unlimited API calls",
        "SLA & SSO",
        "Dedicated support",
        "Custom limits & controls",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-600">Generous free tier and transparent overages as you grow.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-3xl p-6 border shadow-sm bg-white/80 backdrop-blur ${t.popular ? 'border-slate-900 shadow-2xl' : 'border-slate-200'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
                {t.popular && <span className="text-xs px-2 py-1 rounded-full bg-slate-900 text-white">Popular</span>}
              </div>
              <div className="mt-4 text-4xl font-bold text-slate-900">{t.price}<span className="text-base text-slate-500 font-normal">/mo</span></div>
              <p className="mt-2 text-slate-600">{t.tagline}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {t.features.map(f => <li key={f} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {f}</li>)}
              </ul>
              <button className={`mt-6 w-full py-3 rounded-full border ${t.popular ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50'}`}>{t.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
