import React from 'react';
import { ShieldCheck, Lock, Star, Clock, LifeBuoy } from 'lucide-react';

const trustPoints = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
    title: '99.99% SLA Uptime',
    text: 'სერვისები მუშაობს ოთხი ცხრიანის გარანტიით და აქტივი მონიტორინგით 24/7.',
  },
  {
    icon: <Lock className="h-5 w-5 text-emerald-400" />,
    title: 'DDoS & WAF დაცვა',
    text: 'მრავალფენიანი დაცვა L3–L7 დონეზე, ავტომატური მიტიგაციით და წესებით.',
  },
  {
    icon: <Clock className="h-5 w-5 text-emerald-400" />,
    title: 'წამებში გაშვება',
    text: 'ინსტანტ პროვიჟენინგი — ინფრასტრუქტურა მზად არის ერთ წუთზე ნაკლებში.',
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-emerald-400" />,
    title: '24/7 მხარდაჭერა',
    text: 'რეალური ინჟინრები ჩატში და ელფოსტაზე, საშუალო პასუხი 15 წუთში.',
  },
  {
    icon: <Star className="h-5 w-5 text-emerald-400" />,
    title: 'დამადასტურებელი შეფასებები',
    text: 'უფრო მაღალი NPS ქულა ინდუსტრიაში — მომხმარებლების ნდობა ჩვენი პრიორიტეტია.',
  },
];

export default function Trust() {
  return (
    <section className="relative w-full bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">ნდობა და უსაფრთხოება</h2>
          <p className="mt-3 text-white/70">გთავაზობთ გამჭვირვალე SLA-ს, ძლიერი დაცვის კონტროლებს და მუდმივ მხარდაჭერას.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustPoints.map((t) => (
            <div key={t.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/10">
                {t.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{t.title}</h3>
              <p className="mt-1 text-sm text-white/70">{t.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-6 text-center">
          <p className="text-sm text-white/80">
            ჩვენი სტატუს გვერდი ყოველთვის ხელმისაწვდომია. რეალურ დროში იხილეთ ხელმისაწვდომობის გრაფიკები და ინციდენტების ქრონოლოგია.
          </p>
          <a href="#" className="mt-3 inline-block text-emerald-300 hover:text-emerald-200 transition">გახსენით სტატუსი →</a>
        </div>
      </div>
    </section>
  );
}
