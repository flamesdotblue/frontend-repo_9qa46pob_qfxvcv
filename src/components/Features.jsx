import React from 'react';
import { Server, Shield, Cpu, Gamepad2, Globe } from 'lucide-react';

const features = [
  {
    icon: <Server className="h-5 w-5 text-cyan-400" />,
    title: 'Web Hosting',
    desc: 'NVMe storage, free SSL, autoscaling, and 1-click CI/CD for modern web apps.',
  },
  {
    icon: <Cpu className="h-5 w-5 text-cyan-400" />,
    title: 'VDS / VPS',
    desc: 'Dedicated vCPU, KVM virtualization, root access, and flexible OS images.',
  },
  {
    icon: <Gamepad2 className="h-5 w-5 text-cyan-400" />,
    title: 'Game Servers',
    desc: 'Optimized for low-latency with automatic backups and mod/plug‑in support.',
  },
  {
    icon: <Shield className="h-5 w-5 text-cyan-400" />,
    title: 'DDoS Protection',
    desc: 'Always-on multi-layer mitigation, WAF rules, and traffic anomaly detection.',
  },
  {
    icon: <Globe className="h-5 w-5 text-cyan-400" />,
    title: 'Global Network',
    desc: 'Edge POPs across the globe with Anycast routing for consistently low latency.',
  },
  {
    icon: <Server className="h-5 w-5 text-cyan-400" />,
    title: '24/7 Support',
    desc: 'Real engineers on chat and email with 15‑minute average first response.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Engineered for Performance</h2>
          <p className="mt-3 text-white/70">Everything you need to run sites, virtual servers, and game communities at scale.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
