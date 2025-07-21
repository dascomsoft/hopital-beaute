import React from 'react';
import { FaWhatsapp, FaStar, FaCheck } from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Packs = () => {

     useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);


   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const whatsappNumber = "237695070705";

  const packs = [
    {
      name: "Pack Découverte",
      price: "5.000 FCFA",
      originalPrice: null,
      popular: false,
      services: [
        "Tresses en images (main d'œuvre)",
        "Ongles gel main",
        "Ongles gel pieds", 
        "Cils naturels",
        "Pédicure chaude"
      ],
      gradient: "from-pink-400 to-rose-400",
      badge: "Idéal pour débuter"
    },
    {
      name: "Pack Éclat",
      price: "7.000 FCFA",
      originalPrice: null,
      popular: true,
      services: [
        "Soins visage avec extraction de comédons",
        "Gommage corporel éclat",
        "Pédicure chaude",
        "Gainage gel main",
        "Capsule vernis pied",
        "Cils naturels"
      ],
      gradient: "from-purple-400 to-pink-400",
      badge: "Le plus populaire"
    },
    {
      name: "Pack Glamour",
      price: "7.000 FCFA",
      originalPrice: null,
      popular: false,
      services: [
        "Extension cils à cils",
        "Pose perruque lace frontale + brushing",
        "Capsule vernis gel pied",
        "Pédicure chaude"
      ],
      gradient: "from-indigo-400 to-purple-400",
      badge: "Look de star"
    },
    {
      name: "Pack Prestige",
      price: "10.000 FCFA",
      originalPrice: null,
      popular: false,
      services: [
        "Microshading sourcils",
        "Vernis gel pieds",
        "Pédicure chaude",
        "Modelage visage"
      ],
      gradient: "from-rose-400 to-orange-400",
      badge: "Technique premium"
    },
    {
      name: "Pack Excellence",
      price: "10.000 FCFA",
      originalPrice: null,
      popular: false,
      services: [
        "Extension cils à cils",
        "Capsule gel pied avec french",
        "Soins visage éclat + comédons",
        "Pose perruque lace frontale + brushing"
      ],
      gradient: "from-teal-400 to-blue-400",
      badge: "Transformation complète"
    },
    {
      name: "Pack VIP",
      price: "12.000 FCFA",
      originalPrice: null,
      popular: false,
      services: [
        "Butterfly's locks (avec mèches et main d'œuvre)",
        "Pédicure chaude",
        "Gainage gel main",
        "Vernis gel pieds",
        "Coup d'éclat visage",
        "Extension cils à cils",
        "Gommage corporel"
      ],
      gradient: "from-emerald-400 to-teal-400",
      badge: "Expérience VIP"
    },
    {
      name: "Pack Royale",
      price: "14.000 FCFA",
      originalPrice: null,
      popular: false,
      services: [
        "Coiffure en image (main d'œuvre + mèches offertes)",
        "Pédicure chaude",
        "Construction gel main (french)",
        "Extension cils à cils",
        "Ongles gel pieds avec french",
        "Soins visage éclat + comédons",
        "Gommage au savon noir"
      ],
      gradient: "from-amber-400 to-orange-400",
      badge: "Le summum du luxe"
    }
  ];

  const getWhatsappMessage = (packName, price) => {
    return `Bonjour! Je souhaite réserver le ${packName} à ${price}. Merci!`;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-400/80 to-pink-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Packs Beauté
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Des formules complètes pensées pour vous offrir une expérience beauté exceptionnelle 
              à des prix accessibles.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <GiSparkles className="text-orange-300 text-xl" />
              <span className="font-playfair text-lg">"Viens briller sans stresser ton budget"</span>
              <GiSparkles className="text-orange-300 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Packs Grid */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${
                pack.popular ? 'ring-4 ring-pink-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {pack.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <FaStar className="text-xs" />
                    <span>Populaire</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`bg-gradient-to-r ${pack.gradient} p-6 text-white`}>
                <div className="text-center">
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {pack.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{pack.price}</span>
                    {pack.originalPrice && (
                      <span className="text-lg line-through opacity-75 ml-2">
                        {pack.originalPrice}
                      </span>
                    )}
                  </div>
                  <p className="text-sm opacity-90">{pack.badge}</p>
                </div>
              </div>

              {/* Services List */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {pack.services.map((service, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <FaCheck className="text-pink-500 text-sm mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsappMessage(pack.name, pack.price))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${pack.gradient} text-white py-3 px-6 rounded-full font-semibold text-center transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2`}
                >
                  <FaWhatsapp />
                  <span>Réserver ce pack</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-pink-200 to-amber-50 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl font-bold text-pink-700 mb-6">
              Pourquoi choisir nos packs ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <GiSparkles className="text-4xl text-pink-500" />,
                title: "Qualité Premium",
                description: "Des produits haut de gamme et des techniques professionnelles pour des résultats exceptionnels."
              },
              {
                icon: <FaStar className="text-4xl text-orange-300" />,
                title: "Prix Accessibles",
                description: "Des tarifs étudiés pour que chaque femme puisse s'offrir un moment de beauté."
              },
              {
                icon: <FaCheck className="text-4xl text-pink-700" />,
                title: "Satisfaction Garantie",
                description: "Notre équipe experte s'engage à vous offrir une expérience beauté inoubliable."
              }
            ].map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-pink-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in" className="max-w-4xl mx-auto">
            <blockquote className="font-playfair text-2xl md:text-3xl text-pink-700 mb-8 italic">
              "Des ongles stylés, solides et classes"
            </blockquote>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                '#StyléeJusquAuxPieds', '#LookNet', '#OnglesStylés',
                '#BeautyPacks', '#DocteurAichaBeauty', '#YaoundéBeauty'
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-200/50 px-4 py-2 rounded-full text-pink-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Réservez votre pack dès maintenant
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Profitez de nos formules complètes pour une transformation beauté à prix doux
            </p>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour! Je souhaite réserver un pack beauté. Pouvez-vous me conseiller?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              <span>Demander conseil sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packs;