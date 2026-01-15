import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-spa-ivory to-spa-beige-soft relative overflow-hidden">
      {/* Texture and Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spa-gold/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative group">
          <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl">
            <img 
              src="https://i.postimg.cc/tgdf4Fhg/43FBCF59-E82B-4AA9-95F9-F6D7886D2A4F.png" 
              alt="Ambiente SM Head Spa - Elegância e Luxo" 
              className="w-full h-[550px] object-cover transition-all duration-1000 transform group-hover:scale-105"
            />
            {/* Soft gold wash over image */}
            <div className="absolute inset-0 bg-spa-gold/15 mix-blend-overlay"></div>
            {/* Warm glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-spa-beige-dark/20 to-transparent"></div>
          </div>
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-spa-gold/40"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-spa-gold/40"></div>
          
          <div className="absolute top-1/2 -right-10 hidden lg:block bg-spa-beige-dark px-6 py-4 rounded-sm shadow-xl transform translate-y-20">
             <p className="font-serif italic text-white text-xl">Refúgio Premium</p>
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-10">
          <div className="space-y-4">
            <p className="font-sans text-[10px] uppercase tracking-[0.5em] text-spa-gold-deep font-bold">O Estúdio</p>
            <h2 className="font-serif text-5xl lg:text-6xl text-gray-800 italic leading-tight">
              O Luxo do Silêncio e do Bem-Estar
            </h2>
          </div>
          
          <div className="w-20 h-px bg-spa-gold mb-8"></div>
          
          <div className="space-y-6">
            <p className="font-sans text-xl text-gray-700 leading-relaxed font-light italic">
              O <strong>SM Head Spa</strong> é mais que um estúdio de beleza; é uma pausa necessária na rotina para reconexão interior.
            </p>
            <p className="font-sans text-lg text-gray-600 leading-loose font-light">
              Localizado em Foz do Iguaçu, oferecemos uma experiência sensorial completa. Nossos rituais são pensados para desintoxicar, relaxar e renovar suas energias através de técnicas exclusivas inspiradas no Oriente Médio.
            </p>
          </div>

          <div className="pt-8 grid grid-cols-2 gap-12 border-t border-spa-gold/30">
            <div className="space-y-2">
              <p className="font-serif text-4xl text-spa-gold-deep italic">Elegância</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Curadoria de Detalhes</p>
            </div>
            <div className="space-y-2">
              <p className="font-serif text-4xl text-spa-gold-deep italic">Cuidado</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Terapias Humanizadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;