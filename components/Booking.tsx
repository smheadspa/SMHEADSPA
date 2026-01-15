
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-32 relative overflow-hidden">
      {/* Intense Luxury Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-beige-dark via-spa-beige-soft to-white"></div>
      
      {/* Metallic Glow Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(215,191,174,1),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
        <h2 className="font-serif text-5xl md:text-7xl text-gray-800 leading-tight">
          Agende Seu Momento <br />
          <span className="italic font-normal text-spa-gold-deep">O Luxo é Você</span>
        </h2>
        <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          Permita-se viver essa experiência transformadora. Nossa equipe está pronta para desenhar o ritual perfeito para sua necessidade.
        </p>
        <div className="pt-10">
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-16 py-6 bg-spa-gold-deep text-white font-sans font-bold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all shadow-2xl hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Agende seu Momento</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;
