
import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Soft Beige Luxury Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-spa-ivory via-spa-beige-soft/30 to-spa-beige-soft/60 -z-10"></div>
      
      {/* Decorative Texture Overlay */}
      <div className="absolute inset-0 marble-texture opacity-[0.05] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-20">
          <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-spa-gold-deep font-bold mb-6">Relatos de Bem-Estar</p>
          <div className="relative">
            {/* Elegant Gold Quotation Marks */}
            <Quote className="w-20 h-20 text-spa-gold opacity-50 fill-current" />
            <div className="absolute inset-0 bg-spa-gold/10 blur-3xl rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={t.id} 
              className={`relative p-12 glass-card rounded-sm shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center text-center group ${
                index === 1 ? 'md:scale-105 md:z-10 border-spa-gold/30 bg-white/60' : 'bg-white/40'
              }`}
            >
              {/* Subtle gold accent line top */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-spa-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex gap-1.5 mb-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-spa-gold-deep/60"></div>
                ))}
              </div>
              
              <p className="font-serif text-xl lg:text-2xl italic text-gray-700 leading-relaxed mb-10">
                "{t.text}"
              </p>
              
              <div className="mt-auto pt-8 border-t border-spa-gold/10 w-full flex flex-col items-center">
                <p className="font-sans text-[11px] uppercase tracking-[0.4em] font-bold text-spa-gold-deep">
                  {t.name}
                </p>
                <p className="font-sans text-[8px] uppercase tracking-[0.2em] text-gray-400 mt-2">Foz do Iguaçu, PR</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aesthetic background glows */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-spa-gold/5 blur-[120px] rounded-full -translate-x-1/2 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-spa-beige-dark/10 blur-[100px] rounded-full translate-x-1/4 translate-y-1/4 -z-10"></div>
      </div>
    </section>
  );
};

export default Testimonials;
