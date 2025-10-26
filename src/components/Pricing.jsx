import React from 'react';
import { Check, ArrowRight, Rocket, Server, Gamepad2 } from 'lucide-react';

const tiers = [
  {
    name: 'Web Starter',
    price: '$5',
    period: '/mo',
    icon: <Server className="h-5 w-5" />,
    highlight: false,
    features: [
      '10 GB NVMe storage',
      'Unmetered bandwidth',
      'Free SSL + CDN',
      '1-click deploy (Git)',
    ],
  },
  {
    name: 'VDS Pro',
    price: '$18',
    period: '/mo',
    icon: <Rocket className="h-5 w-5" />,
    highlight: true,
    features: [
      '2 vCPU • 4 GB RAM',
      '60 GB NVMe',
      'DDoS protection',
      'Snapshots & backups',
    ],
  },
  {
    name: 'Game Host',
    price: '$12',
    period: '/mo',
    icon: <Gamepad2 className="h-5 w-5" />,
    highlight: false,
    features: [
      'Low-latency routing',
      'Automatic restarts',
      'Mod/plugin support',
      'Daily backups',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#07080c] py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start small and scale up as you grow. No hidden fees, ever.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 transition ${
                tier.highlight
                  ? 'border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-md flex items-center justify-center ${tier.highlight ? 'bg-cyan-500/20 text-cyan-300' : 'bg-black/50 text-white/80'} ring-1 ring-inset ring-white/10`}>
                  {tier.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold">{tier.name}</h3>
                  <p className="text-sm text-white/60">Great for {tier.name === 'Web Starter' ? 'sites' : tier.name === 'VDS Pro' ? 'apps' : 'servers'}</p>
                </div>
              </div>

              <div className="mt-6 flex items-end gap-2">
                <span className={`text-4xl font-bold ${tier.highlight ? 'text-cyan-300' : 'text-white'}`}>{tier.price}</span>
                <span className="text-white/60">{tier.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 mt-0.5 text-cyan-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition ${
                  tier.highlight
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:brightness-110'
                    : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'
                }`}
              >
                Choose plan <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <p id="support" className="mt-12 text-center text-sm text-white/60">
          Need a custom setup? Reach us 24/7 — we’ll tailor the perfect stack for you.
        </p>
      </div>
    </section>
  );
}
