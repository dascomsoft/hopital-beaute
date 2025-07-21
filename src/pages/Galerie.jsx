import React, { useState } from 'react';
import { FaWhatsapp, FaExpand, FaTimes } from 'react-icons/fa';
import { GiLipstick, GiEyelashes, GiDiamondRing } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Galerie = () => {



     useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);


   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


  const [selectedImage, setSelectedImage] = useState(null);
  const whatsappNumber = "237695070705";
  const whatsappMessage = "Bonjour! J'ai vu vos réalisations en galerie et j'aimerais prendre rendez-vous.";

  const galleryItems = [
    {
      id: 1,
      category: "Soins Visage",
      title: "Soin éclat avec extraction",
      description: "Résultat avant/après d'un soin visage complet",
      icon: "/index.jpg",
      gradient: "from-blue-400 to-purple-400"
    },
    {
      id: 2,
      category: "Onglerie",
      title: "Gainage gel avec french",
      description: "Ongles parfaitement stylés et durables",
      icon: "/ongle.jpeg",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      id: 3,
      category: "Extensions Cils",
      title: "Extension cil à cil volume",
      description: "Regard intensifié et naturel",
      icon: "/extension.jpeg",
      gradient: "from-purple-400 to-indigo-400"
    },
    {
      id: 4,
      category: "Coiffure",
      title: "Pose perruque lace frontale",
      description: "Transformation capillaire spectaculaire",
      icon: "/perruque.webp",
      gradient: "from-emerald-400 to-teal-400"
    },
    {
      id: 5,
      category: "Nail Art",
      title: "Capsules avec décoration",
      description: "Créations artistiques personnalisées",
      icon: "decoration.webp",
      gradient: "from-orange-400 to-red-400"
    },
    {
      id: 6,
      category: "Microshading",
      title: "Restructuration sourcils",
      description: "Sourcils parfaitement dessinés",
      icon: "/sourcil1.jpg",
      gradient: "from-amber-400 to-orange-400"
    },
    {
      id: 7,
      category: "Tresses",
      title: "Butterfly's locks avec mèches",
      description: "Coiffure moderne et élégante",
      icon: "/lock1.jpeg",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      id: 8,
      category: "Pédicure",
      title: "Pédicure chaude premium",
      description: "Pieds parfaitement soignés",
      icon: "pedicure1.jpg.jpg",
      gradient: "from-green-400 to-emerald-400"
    },
    {
      id: 9,
      category: "Avant/Après",
      title: "Transformation complète",
      description: "Résultat pack beauté complet",
      icon: "transfo.jpg",
      gradient: "from-pink-400 to-purple-400"
    }
  ];

  const categories = ["Tous", "Soins Visage", "Onglerie", "Extensions Cils", "Coiffure", "Nail Art", "Microshading", "Tresses", "Pédicure"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredItems = activeCategory === "Tous" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-400/80 to-pink-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Notre Galerie
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Découvrez nos plus belles réalisations et laissez-vous inspirer 
              par le savoir-faire de notre équipe d'experts.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-4 mb-12">
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white text-pink-700 border-2 border-pink-500 hover:bg-pink-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              {/* Image Placeholder with Gradient */}
              <div className={`aspect-square bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}>
                <img src={item.icon} alt={item.title}  className='w-[100%] h-[100%] object-cover'/>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Expand Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <FaExpand className="text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-pink-500/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs mb-2 inline-block">
                  {item.category}
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-gradient-to-r from-pink-200 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pink-700 mb-4">
              Transformations Spectaculaires
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Nos clientes témoignent de leur transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Soin Visage Éclat",
                before: "Peau terne et fatiguée",
                after: "Teint lumineux et éclatant",
                treatment: "Extraction + masque hydratant"
              },
              {
                title: "Extension Cils Volume",
                before: "Cils courts et clairsemés",
                after: "Regard intense et captivant",
                treatment: "Extension cil à cil 120 cils"
              },
              {
                title: "Pose Perruque Lace",
                before: "Cheveux abîmés",
                after: "Coiffure glamour parfaite",
                treatment: "Lace frontale + brushing"
              }
            ].map((transformation, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-playfair text-xl font-semibold text-pink-700 mb-4">
                  {transformation.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-medium">Avant :</span>
                    <span className="text-gray-600 text-sm">{transformation.before}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-green-500 font-medium">Après :</span>
                    <span className="text-gray-600 text-sm">{transformation.after}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="bg-pink-200/50 rounded-lg p-3">
                      <span className="text-pink-700 font-medium text-sm">
                        Traitement : {transformation.treatment}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial with Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in" className="max-w-4xl mx-auto">
            <blockquote className="font-playfair text-2xl md:text-3xl text-pink-700 mb-8 italic">
              "Les photos ne rendent pas justice au travail exceptionnel de Dr. Aïcha Beauty. 
              Chaque détail est parfait !"
            </blockquote>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                '#TransformationBeauty', '#AvantAprès', '#DocteurAichaBeauty',
                '#YaoundéBeauty', '#ResultatsProuvés', '#SatisfactionClient'
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-200/50 px-4 py-2 rounded-full text-pink-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-gray-600 mb-8">
              - Satisfaction client moyenne : ⭐⭐⭐⭐⭐ (5/5 étoiles)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-700 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Prête pour votre propre transformation ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Rejoignez nos clientes satisfaites et découvrez votre potentiel beauté
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Réserver ma transformation</span>
              </a>
              
              <a
                href="tel:+237671044349"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-all duration-300"
            >
              <FaTimes className="text-xl" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden">
              {(() => {
                const item = galleryItems.find(item => item.id === selectedImage);
                return item ? (
                  <div>
                    <div className={`aspect-video bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                      <div className="text-white text-8xl opacity-50">
                        {/* {item.icon} */} <img src={item.icon} alt={item.title} />

                      </div>
                    </div>
                    <div className="p-6">
                      <div className="bg-pink-500 text-white rounded-full px-3 py-1 text-sm mb-3 inline-block">
                        {item.category}
                      </div>
                      <h3 className="font-playfair text-2xl font-bold text-pink-700 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {item.description}
                      </p>
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour! J'ai vu "${item.title}" dans votre galerie et j'aimerais le même service.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <FaWhatsapp />
                        <span>Réserver ce service</span>
                      </a>
                    </div>
                  </div>
                ) : null;
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galerie;