import React from 'react';
import { Sparkles, Wind, Droplets, Heart, Gem, Star, Zap, User, Flower2, Moon } from 'lucide-react';
import { Service, Testimonial } from './types';

export const COLORS = {
  beigeDark: '#CBB8A5',
  beigeSoft: '#E5D7C7',
  ivory: '#F8F5F0',
  gold: '#D7BFAE',
};

export const SERVICES: Service[] = [
  { 
    id: '1', 
    name: 'Head Spa Premium', 
    description: 'A experiência definitiva de relaxamento com o exclusivo ritual do Aro de Água e óleos essenciais.', 
    icon: <Sparkles className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/pXRsyQhS/FD54F51A-941F-4E32-A734-868B3400F8FB.png' 
  },
  { 
    id: '2', 
    name: 'Head Spa Tradicional SM', 
    description: 'Técnica exclusiva inspirada nos rituais do Oriente Médio.', 
    icon: <Flower2 className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/NjtsLjRb/F75041CE-515C-42E3-870F-C4EB000862B6.jpg'
  },
  { 
    id: '3', 
    name: 'Massagem Relaxante', 
    description: 'Toques suaves sob luz de velas para aliviar o estresse.', 
    icon: <Wind className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/kMf8CL8t/7.jpg'
  },
  { 
    id: '4', 
    name: 'Massagem Corporal Modeladora', 
    description: 'Definição e bem-estar em um ritual de autocuidado profundo.', 
    icon: <User className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/yYyG71jY/Maderotherapy.jpg'
  },
  { 
    id: '5', 
    name: 'Drenagem Linfática', 
    description: 'Redução de medidas e desintoxicação em ambiente sereno.', 
    icon: <Droplets className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/RVytYK5V/Gemini_Generated_Image_azr470azr470azr4.png'
  },
  { 
    id: '6', 
    name: 'Ventosaterapia', 
    description: 'Técnica milenar Hijama para liberação e circulação.', 
    icon: <Moon className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/DZ1g56YX/Untitled.jpg'
  },
  { 
    id: '7', 
    name: 'Pedras Quentes', 
    description: 'Equilíbrio térmico inspirado nos banhos orientais.', 
    icon: <Gem className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/9f7K5GnR/09468C65-D041-410D-953C-1C505D222EE0.jpg'
  },
  { 
    id: '8', 
    name: 'HTM Beauty Dermo', 
    description: 'Tecnologia avançada em harmonia com cuidados clássicos.', 
    icon: <Zap className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/zGFYPmVg/860C1278-A41A-4C4D-B51B-8881B899ACC8.png'
  },
  { 
    id: '9', 
    name: 'Gordura Localizada e Celulite', 
    description: 'Protocolos personalizados de alta performance e luxo.', 
    icon: <Star className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/k5ZvFzJT/Gemini-Generated-Image-sxdv91sxdv91sxdv.png'
  },
  { 
    id: '10', 
    name: 'Bumbum Pump Up', 
    description: 'Tratamento estético exclusivo para elevação e firmeza.', 
    icon: <Heart className="w-6 h-6 text-spa-gold-deep" />,
    image: 'https://i.postimg.cc/xTnJtHsJ/Gemini-Generated-Image-2qcmoa2qcmoa2qcm.png'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Ana Paula G.', text: 'Uma experiência que vai além da beleza. O Head Spa me trouxe uma paz que eu não sentia há muito tempo.' },
  { id: '2', name: 'Mariana S.', text: 'O atendimento é impecável e o ambiente é simplesmente deslumbrante. Me senti uma rainha.' },
  { id: '3', name: 'Julia M.', text: 'Foz do Iguaçu precisava de um espaço assim. Sofisticação e cuidado em cada detalhe.' },
];

export const WHATSAPP_LINK = "https://wa.me/message/7MCKBYJUWJEUI1";
export const INSTAGRAM_LINK = "https://www.instagram.com/smheadspa/";
export const EMAIL = "smmasoterapiaheadspa@gmail.com";
export const LOCATION = "Foz do Iguaçu – PR";