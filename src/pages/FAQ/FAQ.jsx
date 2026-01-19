import React, { useState } from 'react';
import { HelpCircle, ChevronRight, MessageCircle, BookOpen, MapPin } from 'lucide-react';
import faqConfig from './FAQData';
import Header from '../../shared/layout/Header';
import Footer from '../../shared/layout/Footer';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [openId, setOpenId] = useState(1);

  const filteredQuestions = faqConfig.questions.filter(q => q.cat === activeTab);

  return (
    // Contenedor principal que asegura que el footer esté al fondo si hay poco contenido
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. HEADER: Siempre arriba */}
      <Header />

      {/* 2. MAIN CONTENT: Crece para ocupar el espacio disponible */}
      <main className="flex-grow pt-36 md:pt-42 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado de la Sección */}
          <div className="text-center mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4aa82c] block mb-4">
              {faqConfig.header.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-[950] tracking-tighter text-gray-900 uppercase leading-none">
              {faqConfig.header.title} <br/>
              <span className="text-[#0993e2]">{faqConfig.header.highlight}</span>
            </h2>
            <p className="mt-6 text-gray-400 font-medium max-w-xl mx-auto text-lg">
              {faqConfig.header.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar de Categorías */}
            <aside className="lg:col-span-4 space-y-2">
              {faqConfig.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center justify-between p-6 rounded-[24px] transition-all duration-300 ${
                    activeTab === cat.id 
                    ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' 
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activeTab === cat.id ? 'text-[#4aa82c]' : 'text-gray-400'}`}>
                      {cat.icon}
                    </div>
                    <span className="font-black uppercase tracking-widest text-[11px]">{cat.name}</span>
                  </div>
                  <ChevronRight size={16} className={`${activeTab === cat.id ? 'opacity-100' : 'opacity-0'}`} />
                </button>
              ))}
            </aside>

            {/* Acordeón de Preguntas */}
            <div className="lg:col-span-8 space-y-4">
              {filteredQuestions.map((item) => (
                <div 
                  key={item.id}
                  className={`group border-b border-gray-100 transition-all duration-500 ${openId === item.id ? 'pb-8' : 'pb-4'}`}
                >
                  <button 
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${openId === item.id ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                      {item.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openId === item.id ? 'bg-[#4aa82c] border-[#4aa82c] text-white rotate-90' : 'border-gray-200 text-gray-400'}`}>
                      <ChevronRight size={16} />
                    </div>
                  </button>
                  
                  {openId === item.id && (
                    <div className="mt-4 animate-in slide-in-from-top-4 duration-500">
                      <p className="text-gray-500 text-lg leading-relaxed font-medium max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>

      {/* 3. FOOTER: Siempre al final */}
      <Footer />
    </div>
  );
};

export default FAQ;