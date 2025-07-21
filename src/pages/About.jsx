import React from 'react';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone, FaHeart, FaStar } from 'react-icons/fa';
import { GiDiamondRing, GiSparkles } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const About = () => {
  const whatsappNumber = "237695070705";
  const phoneNumber = "237671044349";
  const whatsappMessage = "Bonjour! J'aimerais en savoir plus sur l'Institut Dr. Aïcha Beauty.";


   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);



     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const values = [
    {
      icon: <FaHeart className="text-4xl text-red-400" />,
      title: "Passion",
      description: "Notre passion pour la beauté nous guide dans chaque geste et chaque soin que nous prodiguons."
    },
    {
      icon: <FaStar className="text-4xl text-yellow-400" />,
      title: "Excellence",
      description: "Nous nous engageons à offrir des services de qualité supérieure avec les meilleures techniques."
    },
    {
      icon: <GiSparkles className="text-4xl text-purple-400" />,
      title: "Innovation",
      description: "Nous restons à la pointe des dernières tendances et techniques beauté pour vous offrir le meilleur."
    },
    {
      icon: <MdSpa className="text-4xl text-green-400" />,
      title: "Bien-être",
      description: "Votre détente et votre bien-être sont au cœur de notre approche holistique de la beauté."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Aïcha",
      role: "Fondatrice & Directrice",
      specialty: "Experte en soins visage et techniques avancées",
      experience: "Plus de 10 ans d'expérience"
    },
    {
      name: "Équipe Onglerie",
      role: "Spécialistes Ongles",
      specialty: "Gainage gel, capsules, nail art",
      experience: "Techniques professionnelles"
    },
    {
      name: "Équipe Coiffure",
      role: "Stylistes Capillaires",
      specialty: "Perruques, tresses, brushing",
      experience: "Créativité et expertise"
    },
    {
      name: "Équipe Cils",
      role: "Techniciennes Cils",
      specialty: "Extensions cil à cil, microshading",
      experience: "Précision et délicatesse"
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/blog-banner.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(219,39,119,0.9)] via-[rgba(244,114,182,0.8)] to-[rgba(252,165,165,0.7)]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <GiDiamondRing className="text-4xl" />
              </div>
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl font-bold">
                  À Propos
                </h1>
                <p className="text-xl md:text-2xl">Institut Dr. Aïcha Beauty</p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Votre destination beauté de référence à Yaoundé, où l'excellence 
              rencontre l'accessibilité dans un cadre exceptionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(330,70%,45%)] mb-6">
              Notre Histoire
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-700">
                L'<span className="font-semibold text-[hsl(330,70%,45%)]">Hôpital de la Beauté</span> est 
                un espace dédié aux soins féminins, dirigé par <span className="font-semibold">Docteur Aïcha</span>, 
                situé à Yaoundé - Carrefour Belibi (descente avant marché Essos).
              </p>
              
              <p className="text-gray-700">
                Notre institut s'est donné pour mission de démocratiser l'accès aux soins beauté haut de gamme. 
                Nous croyons fermement que chaque femme mérite de se sentir belle et confiante, 
                sans compromettre son budget.
              </p>
              
              <p className="text-gray-700">
                Dans notre salon VIP, nous combinons expertise professionnelle, produits premium et 
                techniques innovantes pour vous offrir une expérience beauté exceptionnelle. 
                Notre approche personnalisée garantit des résultats qui subliment votre beauté naturelle.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-[hsl(350,70%,85%)] to-[hsl(45,30%,90%)] rounded-2xl">
              <p className="font-playfair text-2xl text-[hsl(330,70%,45%)] text-center italic">
                "Chez Docteur Aïcha Beauty, chaque femme mérite un moment de renaissance."
              </p>
            </div>
          </div>
          
          <div data-aos="fade-left" className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <FaMapMarkerAlt className="text-3xl text-[hsl(330,81%,60%)]" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-[hsl(330,70%,45%)]">
                    Notre Emplacement
                  </h3>
                  <p className="text-gray-600">Au cœur de Yaoundé</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-[hsl(330,70%,45%)]">Yaoundé, Carrefour Belibi</p>
                <p className="text-gray-600">Descente avant marché Essos</p>
                <p className="text-sm text-gray-500">Facilement accessible en transport</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] transition-all duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <FaPhone className="text-3xl text-green-500" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-[hsl(330,70%,45%)]">
                    Nous Contacter
                  </h3>
                  <p className="text-gray-600">Disponibles 7j/7</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">WhatsApp/Appel :</span>
                  <span className="font-semibold text-[hsl(330,70%,45%)]">695 07 07 05</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Ligne directe :</span>
                  <span className="font-semibold text-[hsl(330,70%,45%)]">671 04 43 49</span>
                </div>
                
                <div className="pt-4 space-y-3">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full text-center transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href={`tel:+${phoneNumber}`}
                    className="w-full bg-[hsl(330,81%,60%)] hover:bg-[hsl(330,70%,45%)] text-white py-3 px-4 rounded-full text-center transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <FaPhone />
                    <span>Appeler</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-[hsl(350,70%,85%)] to-[hsl(45,30%,90%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(330,70%,45%)] mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-[hsl(330,70%,45%)] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[hsl(330,70%,45%)] mb-4">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés dédiés à votre beauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[hsl(330,81%,60%)] to-[hsl(15,85%,75%)] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FaStar className="text-white text-2xl" />
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-[hsl(330,70%,45%)] mb-2 text-center">
                  {member.name}
                </h3>
                
                <p className="text-[hsl(330,81%,60%)] font-medium text-center mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm text-center mb-2">
                  {member.specialty}
                </p>
                
                <p className="text-gray-500 text-xs text-center">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-gradient-to-r from-[hsl(45,30%,90%)] to-[hsl(350,70%,85%)]">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="font-playfair text-4xl font-bold text-[hsl(330,70%,45%)] mb-8">
              Nos Engagements
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <GiSparkles className="text-4xl text-[hsl(330,81%,60%)]" />,
                  title: "Qualité Premium",
                  description: "Produits haut de gamme et techniques professionnelles"
                },
                {
                  icon: <FaHeart className="text-4xl text-red-400" />,
                  title: "Satisfaction Client",
                  description: "Votre bonheur est notre priorité absolue"
                },
                {
                  icon: <FaStar className="text-4xl text-yellow-400" />,
                  title: "Prix Accessibles",
                  description: "Beauté de luxe à portée de toutes"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-[0_20px_40px_rgba(219,39,119,0.3)] transition-all duration-300"
                >
                  <div className="mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-[hsl(330,70%,45%)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="bg-gradient-to-r from-[hsl(330,70%,45%)] to-[hsl(330,81%,60%)] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Rejoignez la famille Dr. Aïcha Beauty
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez pourquoi des centaines de femmes nous font confiance pour sublimer leur beauté
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour! J'aimerais visiter votre institut et découvrir vos services.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Réserver une visite</span>
              </a>
              
              <a
                href={`tel:+${phoneNumber}`}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;