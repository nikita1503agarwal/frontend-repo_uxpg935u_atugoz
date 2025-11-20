import { Shield, CreditCard, BarChart3, Rocket } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Bank-grade security",
    desc: "Secure by default with tokenization and role-based access.",
  },
  {
    icon: CreditCard,
    title: "Virtual & physical cards",
    desc: "Spin up cards instantly with smart controls and limits.",
  },
  {
    icon: BarChart3,
    title: "Realtime analytics",
    desc: "Revenue, churn, and cohort insights at a glance.",
  },
  {
    icon: Rocket,
    title: "Lightning-fast onboarding",
    desc: "From sandbox to live in minutes, not weeks.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-rose-50/40 to-sky-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built to scale with softness</h2>
          <p className="mt-3 text-slate-600">A calm, friendly surface for powerful financial workflows.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl p-6 bg-white/80 backdrop-blur border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-200 via-sky-200 to-emerald-200 flex items-center justify-center mb-4">
                <Icon className="text-slate-700" size={20} />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
