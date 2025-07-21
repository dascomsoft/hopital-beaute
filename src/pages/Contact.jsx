import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




const Contact = () => {


     useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);

 
       useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const whatsappNumber = "237695070705";
  const phoneNumber = "237671044349";

  const services = [
    "Soins Visage",
    "Onglerie Premium", 
    "Extensions Cils",
    "Coiffure VIP",
    "Massage & Détente",
    "Packs Beauté",
    "Conseils personnalisés"
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Bonjour! Voici mes informations de contact:
    
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Service souhaité: ${formData.service}
Message: ${formData.message}

J'aimerais prendre rendez-vous. Merci!`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/review-bg.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-400/80 to-pink-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner 
              dans votre parcours beauté.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-pink-500 rounded-full p-3">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <h2 className="font-playfair text-3xl font-bold text-pink-700">
                  Formulaire de Contact
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-pink-700 font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-pink-700 font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-pink-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-pink-700 font-medium mb-2">
                    Service souhaité
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-pink-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300 resize-none"
                    placeholder="Décrivez vos besoins ou questions..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-300 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>Envoyer via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-left" className="space-y-6">
            {/* Location */}
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-500 rounded-full p-4">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-pink-700">
                  Notre Adresse
                </h3>
              </div>
              
              <div className="space-y-2">
                <p className="text-lg font-semibold text-pink-700">
                  Hôpital de la Beauté
                </p>
                <p className="text-gray-700">Yaoundé, Carrefour Belibi</p>
                <p className="text-gray-600">Descente avant marché Essos</p>
                <p className="text-sm text-gray-500">
                  Facilement accessible en transport public
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500 rounded-full p-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-pink-700">
                  Téléphone
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">WhatsApp/Appel :</span>
                  <a 
                    href={`tel:+${whatsappNumber}`}
                    className="font-semibold text-pink-700 hover:text-pink-500 transition-colors"
                  >
                    695 07 07 05
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Ligne directe :</span>
                  <a 
                    href={`tel:+${phoneNumber}`}
                    className="font-semibold text-pink-700 hover:text-pink-500 transition-colors"
                  >
                    671 04 43 49
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-500 rounded-full p-4">
                  <FaClock className="text-white text-2xl" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-pink-700">
                  Horaires
                </h3>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Lundi - Vendredi :</span>
                  <span className="font-semibold text-pink-700">8h - 19h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Samedi :</span>
                  <span className="font-semibold text-pink-700">8h - 20h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Dimanche :</span>
                  <span className="font-semibold text-pink-700">10h - 18h</span>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Rendez-vous sur réservation uniquement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Buttons */}
      <section className="py-16 bg-gradient-to-r from-pink-200 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl font-bold text-pink-700 mb-4">
              Contact Rapide
            </h2>
            <p className="text-xl text-gray-700">
              Choisissez votre moyen de contact préféré
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour! Je souhaite prendre rendez-vous.")}`}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <FaWhatsapp className="text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-playfair text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-90">Message instantané</p>
            </a>

            <a
              href={`tel:+${phoneNumber}`}
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-pink-500 hover:bg-pink-700 text-white rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              <FaPhone className="text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Appel Direct</h3>
              <p className="text-sm opacity-90">Réponse immédiate</p>
            </a>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-purple-500 hover:bg-purple-600 text-white rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <FaEnvelope className="text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-playfair text-xl font-semibold mb-2">Formulaire</h3>
              <p className="text-sm opacity-90">Contact détaillé</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl font-bold text-pink-700 mb-4">
              Comment nous trouver
            </h2>
            <p className="text-xl text-gray-600">
              Située au cœur de Yaoundé pour votre commodité
            </p>
          </div>

          <div data-aos="zoom-in" className="bg-gradient-to-br from-pink-200 to-amber-50 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-2xl font-bold text-pink-700 mb-4">
                  Accès facile
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-700">Proche du marché Essos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-700">Parking disponible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-700">Transport public accessible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <span className="text-gray-700">Quartier sécurisé</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6">
                <div className="aspect-video bg-gradient-to-br from-pink-500 to-orange-300 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <FaMapMarkerAlt className="text-6xl mx-auto mb-4" />
                    <p className="font-playfair text-xl font-semibold">
                      Carrefour Belibi
                    </p>
                    <p className="text-sm opacity-90">
                      Yaoundé, Cameroun
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <GiDiamondRing className="text-4xl" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">
                Nous avons hâte de vous rencontrer
              </h2>
              <GiDiamondRing className="text-4xl" />
            </div>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Notre équipe est prête à vous offrir une expérience beauté exceptionnelle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour! Je souhaite réserver un rendez-vous dès que possible.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Réservation immédiate</span>
              </a>
              
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaPhone />
                <span>Appeler maintenant</span>
              </a>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-2">
              <FaHeart className="text-orange-300" />
              <span className="text-sm opacity-90">
                Votre satisfaction est notre priorité
              </span>
              <FaHeart className="text-orange-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;