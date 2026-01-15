
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-spa-ivory relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-spa-gold-deep font-bold">Nossas Especialidades</p>
          <h2 className="font-serif text-4xl md:text-5xl text-gray-800 italic">Rituais & Terapias</h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="h-px w-12 bg-spa-gold/40"></div>
            <div className="w-2 h-2 rounded-full bg-spa-gold"></div>
            <div className="h-px w-12 bg-spa-gold/40"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group relative overflow-hidden rounded-sm shadow-xl bg-white flex flex-col h-full"
            >
              {/* Service Photo - Immersive Middle Eastern Vibe */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="text-white scale-75">{service.icon}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow space-y-4">
                <h3 className="font-serif text-2xl text-gray-800 group-hover:text-spa-gold-deep transition-colors italic">
                  {service.name}
                </h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-spa-gold/10 flex justify-between items-center">
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-spa-gold-deep font-bold">Inspirado no Oriente</span>
                  <div className="w-8 h-px bg-spa-gold transform origin-right group-hover:scale-x-150 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Marble Overlay for the section */}
      <div className="absolute inset-0 marble-texture opacity-5 pointer-events-none"></div>
      
      {/* Background decoration */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 border border-spa-gold/10 rounded-full"></div>
    </section>
  );
};

export default Services;
