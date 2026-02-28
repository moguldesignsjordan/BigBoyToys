import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Globe, Menu, X, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [language, setLanguage] = useState('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    en: {
      nav: ['Home', 'Rentals', 'Location', 'Contact'],
      heroTitle: 'BIG BOY TOYS',
      heroSubtitle: 'ATVs, Bikes, and Scooters Rentals in Sosúa',
      cta: 'Book Your Ride',
      rentalsTitle: 'Our Fleet',
      locationTitle: 'Find Us',
      address: 'Calle Alejo Martinez, in the plaza next to Banco Popular, Sosúa',
      whatsappText: 'Chat with us on WhatsApp',
    },
    es: {
      nav: ['Inicio', 'Alquileres', 'Ubicación', 'Contacto'],
      heroTitle: 'BIG BOY TOYS',
      heroSubtitle: 'Alquiler de ATVs, Motos y Scooters en Sosúa',
      cta: 'Reserva tu Aventura',
      rentalsTitle: 'Nuestra Flota',
      locationTitle: 'Encuéntranos',
      address: 'Calle Alejo Martinez, en la plaza al lado del Banco Popular, Sosúa',
      whatsappText: 'Chatea con nosotros por WhatsApp',
    }
  };

  const t = content[language];

  const whatsappContacts = [
    { label: 'Sales & Booking (USA)', number: '+12022003997' },
    { label: 'Support (International)', number: '+46700348320' }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-black/95 border-b border-zinc-800 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <img src="/logo.png" alt="Big Boy Toys Logo" className="h-12 w-auto object-contain" />

          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition-colors uppercase text-xs font-bold tracking-[0.2em]">
                {item}
              </a>
            ))}
            <button 
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-2 bg-red-600 px-4 py-1.5 rounded-full font-bold text-xs hover:bg-red-700 transition-all"
            >
              <Globe size={14} /> {language.toUpperCase()}
            </button>
          </div>

          <button className="md:hidden text-red-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden">
            {t.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-2xl font-black italic uppercase tracking-tighter">
                {item}
              </a>
            ))}
            <button 
              onClick={() => {setLanguage(language === 'en' ? 'es' : 'en'); setIsMenuOpen(false);}}
              className="mt-4 flex items-center gap-2 bg-red-600 px-6 py-2 rounded-full font-bold"
            >
              <Globe size={18} /> {language.toUpperCase()}
            </button>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
        <img 
          src="/image1.png" 
          alt="Hero Bike" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter text-white drop-shadow-2xl mb-4">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl font-medium tracking-wide mb-10 text-zinc-300">
            {t.heroSubtitle}
          </p>
          <a href="#contact" className="bg-red-600 hover:bg-white hover:text-black text-white px-10 py-4 rounded-sm font-black uppercase tracking-widest transition-all inline-block">
            {t.cta}
          </a>
        </div>
      </section>

      {/* --- Fleet Section --- */}
      <section id="rentals" className="py-24 bg-zinc-950 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-1 w-20 bg-red-600" />
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">{t.rentalsTitle}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-colors">
              <div className="aspect-video overflow-hidden">
                <img src="/image1.png" alt="Dirt Bikes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black italic mb-2 tracking-tight">Dirt Bikes & Scooters</h3>
                <p className="text-zinc-400 font-light leading-relaxed">High-performance machines for the streets and trails of Sosúa.</p>
              </div>
            </div>

            <div className="group overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-600 transition-colors">
              <div className="aspect-video overflow-hidden">
                <img src="/image2.png" alt="ATVs" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black italic mb-2 tracking-tight">ATV / Quad Rentals</h3>
                <p className="text-zinc-400 font-light leading-relaxed">Heavy-duty 4x4 power for the ultimate off-road experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Location Section --- */}
      <section id="location" className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <img src="/image3.png" alt="Our Location" className="rounded-lg shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="order-1 md:order-2">
            <MapPin className="text-red-600 mb-6" size={40} />
            <h2 className="text-5xl font-black italic mb-8 uppercase tracking-tighter">{t.locationTitle}</h2>
            <p className="text-2xl font-light text-zinc-300 leading-snug italic">
              "{t.address}"
            </p>
          </div>
        </div>
      </section>

      {/* --- Footer & WhatsApp --- */}
      <footer id="contact" className="bg-zinc-950 py-20 px-6 border-t border-red-600/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="max-w-md">
            <img src="/logo.png" alt="Big Boy Toys" className="h-16 mb-8" />
            <p className="text-zinc-500 font-light text-lg">
              The #1 destination for power-sports in Sosúa. Experience the island like never before.
            </p>
          </div>
          
          <div className="w-full md:w-96 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-red-500 mb-6">{t.whatsappText}</h4>
            {whatsappContacts.map((contact, idx) => (
              <a 
                key={idx}
                href={`https://wa.me/${contact.number.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-zinc-900/50 p-5 rounded border border-zinc-800 hover:border-green-500 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <MessageSquare className="text-green-500" size={24} />
                  <div>
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{contact.label}</p>
                    <p className="text-xl font-mono text-white group-hover:text-green-400">{contact.number}</p>
                  </div>
                </div>
                <ChevronRight className="text-zinc-700 group-hover:text-green-500" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] uppercase tracking-widest font-bold gap-4">
          <span>© 2026 BIG BOY TOYS SOSÚA</span>
          <span>
            Powered by{' '}
            <a 
              href="https://moguldesignagency.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-red-600 hover:text-white transition-colors duration-300 underline underline-offset-4"
            >
              Mogul Design Agency
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;