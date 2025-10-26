import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Trust from './components/Trust.jsx';
import Products from './components/Products.jsx';

function Landing() {
  return (
    <>
      <Hero />
      <Features />
      <Trust />
      <Pricing />
    </>
  );
}

function App() {
  const [route, setRoute] = useState(window.location.hash.replace('#', ''));

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash.replace('#', ''));
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const isProducts = route === 'products';

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      {isProducts ? <Products /> : <Landing />}
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
