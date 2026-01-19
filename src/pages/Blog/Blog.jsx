import React, { useState } from 'react';
import Header from '../../shared/layout/Header';
import Footer from '../../shared/layout/Footer';
import { Search, ArrowUpRight, Clock, User } from 'lucide-react';
import blogConfig from './BlogData';

const Blog = () => {
  const [filter, setFilter] = useState("Todos");
  const featuredPost = blogConfig.posts.find(p => p.featured);
  const regularPosts = blogConfig.posts.filter(p => !p.featured && (filter === "Todos" || p.category === filter));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-28 md:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* SECCIÓN DE TÍTULO Y FILTROS */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4aa82c] block mb-4">Actualidad Fundetec</span>
              <h1 className="text-6xl md:text-8xl font-[950] tracking-tighter text-gray-900 leading-[0.85] uppercase">
                BLOG <br /> <span className="text-[#0993e2]">NOTICIAS.</span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {blogConfig.categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    filter === cat ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ARTÍCULO DESTACADO (FEATURED) */}
          {filter === "Todos" && (
            <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20 rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100 transition-all hover:shadow-2xl">
              <div className="lg:col-span-7 h-[400px] lg:h-[600px] overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={featuredPost.title} 
                />
              </div>
              <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 bg-[#4aa82c]/10 text-[#4aa82c] text-[10px] font-black uppercase rounded-lg">Destacado</span>
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 leading-none mb-6">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                        <User className="w-full h-full p-2 text-gray-400" />
                    </div>
                    <span className="text-xs font-black uppercase text-gray-900">{featuredPost.author}</span>
                  </div>
                  <button className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-[#0993e2] group/btn">
                    Leer más <ArrowUpRight className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" size={16} />
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* GRID DE ARTÍCULOS REGULARES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative h-72 rounded-[32px] overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={post.title} 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-black uppercase rounded-full shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-[9px] font-black uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1"><Clock size={12}/> {post.readTime}</div>
                  <div className="w-1 h-1 rounded-full bg-gray-200"></div>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-black tracking-tighter text-gray-900 leading-tight mb-4 group-hover:text-[#0993e2] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 font-medium">
                  {post.excerpt}
                </p>
              </article>
            ))}
          </div>

          {/* BOTÓN CARGAR MÁS */}
          <div className="mt-24 text-center">
            <button className="px-12 py-5 border-2 border-gray-900 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:bg-gray-900 hover:text-white transition-all active:scale-95">
              Cargar más historias
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;