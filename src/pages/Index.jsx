import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { GiDiamondRing, GiLipstick, GiEyelashes } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';
import { useEffect } from 'react';


const Index = () => {
  const whatsappNumber = "237695070705";
  const whatsappMessage = "Bonjour! Je souhaite réserver un rendez-vous à l'Hôpital de la Beauté.";

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);





  const services = [
    {
      icon: "/soins.jpeg",
      title: "Soins Visage",
      description: "Extraction comédons, nettoyage en profondeur"
    },
    {
      icon: "/ongle1.jpg",
      title: "Onglerie",
      description: "Gainage gel, capsule, vernis, french"
    },
    {
      icon: "/cil.jpg",
      title: "Cils & Sourcils",
      description: "Extensions cil à cil, microshading"
    },
    {
      icon: "/coiffure.jpg",
      title: "Coiffure VIP",
      description: "Perruques, brushing, tresses professionnelles"
    }
  ];





const realisations = [
    {
      icon: "/soins1.jpg",
      title: "Soins Visage",
      description: "Extraction comédons, nettoyage en profondeur"
    },
    {
      icon: "/ongle4.jpeg",
      title: "Onglerie",
      description: "Gainage gel, capsule, vernis, french"
    },
    {
      icon: "/cil5.jpg",
      title: "Cils & Sourcils",
      description: "Extensions cil à cil, microshading"
    },
 
  ];












  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/index.jpg)"
          }}
        />
        
        {/* Glamour Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(219,39,119,0.5)] via-[rgba(244,114,182,0.5)] to-[rgba(252,165,165,0.1)]" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up" data-aos-delay="200">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Dr. Aïcha Beauty
            </h1>
            <h2 className="font-playfair text-2xl md:text-4xl font-medium mb-8 text-[hsl(45,30%,90%)]">
              Hôpital de la Beauté
            </h2>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="400" className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Prenez soin de votre beauté dans un cadre chic et apaisant. 
              L'Institut Dr. Aïcha Beauty vous propose une gamme de soins haut de gamme 
              pour révéler votre éclat naturel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Réserver maintenant</span>
              </a>
              
              <NavLink
                to="/packs"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <span>Voir nos Packs</span>
                <FaArrowRight />
              </NavLink>
            </div>
          </div>

          {/* Floating Stars */}
          <div className="absolute top-20 left-10 animate-[float_3s_infinite]">
            <FaStar className="text-[hsl(15,85%,75%)] text-2xl opacity-80" />
          </div>
          <div className="absolute top-32 right-16 animate-[float_3s_infinite_1s]">
            <FaStar className="text-[hsl(45,30%,90%)] text-xl opacity-60" />
          </div>
          <div className="absolute bottom-32 left-20 animate-[float_3s_infinite_2s]">
            <FaStar className="text-white text-lg opacity-70" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[radial-gradient(circle_at_25%_25%,rgba(219,39,119,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(244,114,182,0.1)_0%,transparent_50%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(330,70%,45%)] mb-4">
              Nos Services Premium
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chez Docteur Aïcha Beauty, chaque femme mérite un moment de renaissance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] transition-all duration-300 group"
              >
                <div className="text-[hsl(330,81%,60%)] mb-4 group-hover:scale-110 transition-transform duration-300">
                <img src={service.icon} alt={service.title}  className='w-[100%] h-[250px] object-cover rounded-lg'/>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[hsl(330,70%,45%)] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <NavLink
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[hsl(330,81%,60%)] to-[hsl(15,85%,75%)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Découvrir tous nos services</span>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(350,70%,85%)] to-[hsl(45,30%,90%)]">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(330,70%,45%)] mb-6">
              Offre Spéciale
            </h2>
            <p className="text-2xl text-[hsl(330,70%,45%)] mb-8">
              "Viens briller sans stresser ton budget"
            </p>
            
            <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
              <h3 className="font-playfair text-3xl font-bold text-[hsl(330,81%,60%)] mb-4">
                Pack Découverte - 5000 FCFA
              </h3>
              <ul className="text-left space-y-2 mb-6">
                <li className="flex items-center space-x-2">
                  <FaStar className="text-[hsl(15,85%,75%)]" />
                  <span>Tresses en images (main d'œuvre)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaStar className="text-[hsl(15,85%,75%)]" />
                  <span>Ongles gel main & pieds</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaStar className="text-[hsl(15,85%,75%)]" />
                  <span>Cils naturels</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaStar className="text-[hsl(15,85%,75%)]" />
                  <span>Pédicure chaude</span>
                </li>
              </ul>
              
              <NavLink
                to="/packs"
                className="inline-block bg-gradient-to-r from-[hsl(330,81%,60%)] to-[hsl(15,85%,75%)] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Voir tous les packs
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(330,70%,45%)] mb-4">
              Nos Réalisations
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez le travail exceptionnel de notre équipe
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {realisations.map((item, index) => (
              <div
                key={item}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative overflow-hidden rounded-2xl group cursor-pointer hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)]"
              >
                <div className="aspect-square bg-gradient-to-br from-[hsl(350,70%,85%)] to-[hsl(15,85%,75%)] flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">
                   <img src={item.icon} alt={item.title}    className="w-full h-[400px] object-cover object-center rounded-lg"/>
                    {/* {index === 1 && <GiLipstick />}
                    {index === 2 && <GiEyelashes />} */}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="font-playfair text-xl font-semibold">
                      {index === 0 && "Soins Visage"}
                      {index === 1 && "Onglerie Premium"}
                      {index === 2 && "Extensions Cils"}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12" data-aos="fade-up">
            <NavLink
              to="/galerie"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[hsl(330,81%,60%)] to-[hsl(15,85%,75%)] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Voir toute la galerie</span>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(330,70%,45%)] to-[hsl(330,81%,60%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Prête pour votre transformation ?
            </h2>
            <p className="text-xl mb-8">
              Un look net de la tête aux pieds vous attend
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
              
              <NavLink
                to="/contact"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Nous contacter
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;