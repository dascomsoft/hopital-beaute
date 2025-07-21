import React from 'react';
import { FaWhatsapp, FaLeaf, FaHeart, FaStar } from 'react-icons/fa';
import { GiWaterDrop, GiSparkles, GiBanana } from 'react-icons/gi';
import { MdSpa, MdLightbulb } from 'react-icons/md';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Astuces = () => {
  const whatsappNumber = "237695070705";
  const whatsappMessage = "Bonjour! J'aimerais avoir plus de conseils beauté personnalisés.";



     useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);






    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);



  const tips = [
    {
      icon: <GiWaterDrop className="text-4xl text-blue-500" />,
      title: "Gommage Corporel",
      tip: "Fais un gommage corporel 1 à 2 fois/semaine pour révéler une peau douce et éclatante.",
      description: "Le gommage élimine les cellules mortes et stimule la circulation sanguine. Utilisez des mouvements circulaires doux en remontant vers le cœur.",
      frequency: "1-2 fois par semaine",
      gradient: "bg-gradient-to-br from-blue-100 to-cyan-100"
    },
    {
      icon: <FaLeaf className="text-4xl text-green-500" />,
      title: "Hydratation des Cuticules",
      tip: "Hydrate tes cuticules le soir avec de l'huile de coco ou d'amande douce.",
      description: "Les cuticules bien hydratées donnent un aspect soigné à vos ongles. Massez délicatement avec l'huile pour nourrir en profondeur.",
      frequency: "Tous les soirs",
      gradient: "bg-gradient-to-br from-green-100 to-emerald-100"
    },
    {
      icon: <MdSpa className="text-4xl text-purple-500" />,
      title: "Nettoyage Visage",
      tip: "Nettoie ton visage matin et soir avec un produit adapté à ton type de peau.",
      description: "Un nettoyage quotidien préserve l'éclat de votre peau et prévient les imperfections. Terminez toujours par une crème hydratante.",
      frequency: "Matin et soir",
      gradient: "bg-gradient-to-br from-purple-100 to-pink-100"
    },
    {
      icon: <GiSparkles className="text-4xl text-yellow-500" />,
      title: "Masque Hydratant",
      tip: "Applique un masque hydratant 2 fois par semaine pour maintenir l'élasticité de ta peau.",
      description: "Les masques apportent une hydratation intense et donnent un coup d'éclat immédiat. Choisissez selon vos besoins spécifiques.",
      frequency: "2 fois par semaine",
      gradient: "bg-gradient-to-br from-yellow-100 to-orange-100"
    },
    {
      icon: <FaHeart className="text-4xl text-red-500" />,
      title: "Auto-massage",
      tip: "Pratique l'auto-massage du visage pour tonifier la peau et réduire les tensions.",
      description: "5 minutes d'auto-massage quotidien améliorent la circulation et donnent de l'éclat. Utilisez vos doigts en mouvements circulaires.",
      frequency: "Quotidiennement",
      gradient: "bg-gradient-to-br from-red-100 to-pink-100"
    },
    {
      icon: <GiBanana className="text-4xl text-orange-500" />,
      title: "Alimentation Beauté",
      tip: "Privilégie les fruits et légumes riches en vitamines pour une peau éclatante de l'intérieur.",
      description: "Une belle peau commence dans l'assiette. Les antioxydants protègent et réparent votre peau naturellement.",
      frequency: "Quotidiennement",
      gradient: "bg-gradient-to-br from-orange-100 to-yellow-100"
    }
  ];

  const diyRecipes = [
    {
      title: "Masque Miel & Avoine",
      ingredients: ["2 cuillères de miel", "1 cuillère d'avoine", "Quelques gouttes d'eau"],
      benefits: "Nourrit et exfolie en douceur",
      time: "15 minutes"
    },
    {
      title: "Gommage Sucre & Huile de Coco",
      ingredients: ["3 cuillères de sucre", "2 cuillères d'huile de coco", "Quelques gouttes d'huile essentielle"],
      benefits: "Hydrate et illumine la peau",
      time: "10 minutes"
    },
    {
      title: "Masque Yaourt & Concombre",
      ingredients: ["2 cuillères de yaourt", "1/2 concombre mixé", "1 cuillère de miel"],
      benefits: "Apaise et rafraîchit la peau",
      time: "20 minutes"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-400/80 to-red-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Astuces Beauté
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez nos conseils d'experts pour sublimer votre beauté au quotidien 
              et maintenir vos soins plus longtemps.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <MdLightbulb className="text-amber-300 text-xl" />
              <span className="font-playfair text-lg">Conseils de professionnels</span>
              <MdLightbulb className="text-amber-300 text-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Tips Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-playfair text-4xl font-bold text-pink-800 mb-4">
            Nos Conseils Essentiels
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des gestes simples pour une routine beauté efficace
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${tip.gradient} rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {tip.icon}
              </div>
              
              <h3 className="font-playfair text-xl font-semibold text-pink-800 mb-3">
                {tip.title}
              </h3>
              
              <div className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                {tip.frequency}
              </div>
              
              <p className="text-pink-800 font-medium mb-3 leading-relaxed">
                "{tip.tip}"
              </p>
              
              <p className="text-gray-700 text-sm leading-relaxed">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DIY Recipes Section */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl font-bold text-pink-800 mb-4">
              Recettes Maison
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Créez vos propres soins avec des ingrédients naturels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diyRecipes.map((recipe, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-playfair text-xl font-semibold text-pink-800 mb-4">
                  {recipe.title}
                </h3>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Ingrédients :</h4>
                  <ul className="space-y-1">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-amber-300 text-sm" />
                    <span className="text-sm font-medium text-gray-700">Bienfaits :</span>
                  </div>
                  <p className="text-sm text-gray-600">{recipe.benefits}</p>
                  
                  <div className="flex items-center space-x-2 mt-3">
                    <MdSpa className="text-pink-500 text-sm" />
                    <span className="text-sm font-medium text-gray-700">Temps de pose :</span>
                    <span className="text-sm text-pink-800 font-medium">{recipe.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Quote Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in" className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-pink-500 to-amber-300 rounded-3xl p-8 md:p-12 text-white">
              <GiSparkles className="text-5xl mx-auto mb-6" />
              
              <blockquote className="font-playfair text-2xl md:text-3xl mb-6 italic">
                "La beauté naturelle se cultive au quotidien avec des gestes simples et réguliers"
              </blockquote>
              
              <p className="text-lg opacity-90 mb-8">
                - Dr. Aïcha, Experte Beauté à l'Hôpital de la Beauté
              </p>
              
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-pink-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaWhatsapp className="text-green-500" />
                <span>Demander plus de conseils</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Schedule */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl font-bold text-pink-800 mb-4">
              Routine Beauté Hebdomadaire
            </h2>
            <p className="text-xl text-gray-700">
              Organisez vos soins pour des résultats optimaux
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-7 gap-4">
              {[
                { day: "Lun", routine: "Nettoyage + Hydratation" },
                { day: "Mar", routine: "Gommage visage" },
                { day: "Mer", routine: "Masque hydratant" },
                { day: "Jeu", routine: "Soins des ongles" },
                { day: "Ven", routine: "Gommage corporel" },
                { day: "Sam", routine: "Masque complet" },
                { day: "Dim", routine: "Relaxation & massage" }
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 font-bold">
                    {item.day}
                  </div>
                  <p className="text-sm text-gray-700 font-medium">
                    {item.routine}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="bg-gradient-to-r from-pink-800 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
              Recevez nos conseils beauté
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour recevoir des conseils personnalisés selon votre type de peau et vos besoins
            </p>
            
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour! J'aimerais recevoir des conseils beauté personnalisés.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaWhatsapp className="text-xl" />
              <span>Conseils personnalisés sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Astuces;