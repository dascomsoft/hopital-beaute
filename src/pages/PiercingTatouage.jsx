import React from 'react';
import { FaWhatsapp, FaStar, FaShieldAlt, FaHeart } from 'react-icons/fa';
import { GiDiamonds, GiButterfly, GiRose, GiSparkles } from 'react-icons/gi';
import { MdVerified, MdSecurity } from 'react-icons/md';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 




const PiercingTatouage = () => {


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

  const piercingTypes = [
    { name: "Piercing Oreilles", price: "À partir de 3.000 FCFA", description: "Hélix, tragus, conch, lobe" },
    { name: "Piercing Nez", price: "À partir de 5.000 FCFA", description: "Narine, septum élégant" },
    { name: "Piercing Nombril", price: "À partir de 8.000 FCFA", description: "Bijoux cristal et or" },
    { name: "Piercing Sourcil", price: "À partir de 6.000 FCFA", description: "Style moderne et raffiné" }
  ];

  const tatouageStyles = [
    { name: "Tatouage Minimaliste", price: "À partir de 15.000 FCFA", description: "Dessins délicats et fins" },
    { name: "Tatouage Floral", price: "À partir de 20.000 FCFA", description: "Roses, pivoines, ornements" },
    { name: "Tatouage Géométrique", price: "À partir de 18.000 FCFA", description: "Formes abstraites élégantes" },
    { name: "Tatouage Papillon", price: "À partir de 12.000 FCFA", description: "Symbole de transformation" }
  ];

  const handleWhatsApp = () => {
    const message = "Bonjour ! Je souhaite des informations sur vos services de piercing/tatouage";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-900 via-pink-500 to-orange-300">
      {/* Hero Section */}
      <div className="relative z-0 py-24">
        <div className="absolute inset-0 bg-[url('/review-bg.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-pink-200/70 backdrop" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center space-x-4 mb-6" data-aos="fade-up">
            <GiDiamonds className="text-4xl text-orange-300 animate-pulse" />
            <GiButterfly className="text-5xl text-white" />
            <GiDiamonds className="text-4xl text-orange-300 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair text-white mb-6" data-aos="fade-up" data-aos-delay="200">
            Piercing & Tatouage
          </h1>

          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8" data-aos="fade-up" data-aos-delay="400">
            Exprimez votre personnalité avec élégance et style
          </p>

          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full" data-aos="fade-up" data-aos-delay="600">
            <MdVerified className="text-orange-300 text-2xl" />
            <span className="text-white font-semibold">Matériel stérilisé • Artistique • Sécurisé</span>
            <MdVerified className="text-orange-300 text-2xl" />
          </div>
        </div>
      </div>

      {/* Piercing Section */}
      <div className="py-20 bg-gradient-to-r from-white/10 to-amber-50/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GiSparkles className="text-6xl text-orange-300 mx-auto mb-6" data-aos="zoom-in" />
            <h2 className="text-4xl font-playfair text-white mb-4" data-aos="fade-up">
              Piercing Élégant
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Des bijoux de qualité premium pour sublimer votre beauté naturelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {piercingTypes.map((piercing, index) => (
              <div
                key={index}
                className="group bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/25 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-300 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <GiDiamonds className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-playfair text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {piercing.name}
                </h3>

                <p className="text-orange-300 font-bold text-lg mb-3">
                  {piercing.price}
                </p>

                <p className="text-white/70 text-sm">
                  {piercing.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tatouage Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <GiRose className="text-6xl text-orange-300 mx-auto mb-6" data-aos="zoom-in" />
            <h2 className="text-4xl font-playfair text-white mb-4" data-aos="fade-up">
              Tatouage Artistique
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              Des créations uniques qui racontent votre histoire avec finesse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tatouageStyles.map((tatouage, index) => (
              <div
                key={index}
                className="group bg-white/15 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/25 transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <GiButterfly className="text-2xl text-white" />
                </div>

                <h3 className="text-xl font-playfair text-white mb-3 group-hover:text-orange-300 transition-colors">
                  {tatouage.name}
                </h3>

                <p className="text-orange-300 font-bold text-lg mb-3">
                  {tatouage.price}
                </p>

                <p className="text-white/70 text-sm">
                  {tatouage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sécurité et Qualité */}
      <div className="py-20 bg-gradient-to-r from-amber-50/20 to-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair text-white mb-8" data-aos="fade-up">
              Sécurité & Qualité Premium
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MdSecurity className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-playfair text-white mb-4">Stérilisation Complète</h3>
              <p className="text-white/80">Matériel stérilisé selon les normes internationales</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-playfair text-white mb-4">Bijoux Premium</h3>
              <p className="text-white/80">Or chirurgical et cristaux de qualité supérieure</p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaHeart className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-playfair text-white mb-4">Suivi Personnalisé</h3>
              <p className="text-white/80">Conseils de cicatrisation et suivi post-soin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Galerie Inspiration */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair text-white mb-8" data-aos="fade-up">
              Galerie d'Inspiration
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'tatoo2.jpg',
              'percingsou.jpg',
              'tattoo1.jpeg',
              'percing.jpg',
               'tatto3.jpg',
              'percingnez.jpg',
              'percing3.jpg',
              'tati.jpg',




            ].map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <img
                  src={image}
                  alt={`Inspiration ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-orange-300 to-pink-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-playfair text-white mb-6" data-aos="fade-up">
            Prête pour votre transformation ?
          </h2>

          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Contactez-nous pour une consultation personnalisée et découvrez nos créations sur mesure
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center space-x-3 bg-white text-orange-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FaWhatsapp className="text-2xl text-green-500" />
              <span>Consultation WhatsApp</span>
            </button>

            <div className="inline-flex items-center space-x-2 text-white" data-aos="fade-up" data-aos-delay="600">
              <FaStar className="text-orange-300" />
              <span className="font-semibold">Rendez-vous: 695 07 07 05</span>
              <FaStar className="text-orange-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PiercingTatouage;