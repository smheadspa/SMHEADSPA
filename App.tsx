
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FloatingInstagram from './components/FloatingInstagram';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-spa-gold/30">
      {/* Global Luxury Background Layer */}
      <div className="fixed inset-0 bg-luxury-gradient -z-20 pointer-events-none"></div>
      
      {/* Subtle Marble Texture Overlay for the entire site */}
      <div className="fixed inset-0 marble-texture opacity-[0.03] -z-10 pointer-events-none"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Booking />
      </main>
      
      <Footer />
      
      <FloatingWhatsApp />
      <FloatingInstagram />
    </div>
  );
};

export default App;
