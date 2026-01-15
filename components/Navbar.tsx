import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 flex items-center justify-between ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-3">
        <a href="#" className="block transition-transform hover:scale-105 active:scale-95">
          <img 
            src="https://i.postimg.cc/vZxPhp2Q/C0E8CF35-DAF4-490A-9BDE-280158183E89.png" 
            alt="SM Head Spa Logo" 
            className={`transition-all duration-500 ${scrolled ? 'h-12 w-auto' : 'h-16 md:h-20 w-auto'}`}
          />
        </a>
      </div>
      
      <div className={`hidden md:flex gap-8 font-sans text-xs tracking-[0.2em] uppercase font-semibold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
        <a href="#about" className="hover:text-spa-gold transition-colors">Quem Somos</a>
        <a href="#services" className="hover:text-spa-gold transition-colors">Serviços</a>
        <a href="#testimonials" className="hover:text-spa-gold transition-colors">Experiências</a>
        <a href="#booking" className="hover:text-spa-gold transition-colors">Agendar</a>
      </div>

      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`px-6 py-2.5 rounded-full text-[10px] tracking-[0.1em] uppercase font-bold transition-all shadow-md active:scale-95 whitespace-nowrap ${
          scrolled 
            ? 'bg-spa-gold-deep text-white hover:bg-spa-gold' 
            : 'bg-white text-spa-gold-deep hover:bg-spa-ivory'
        }`}
      >
        Agende seu Momento
      </a>
    </nav>
  );
};

export default Navbar;