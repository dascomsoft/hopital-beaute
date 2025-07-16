
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import React from "react";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import Packs from "./pages/Packs";
import Astuces from "./pages/Astuces";
import About from "./pages/About";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import Avis from "./pages/Avis";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
   
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/services" element={<Services />} />
                <Route path="/packs" element={<Packs />} />
                <Route path="/astuces" element={<Astuces />} />
                <Route path="/about" element={<About />} />
                <Route path="/galerie" element={<Galerie />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/avis" element={<Avis />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
    
  );
};

export default App;
