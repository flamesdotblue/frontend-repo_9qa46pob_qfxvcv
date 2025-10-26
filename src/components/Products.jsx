import React from 'react';
import { Globe, Server, Cpu, Database, Layers, Gamepad2, Shield, Zap } from 'lucide-react';

const webProducts = [
  {
    icon: <Globe className="h-5 w-5 text-cyan-400" />, 
    name: 'Static Edge',
    desc: 'CDN-ზე განთავსებული სტატიკური ჰოსტინგი უფასო SSL-ით და ახლო edge-დან მიწოდებით.',
    features: ['Global CDN', 'Free SSL', 'HTTP/2+3', 'Atomic deploys'],
  },
  {
    icon: <Server className="h-5 w-5 text-cyan-400" />, 
    name: 'WordPress Pro',
    desc: 'მართული WordPress NVMe საცავით, ყოველკვირეული ბექაპებით და staging გარემოთი.',
    features: ['NVMe storage', 'Staging', 'Auto-backups', 'WAF rules'],
  },
  {
    icon: <Layers className="h-5 w-5 text-cyan-400" />, 
    name: 'E‑commerce Ready',
    desc: 'ოპტიმიზირებული Woo/Shop ჰოსტინგი მაღალი ტრაფიკის და გადახდებისას.',
    features: ['Caching', 'PCI-friendly', 'DDoS shield', 'Autoscale'],
  },
  {
    icon: <Zap className="h-5 w-5 text-cyan-400" />, 
    name: 'Node.js Managed',
    desc: 'მართული PM2/Node გარემო CI/CD ინტეგრაციით და zero‑downtime რისტარტებით.',
    features: ['PM2', '1‑click deploy', 'Env secrets', 'Logs'],
  },
  {
    icon: <Shield className="h-5 w-5 text-cyan-400" />, 
    name: 'Enterprise Web',
    desc: 'HA არქიტექტურა, ვებ ფაიერვოლი, სერვის ლეველის შეთანხმება და მხარდაჭერა.',
    features: ['HA setup', 'SLA 99.99%', 'WAF', '24/7 support'],
  },
];

const vdsProducts = [
  {
    icon: <Cpu className="h-5 w-5 text-blue-400" />, 
    name: 'VDS Starter',
    desc: '1–2 vCPU, 2–4 GB RAM — გაშვება წამებში, სრული root წვდომით.',
    features: ['KVM', 'Root access', 'Snapshots', 'IPv4/IPv6'],
  },
  {
    icon: <Cpu className="h-5 w-5 text-blue-400" />, 
    name: 'Compute Optimized',
    desc: 'მაღალი სიხშირის vCPU აგრესიული სამუშაოებისათვის და APIებსთვის.',
    features: ['High clock', 'Dedicated CPU', 'NVMe', 'Monitoring'],
  },
  {
    icon: <Database className="h-5 w-5 text-blue-400" />, 
    name: 'Memory Optimized',
    desc: 'RAM-ზე ორიენტირებული ინსტანციები cache/DB მოთხოვნებისათვის.',
    features: ['Up to 64 GB', 'ECC', 'Backups', 'Private networking'],
  },
  {
    icon: <Server className="h-5 w-5 text-blue-400" />, 
    name: 'Storage Optimized',
    desc: 'დიდი მოცულობა და IOPS, მედიისა და არქივების შესანახად.',
    features: ['High IOPS', 'NVMe/SSD', 'RAID', 'Snapshots'],
  },
  {
    icon: <Layers className="h-5 w-5 text-blue-400" />, 
    name: 'Bare‑metal Like',
    desc: 'შესრულება ახლოს ფიზიკურ სერვერთან, იზოლაცია და სტაბილური latency.',
    features: ['Pinned CPU', 'NUMA aware', 'DDoS', 'SLA 99.99%'],
  },
];

const gameProducts = [
  {
    icon: <Gamepad2 className="h-5 w-5 text-violet-400" />, 
    name: 'Minecraft',
    desc: 'Paper/Spigot/Bukkit მხარდაჭერა, მოდები და ავტომატური ბექაპები.',
    features: ['Low latency', 'Mod support', 'Daily backups', 'Auto restarts'],
  },
  {
    icon: <Gamepad2 className="h-5 w-5 text-violet-400" />, 
    name: 'CS2 / CS:GO',
    desc: 'Tickrate ოპტიმიზაცია და ანტი-DDoS ფილტრები კონკურენტული თამაშისთვის.',
    features: ['High tick', 'DDoS shield', 'One‑click install', 'RCON access'],
  },
  {
    icon: <Gamepad2 className="h-5 w-5 text-violet-400" />, 
    name: 'FiveM / Rust',
    desc: 'სერვერები მოდებით, პლაგინებით და მარტივი მართვის პანელით.',
    features: ['Mod/plug‑ins', 'Backups', 'Monitoring', 'Support 24/7'],
  },
];

function ProductGrid({ title, items, color = 'border-white/10 bg-white/5' }) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <div key={p.name} className={`rounded-2xl border ${color} p-6 hover:bg-white/[0.07] transition`}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-md bg-black/60 ring-1 ring-white/10 flex items-center justify-center">
                {p.icon}
              </div>
              <div>
                <p className="text-white font-medium">{p.name}</p>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.features.map((f) => (
                <li key={f} className="text-xs text-white/70 rounded-md border border-white/10 bg-white/5 px-2 py-1">{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <section className="relative w-full bg-[#07080c] py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">პროდუქტები</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">აირჩიეთ თქვენთვის იდეალური ჰოსტინგი</h1>
            <p className="mt-3 text-white/70">ვებ ჰოსტინგი, VDS/VPS და თამაშების სერვერები — ოპტიმიზებული წარმადობით, დაცვით და მარტივი მართვით.</p>
          </div>

          <ProductGrid title="Web Hosting" items={webProducts} />
          <ProductGrid title="VDS / VPS" items={vdsProducts} />
          <ProductGrid title="Game Hosting" items={gameProducts} />

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a href="#pricing" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/30 hover:brightness-110 transition">ნახეთ ფასები</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition">დაგვიკავშირდით</a>
          </div>
        </div>
      </section>
    </main>
  );
}
