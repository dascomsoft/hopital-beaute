import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { GiLipstick, GiEyelashes, GiDiamondRing } from 'react-icons/gi';
import { MdSpa } from 'react-icons/md';
import { BiBody } from 'react-icons/bi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { useEffect } from 'react';

const GalerieCategories = () => {

       useEffect(() => {
          window.scrollTo(0, 0);
        }, []);


    const whatsappNumber = "237695070705";
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        {
            id: 'onglerie',
            name: 'Onglerie',
            icon: <GiDiamondRing className="text-3xl" />,
            description: 'Nos créations d\'ongles',
            images: [
                '/ong2.jpeg',
                '/ong4.jpeg',
                '/ong5.jpeg',
                'ong7.jpeg'
            ]
        },
        {
            id: 'soins-visage',
            name: 'Soins Visage',
            icon: <MdSpa className="text-3xl" />,
            description: 'Soins et traitements du visage',
            images: [
                '/soins.jpeg',
                '/soins8.jpeg',
                '/soins14.jpeg',
                'soins15.jpeg'
            ]
        },
        {
            id: 'pedicure',
            name: 'Pédicure',
            icon: <BiBody className="text-3xl" />,
            description: 'Soins des pieds professionnels',
            images: [
                '/pedi.jpeg',
                '/pedi10.jpeg',
                '/pedi20.jpeg',
                '/pedicure1.jpg.jpg'
            ]
        },
        {
            id: 'extension-cils',
            name: 'Extension Cils',
            icon: <GiEyelashes className="text-3xl" />,
            description: 'Extensions de cils naturelles et volumineuses',
            images: [
                '/cil.jpg',
                '/cil5.jpg',
                'cils4.jpg',
                'extension.jpeg'
            ]
        },
        {
            id: 'coiffures',
            name: 'Coiffures',
            icon: <GiLipstick className="text-3xl" />,
            description: 'Coiffures et brushings',
            images: [
                '/perruque.webp',
                'lock2.jpg',
                '/lock1.jpeg',
                '/locks.webp'
            ]
        },
        {
            id: 'tresses',
            name: 'Tresses',
            icon: <IoColorPaletteOutline className="text-3xl" />,
            description: 'Tresses africaines et coiffures protectrices',
            images: [
                '/coiffe2.jpeg',
                '/coiffure.jpg',
                'coiffe.jpeg',
                'coiffe1.jpeg'
            ]
        },
        {
            id: 'nail-art',
            name: 'Nail Art',
            icon: <GiDiamondRing className="text-3xl" />,
            description: 'Créations artistiques sur ongles',
            images: [
                'art20.jpeg',
                'art.jpeg',
                'art1.jpeg',
                'art12.jpeg'
            ]
        }
    ];

    const handleWhatsApp = () => {
        const message = "Bonjour ! Je souhaite prendre rendez-vous à l'Institut Dr. Aïcha Beauty";
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    if (selectedCategory) {
        const category = categories.find(cat => cat.id === selectedCategory);
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-200 to-amber-50">
                <div className="container mx-auto px-4 py-10">
                    <div className="flex items-center mb-8 mt-40">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="mr-4 px-4 py-2 bg-orange-300 text-white rounded-lg hover:bg-pink-500 transition-colors"
                        >
                            ← Retour
                        </button>
                        <h1 className="text-4xl font-playfair text-pink-700">{category?.name}</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                        {category?.images.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <img
                                    src={image}
                                    alt={`${category.name} ${index + 1}`}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={handleWhatsApp}
                            className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <FaWhatsapp className="text-2xl" />
                            <span>Réserver maintenant</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-pink-200 to-amber-50">
            {/* Hero Section */}
            <div className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/review-bg.jpg')] bg-cover bg-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300/80 to-sky-300/80 backdrop-blur-sm" />
                </div>

                <div className="relative container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold md:text-6xl font-playfair text-white mb-6" data-aos="fade-up">
                        Galerie par Catégories
                    </h1>
                    <p className="text-xl font-bold text-white/90 max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                        Découvrez nos créations organisées par spécialités
                    </p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className="group cursor-pointer bg-white/20 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-300 to-pink-500 rounded-full text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {category.icon}
                                </div>

                                <h3 className="text-2xl font-playfair text-pink-700 mb-4 group-hover:text-orange-300 transition-colors">
                                    {category.name}
                                </h3>

                                <p className="text-pink-700/80 mb-6">
                                    {category.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {category.images.slice(0, 4).map((image, imgIndex) => (
                                        <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`${category.name} preview ${imgIndex + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <button className="text-orange-300 font-semibold group-hover:text-pink-500 transition-colors">
                                    Voir tout →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-orange-300 to-pink-500 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-playfair text-white mb-6" data-aos="fade-up">
                        Prête à transformer votre look ?
                    </h2>
                    <button
                        onClick={handleWhatsApp}
                        className="inline-flex items-center space-x-3 bg-white text-orange-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all duration-300 transform hover:scale-105"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <FaWhatsapp className="text-2xl text-green-500" />
                        <span>Contactez-nous sur WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GalerieCategories;