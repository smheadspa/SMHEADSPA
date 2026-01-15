
import React from 'react';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_LINK } from '../constants';

const FloatingInstagram: React.FC = () => {
  return (
    <a
      href={INSTAGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 right-8 md:bottom-40 md:right-14 z-[100] group flex items-center gap-4 drop-shadow-2xl"
      aria-label="Siga-nos no Instagram"
    >
      {/* Label Tooltip */}
      <div className="hidden lg:flex items-center bg-white/95 backdrop-blur-xl px-6 py-3 rounded-full border border-spa-gold/30 shadow-2xl opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-spa-gold-deep font-bold whitespace-nowrap">
          Siga nosso Instagram
        </span>
      </div>

      {/* Button */}
      <div className="relative">
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-spa-gold rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
        
        <div className="relative flex items-center justify-center w-14 h-14 bg-white/90 hover:bg-white text-spa-gold-deep rounded-full shadow-lg transition-all duration-500 transform group-hover:scale-110 active:scale-90 border border-spa-gold/20 backdrop-blur-sm">
          <Instagram className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default FloatingInstagram;
