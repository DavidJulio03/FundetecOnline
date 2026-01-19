import React, { useState } from 'react';
import { Menu, X, CheckCircle, Clock, Award, Laptop, Users, Star, ArrowRight, MessageCircle } from 'lucide-react';
import Header from '../../shared/layout/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedPrograms from './components/FeaturedPrograms';
import BachilleratoBanner from './components/Bachiller';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Enrollment from './components/Enrollment';
import Footer from '../../shared/layout/Footer';




// 9. Floating WhatsApp Button
const WhatsAppFloat = () => (
    <a href="https://wa.me/123456789" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition flex items-center justify-center">
        <MessageCircle size={32} fill="white" />
    </a>
);

// --- APP PRINCIPAL ---
function Home() {
  return (
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen">
      <Header />
      <Hero />
      <Features />
      <BachilleratoBanner/>
      <FeaturedPrograms />
      <Testimonials />
      <HowItWorks />
      <Enrollment />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default Home;