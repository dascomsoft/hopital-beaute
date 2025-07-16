
import React from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const whatsappNumber = "237695070705";
  const phoneNumber = "237671044349";
  const whatsappMessage = "Bonjour! Je souhaite prendre rendez-vous à l'Hôpital de la Beauté.";

  return (
    <footer className="bg-pink-500 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/20 p-3 rounded-full">
                <GiDiamondRing className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">Dr. Aïcha Beauty</h3>
                <p className="text-white/80">Hôpital de la Beauté</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 leading-relaxed">
              Votre destination beauté à Yaoundé. Nous offrons des soins haut de gamme 
              dans un cadre chic et apaisant pour révéler votre éclat naturel.
            </p>
            <div className="flex space-x-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <FaPhone className="text-xl" />
              </a>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Navigation</h4>
            <div className="space-y-2">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Packs Beauté', path: '/packs' },
                { name: 'Galerie', path: '/galerie' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="block text-white/80 hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-white/80 mt-1" />
                <div>
                  <p className="text-white/90">Yaoundé</p>
                  <p className="text-white/80 text-sm">Carrefour Belibi</p>
                  <p className="text-white/70 text-xs">Descente avant marché Essos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-white/80" />
                <div>
                  <p className="text-white/90">695 07 07 05</p>
                  <p className="text-white/80 text-sm">671 04 43 49</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hashtags */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              '#FacialCare', '#GlowUp', '#DocteurAichaBeauty', 
              '#BeautyYaoundé', '#SoinsAccessibles', '#ManucurePédicure'
            ].map((tag) => (
              <span
                key={tag}
                className="bg-white/20 px-3 py-1 rounded-full text-sm text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/80 flex items-center justify-center space-x-2">
            <span>© 2024 Dr. Aïcha Beauty - Hôpital de la Beauté</span>
            <FaHeart className="text-beauty-rose-gold" />
            <span>Yaoundé</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
