import React from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { EMAIL, LOCATION, WHATSAPP_LINK, INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-spa-beige-dark text-white pt-20 pb-10 relative overflow-hidden">
      {/* Subtle Marble Background for Footer */}
      <div className="absolute inset-0 marble-texture opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-1 space-y-6">
            <div className="flex flex-col gap-4">
              <img 
                src="https://i.postimg.cc/vZxPhp2Q/C0E8CF35-DAF4-490A-9BDE-280158183E89.png" 
                alt="SM Head Spa Logo" 
                className="h-24 w-auto object-contain brightness-0 invert" 
              />
              <p className="text-[10px] tracking-[0.4em] uppercase text-spa-ivory/80 font-semibold">Head Spa</p>
            </div>
            <p className="text-xs font-light text-spa-ivory/80 leading-relaxed pr-6">
              O SM Head Spa é o refúgio perfeito para quem busca reconexão e sofisticação em Foz do Iguaçu.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">Navegação</h4>
            <ul className="space-y-4 font-sans text-xs text-spa-ivory/70 tracking-widest">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testemunhos</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Contatos</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">Contatos</h4>
            <ul className="space-y-4 font-sans text-xs text-spa-ivory/70 tracking-widest">
              <li className="flex items-center gap-3">
                <Phone className="w-3 h-3 text-spa-gold" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3 h-3 text-spa-gold" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3 h-3 text-spa-gold mt-0.5" />
                <span>{LOCATION}</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a 
                href={INSTAGRAM_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-spa-gold transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-spa-gold transition-all"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-[10px] tracking-widest uppercase text-spa-ivory/50">
            © 2024 SM Head Spa. Todos os direitos reservados.
          </p>
          <div className="flex gap-8 font-sans text-[9px] uppercase tracking-widest text-spa-ivory/40">
            <a href="#" className="hover:text-white">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;