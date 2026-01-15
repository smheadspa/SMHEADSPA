import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-spa-ivory">
        <img 
          src="https://i.postimg.cc/65Hm7926/6C5160E1-30D4-4AA1-9962-8D0C35F61B02.jpg" 
          alt="Mulher relaxada em ambiente de spa luxuoso" 
          className="w-full h-full object-cover object-center transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-spa-gold/20 blur-[150px] rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="inline-block px-6 py-2 border border-white/30 backdrop-blur-md rounded-full mb-4 animate-fade-in bg-white/10">
            <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-white font-bold drop-shadow-md">Foz do Iguaçu – PR</span>
          </div>

          <div className="space-y-6">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] drop-shadow-xl">
              SM Head Spa — <br />
              <span className="italic font-normal">O Luxo do Silêncio</span>
            </h1>
            <p className="font-sans text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
              Descubra o poder transformador dos nossos rituais orientais. Um santuário para o seu bem-estar profundo.
            </p>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={WHATSAPP_LINK} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-spa-gold-deep hover:bg-spa-gold text-white px-14 py-6 rounded-sm font-sans font-bold text-sm uppercase tracking-[0.3em] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-4 group active:scale-95"
            >
              <span>Agendar Sessão</span>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
            </a>
            
            <a 
              href="#services" 
              className="w-full sm:w-auto px-14 py-6 rounded-sm font-sans font-bold text-sm uppercase tracking-[0.3em] border border-white/60 text-white hover:bg-white/20 backdrop-blur-sm transition-all text-center"
            >
              Conhecer Rituais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;