import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiLipstick, GiEyelashes, GiDiamondRing } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';
import { BiBody } from 'react-icons/bi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




const Services = () => {


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
  const whatsappMessage = "Bonjour! Je souhaite plus d'informations sur vos services.";

  const services = [
    {
      category: "Soins Visage",
      icon: <MdSpa className="text-4xl text-pink-500" />,
      description: "Révélez l'éclat de votre peau avec nos soins personnalisés",
      treatments: [
        "Nettoyage en profondeur",
        "Extraction des comédons",
        "Soin éclat anti-âge",
        "Masque hydratant premium",
        "Modelage visage relaxant",
        "Coup d'éclat express"
      ],
      gradient: "from-pink-100 to-rose-100"
    },
    {
      category: "Onglerie Premium",
      icon: <GiLipstick className="text-4xl text-orange-300" />,
      description: "Des ongles stylés, solides et classes pour toutes les occasions",
      treatments: [
        "Gainage gel main",
        "Capsule avec vernis",
        "French manucure",
        "Ongles gel pieds",
        "Pédicure chaude relaxante",
        "Nail art personnalisé"
      ],
      gradient: "from-rose-100 to-orange-100"
    },
    {
      category: "Cils & Sourcils",
      icon: <GiEyelashes className="text-4xl text-pink-200" />,
      description: "Intensifiez votre regard avec nos techniques professionnelles",
      treatments: [
        "Extension cil à cil",
        "Cils naturels volume",
        "Microshading sourcils",
        "Restructuration sourcils",
        "Teinture cils & sourcils",
        "Rehaussement de cils"
      ],
      gradient: "from-purple-100 to-pink-100"
    },
    {
      category: "Coiffure VIP",
      icon: <GiDiamondRing className="text-4xl text-pink-700" />,
      description: "Transformez votre style avec nos créations capillaires",
      treatments: [
        "Pose perruque lace frontale",
        "Brushing professionnel",
        "Tresses africaines modernes",
        "Butterfly's locks avec mèches",
        "Coiffure en image sur mesure",
        "Entretien et styling"
      ],
      gradient: "from-indigo-100 to-purple-100"
    },
    {
      category: "Massage & Détente",
      icon: <MdSpa className="text-4xl text-pink-500" />,
      description: "Évadez-vous dans un moment de pure relaxation",
      treatments: [
        "Massage relaxant corps complet",
        "Massage californien",
        "Réflexologie plantaire",
        "Massage aux pierres chaudes",
        "Drainage lymphatique",
        "Massage anti-stress"
      ],
      gradient: "from-green-100 to-teal-100"
    },
    {
      category: "Soins Corporels",
      icon: <BiBody className="text-4xl text-orange-300" />,
      description: "Sublimez votre corps avec nos rituels de beauté",
      treatments: [
        "Gommage corporel éclat",
        "Gommage au savon noir",
        "Enveloppement hydratant",
        "Soin anti-cellulite",
        "Bronzage naturel",
        "Hydratation premium"
      ],
      gradient: "from-yellow-100 to-orange-100"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-400/80 to-pink-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Nos Services Premium
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Chez Docteur Aïcha Beauty, chaque femme mérite un moment de renaissance. 
              Découvrez notre gamme complète de soins haut de gamme.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 md:p-12 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-white rounded-full p-4 shadow-lg">
                      {service.icon}
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-pink-700">
                      {service.category}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour! Je souhaite plus d'informations sur ${service.category}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <FaWhatsapp />
                    <span>Réserver</span>
                  </a>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                  <h3 className="font-playfair text-xl font-semibold text-pink-700 mb-4">
                    Nos Prestations :
                  </h3>
                  <ul className="space-y-3">
                    {service.treatments.map((treatment, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full" />
                        <span className="text-gray-700">{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hashtags Section */}
      <section className="py-16 bg-gradient-to-r from-pink-200 to-amber-50 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="font-playfair text-3xl font-bold text-pink-700 mb-8">
              Rejoignez notre communauté beauté
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                '#FacialCare', '#GlowUp', '#DocteurAichaBeauty', 
                '#BeautyYaoundé', '#SoinsAccessibles', '#ManucurePédicure',
                '#StyléeJusquAuxPieds', '#LookNet', '#OnglesStylés'
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-pink-700 font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-2xl font-playfair text-pink-700 mb-4">
                "Viens briller sans stresser ton budget"
              </p>
              <p className="text-xl text-pink-700">
                "Un look net de la tête aux pieds"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up" className="bg-gradient-to-r from-pink-500 to-orange-300 rounded-3xl p-8 md:p-12 text-white">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Prête pour votre séance beauté ?
            </h2>
            <p className="text-xl mb-8">
              Contactez-nous dès maintenant pour réserver votre créneau
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Réserver sur WhatsApp</span>
              </a>
              
              <a
                href="tel:+237671044349"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Appeler directement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;