import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Packs Beauté', path: '/packs' },
    { name: 'Astuces', path: '/astuces' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'Avis', path: '/avis' },
    { name: 'Contact', path: '/contact' },
  ];

  const whatsappNumber = "237695070705";
  const whatsappMessage = "Bonjour! Je souhaite prendre rendez-vous à l'Hôpital de la Beauté.";

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-[hsl(330,81%,60%)] to-[hsl(15,85%,75%)] p-2 rounded-full group-hover:animate-pulse group-hover:duration-2000">
              <GiDiamondRing className="text-white text-2xl" />
            </div>
            <div>
              <h1 className="font-playfair text-xl font-bold text-[hsl(330,70%,60%)]">
                Dr. Aïcha Beauty
              </h1>
              <p className="text-xs text-slate-900">Hôpital de la Beauté</p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-extrabold transition-all duration-300 hover:text-[hsl(330,81%,60%)] ${
                    isActive ? 'text-[hsl(330,81%,60%)]' : 'text-stone-900'
                  } after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[hsl(330,81%,60%)] after:left-0 after:-bottom-1 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive ? 'after:scale-x-100' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[hsl(330,70%,45%)] text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 bg-[radial-gradient(circle_at_25%_25%,rgba(219,39,119,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(244,114,182,0.1)_0%,transparent_50%)]">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 text-sm font-medium transition-all duration-300 hover:text-[hsl(330,81%,60%)] hover:bg-[hsl(350,70%,85%)] rounded-md ${
                    isActive ? 'text-[hsl(330,81%,60%)] bg-[hsl(350,70%,85%)]' : 'text-gray-700'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg text-center transition-all duration-300"
            >
              <FaWhatsapp className="inline mr-2" />
              Contacter via WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;