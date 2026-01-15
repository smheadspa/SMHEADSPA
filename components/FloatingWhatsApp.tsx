
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] group flex items-center gap-4 drop-shadow-2xl"
      aria-label="Agende seu Momento no WhatsApp"
    >
      {/* Label Tooltip - Elevated styling */}
      <div className="hidden lg:flex items-center bg-white/95 backdrop-blur-xl px-6 py-4 rounded-full border border-spa-gold/30 shadow-2xl opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
        <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-spa-gold-deep font-bold whitespace-nowrap">
          Agende seu Momento
        </span>
      </div>

      {/* Button with intense gold radiance */}
      <div className="relative">
        {/* Glow and Pulse Layers */}
        <div className="absolute inset-0 bg-spa-gold rounded-full blur-2xl opacity-70 animate-pulse scale-150"></div>
        <div className="absolute inset-0 bg-spa-gold-deep rounded-full blur-md opacity-40 group-hover:scale-125 transition-transform duration-700"></div>
        
        <div className="relative flex items-center justify-center w-20 h-20 bg-spa-gold-deep hover:bg-spa-gold text-white rounded-full shadow-[0_15px_60px_rgba(182,154,125,0.8)] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-[360deg] active:scale-90 border-4 border-white/50">
          <MessageCircle className="w-10 h-10 fill-current" />
        </div>
        
        {/* Mobile-only Label Badge */}
        <div className="absolute -top-3 -left-3 lg:hidden bg-white text-spa-gold-deep px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-tighter border border-spa-gold shadow-md">
          WhatsApp
        </div>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
