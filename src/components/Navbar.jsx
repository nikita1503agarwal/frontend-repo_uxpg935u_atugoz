import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/60 text-slate-700 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-200 via-sky-200 to-emerald-200 border border-white/60 shadow-sm" />
          <span className="font-semibold tracking-tight">PastelPay</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button className="hover:text-slate-900" onClick={() => scrollTo("features")}>Features</button>
          <button className="hover:text-slate-900" onClick={() => scrollTo("pricing")}>Pricing</button>
          <button className="hover:text-slate-900" onClick={() => scrollTo("blog")}>Blog</button>
          <button className="hover:text-slate-900" onClick={() => scrollTo("contact")}>Contact</button>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button onClick={onOpenAuth} className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition">Sign in</button>
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {[
            ["Features","features"],
            ["Pricing","pricing"],
            ["Blog","blog"],
            ["Contact","contact"],
          ].map(([label, id]) => (
            <button key={id} className="block w-full text-left py-2" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
          <button onClick={() => { onOpenAuth(); setOpen(false); }} className="w-full py-2 rounded-xl bg-slate-900 text-white">Sign in</button>
        </div>
      )}
    </header>
  );
}
