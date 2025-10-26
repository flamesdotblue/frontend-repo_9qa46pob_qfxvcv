import React from 'react';

export default function Navbar() {
  const go = (hash) => {
    window.location.hash = hash;
    // force re-render by dispatching hashchange for environments that don't auto fire on assignment
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => go('')}>
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30" />
          <span className="text-white font-semibold tracking-tight">NebulaHost</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <button onClick={() => go('products')} className="hover:text-white transition">Products</button>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#support" className="hover:text-white transition">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 items-center rounded-md border border-white/15 px-3 text-sm text-white/90 hover:bg-white/5 transition">
            Sign in
          </button>
          <button onClick={() => go('products')} className="inline-flex h-9 items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-4 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
