import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} NebulaHost. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-white/60">
            <a href="#" className="hover:text-white transition">Status</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
