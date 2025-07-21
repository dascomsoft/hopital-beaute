import React, { useState } from 'react';
import { FaWhatsapp, FaStar, FaHeart, FaUserCircle, FaQuoteLeft } from 'react-icons/fa';
import { GiSparkles } from 'react-icons/gi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Avis = () => {


     useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true, 
      });
    }, []);


       useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    
  const [newReview, setNewReview] = useState({
    name: '',
    service: '',
    rating: 5,
    comment: ''
  });

  const whatsappNumber = "237695070705";

  const testimonials = [
    {
      id: 1,
      name: "Marie Claire",
      service: "Pack Excellence 10.000 FCFA",
      rating: 5,
      comment: "Absolument parfait ! L'équipe de Dr. Aïcha Beauty a dépassé mes attentes. Mes extensions de cils sont magnifiques et naturelles.",
      date: "Il y a 2 semaines",
      verified: true
    },
    {
      id: 2,
      name: "Sylvie M.",
      service: "Soins visage + Onglerie",
      rating: 5,
      comment: "Un service exceptionnel ! Mon visage n'a jamais été aussi éclatant et mes ongles sont parfaits. Je recommande vivement !",
      date: "Il y a 1 mois",
      verified: true
    },
    {
      id: 3,
      name: "Diane",
      service: "Pack VIP 12.000 FCFA",
      rating: 5,
      comment: "Une transformation complète ! Du professionnalisme pur. L'ambiance VIP et la qualité des soins sont incomparables.",
      date: "Il y a 3 semaines",
      verified: true
    },
    {
      id: 4,
      name: "Christelle",
      service: "Coiffure + Tresses",
      rating: 5,
      comment: "Dr. Aïcha et son équipe sont des artistes ! Ma coiffure est sublime et tient parfaitement. Rapport qualité-prix imbattable.",
      date: "Il y a 1 semaine",
      verified: true
    },
    {
      id: 5,
      name: "Fabienne K.",
      service: "Microshading sourcils",
      rating: 5,
      comment: "Résultat naturel et parfait ! La technique est maîtrisée à la perfection. Mes sourcils sont maintenant parfaitement dessinés.",
      date: "Il y a 4 jours",
      verified: true
    },
    {
      id: 6,
      name: "Nadège",
      service: "Pack Découverte 5.000 FCFA",
      rating: 5,
      comment: "Excellent rapport qualité-prix ! Pour mon premier essai, j'ai été agréablement surprise. Je reviendrai c'est sûr !",
      date: "Il y a 5 jours",
      verified: true
    }
  ];

  const services = [
    "Soins Visage",
    "Onglerie Premium",
    "Extensions Cils",
    "Coiffure VIP",
    "Microshading",
    "Packs Beauté",
    "Massage & Détente"
  ];

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const message = `Nouvel avis client pour Dr. Aïcha Beauty:

👤 Nom: ${newReview.name}
🎯 Service: ${newReview.service}
⭐ Note: ${newReview.rating}/5 étoiles
💬 Commentaire: ${newReview.comment}

Merci pour ce retour !`;

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const averageRating = testimonials.reduce((sum, review) => sum + review.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen pt-20 bg-white text-gray-900 font-poppins">
      {/* Hero Section */}
      <section className="relative py-20 mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/pedicure.jpg)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 via-pink-400/80 to-red-300/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div data-aos="fade-up">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Avis Clients
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
              Découvrez ce que pensent nos clientes de leur expérience 
              à l'Hôpital de la Beauté.
            </p>
            
            {/* Rating Summary */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <div className="flex space-x-1">
                {renderStars(5)}
              </div>
              <span className="font-semibold">{averageRating.toFixed(1)}/5</span>
              <span className="text-sm opacity-90">({testimonials.length} avis)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: "100%", label: "Satisfaction client", icon: <FaHeart className="text-2xl text-red-400" /> },
            { number: "5⭐", label: "Note moyenne", icon: <FaStar className="text-2xl text-yellow-400" /> },
            { number: "200+", label: "Clientes satisfaites", icon: <FaUserCircle className="text-2xl text-pink-500" /> },
            { number: "3 ans", label: "D'excellence", icon: <GiSparkles className="text-2xl text-purple-400" /> }
          ].map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="font-playfair text-3xl font-bold text-pink-800 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600">
            L'avis authentique de nos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 right-4 text-pink-100 text-2xl opacity-50" />
              
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-amber-300 rounded-full w-12 h-12 flex items-center justify-center">
                  <FaUserCircle className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-pink-800">
                    {testimonial.name}
                    {testimonial.verified && (
                      <span className="ml-2 text-green-500 text-sm">✓ Vérifié</span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.service}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-600">{testimonial.date}</span>
              </div>
              
              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>
              
              {/* Action */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Bonjour! J'ai lu l'avis de ${testimonial.name} sur ${testimonial.service} et j'aimerais le même service.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-800 font-medium text-sm transition-colors duration-300"
                >
                  Réserver le même service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="font-playfair text-4xl font-bold text-pink-800 mb-4">
                Partagez votre expérience
              </h2>
              <p className="text-xl text-gray-700">
                Votre avis compte et aide d'autres femmes à faire leur choix
              </p>
            </div>

            <div data-aos="zoom-in" className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleReviewSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-pink-800 font-medium mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      value={newReview.name}
                      onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                      required
                      className="w-full p-4 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300"
                      placeholder="Votre prénom"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-pink-800 font-medium mb-2">
                      Service testé
                    </label>
                    <select
                      value={newReview.service}
                      onChange={(e) => setNewReview({...newReview, service: e.target.value})}
                      required
                      className="w-full p-4 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300"
                    >
                      <option value="">Sélectionnez un service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-pink-800 font-medium mb-2">
                    Votre note
                  </label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className="text-3xl transition-colors duration-200"
                      >
                        <FaStar 
                          className={star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}
                        />
                      </button>
                    ))}
                    <span className="ml-4 text-pink-800 font-medium self-center">
                      {newReview.rating}/5 étoiles
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-pink-800 font-medium mb-2">
                    Votre commentaire
                  </label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    required
                    rows={4}
                    className="w-full p-4 border-2 border-pink-100 rounded-xl focus:border-pink-500 outline-none transition-colors duration-300 resize-none"
                    placeholder="Partagez votre expérience avec Dr. Aïcha Beauty..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-amber-300 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp />
                  <span>Envoyer mon avis via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtags Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="zoom-in">
            <h2 className="font-playfair text-3xl font-bold text-pink-800 mb-8">
              Ce que disent nos clientes
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                '#SatisfactionClient', '#QualitéPremium', '#DocteurAichaBeauty',
                '#TransformationBeauty', '#AvisPositifs', '#RecommandéParTous',
                '#ExcellenceYaoundé', '#BeautyExperts', '#HôpitalDeLaBeauté'
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-pink-100/50 px-4 py-2 rounded-full text-pink-800 font-medium hover:bg-pink-100 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <blockquote className="font-playfair text-2xl md:text-3xl text-pink-800 italic mb-6">
              "Chez Dr. Aïcha Beauty, chaque cliente repartit avec le sourire !"
            </blockquote>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-800 to-pink-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Rejoignez nos clientes satisfaites
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez pourquoi nos clientes nous recommandent et vivez vous aussi 
              une expérience beauté exceptionnelle
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Bonjour! J'ai lu vos excellents avis et j'aimerais réserver un rendez-vous.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-3"
              >
                <FaWhatsapp className="text-xl" />
                <span>Réserver mon rendez-vous</span>
              </a>
              
              <button
                onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Laisser un avis
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Avis;