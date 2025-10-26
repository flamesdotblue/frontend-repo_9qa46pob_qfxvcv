import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#0a0b0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(22,163,255,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center text-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-sm">
          High-Performance Hosting for Web, VDS, and Games
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
          Launch at Light Speed
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/70">
          Blazing-fast infrastructure, DDoS protection, and one-click deployments. Scalable hosting built for modern teams and communities.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">
            Explore Features
          </a>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-left w-full">
          {[
            { label: '99.99% Uptime', value: 'SLA-backed' },
            { label: 'Global Anycast', value: 'Low latency' },
            { label: 'DDoS Shield', value: 'Up to 1.5 Tbps' },
            { label: 'Instant Provisioning', value: 'Under 60s' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-white/10 bg-black/30 p-4">
              <p className="text-white font-medium">{item.label}</p>
              <p className="text-white/60 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
