import React, { useState, useEffect } from 'react';
import Header from '../../shared/layout/Header';
import Footer from '../../shared/layout/Footer';
import { Search, ArrowUpRight, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import blogConfig from './BlogData';

// --- SUBCOMPONENTE: VISTA DETALLADA DEL ARTÍCULO ---
const BlogPost = ({ post, onBack }) => {
  // Scroll al top al montar el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Barra de navegación del artículo */}
      <div className="mb-8 py-4">
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-[#0993e2] transition-colors"
        >
          <div className="p-2 rounded-full bg-gray-100 group-hover:bg-[#0993e2]/10 transition-colors">
            <ArrowLeft size={16} />
          </div>
          Volver al blog
        </button>
      </div>

      {/* Header del Artículo */}
      <header className="mb-12 max-w-4xl">
        <div className="flex flex-wrap gap-4 mb-6">
          <span className="px-4 py-2 bg-[#0993e2]/10 text-[#0993e2] text-[10px] font-black uppercase rounded-full">
            {post.category}
          </span>
          <span className="flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-widest">
            <Clock size={12} /> {post.readTime} de lectura
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-[950] tracking-tighter text-gray-900 leading-[0.9] mb-8 uppercase">
          {post.title}
        </h1>

        <div className="flex items-center justify-between border-y border-gray-100 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
               {/* Si tuvieras fotos de autores, irían aquí. Usamos icono por defecto */}
               <User className="w-full h-full p-2 text-gray-400" />
            </div>
            <div>
              <p className="text-xs font-black uppercase text-gray-900">{post.author}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{post.authorRole || "Colaborador"}</p>
            </div>
          </div>
          <div className="flex gap-2">
             <button className="p-2 text-gray-400 hover:text-[#0993e2] transition-colors"><Share2 size={18}/></button>
             <button className="p-2 text-gray-400 hover:text-[#0993e2] transition-colors"><Bookmark size={18}/></button>
          </div>
        </div>
      </header>

      {/* Imagen Principal */}
      <div className="w-full h-[300px] md:h-[500px] rounded-[32px] overflow-hidden mb-16 shadow-2xl">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
      </div>

      {/* Cuerpo del Artículo (Renderizado Dinámico) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-2 hidden lg:block">
           {/* Espacio lateral para sticky shares o navegación si se desea */}
           <div className="sticky top-32 text-right">
              <span className="text-[9px] font-black text-gray-300 uppercase block mb-2 tracking-widest">Publicado</span>
              <span className="text-xs font-bold text-gray-900 block">{post.date}</span>
           </div>
        </div>

        <div className="lg:col-span-8">
          <article className="prose prose-lg prose-gray max-w-none">
            {/* Introducción / Excerpt destacado */}
            <p className="text-2xl font-bold text-gray-900 leading-relaxed mb-10 border-l-4 border-[#4aa82c] pl-6 italic">
              {post.excerpt}
            </p>

            {/* Mapeo del contenido rico */}
            {post.content && post.content.map((block, index) => {
              switch(block.type) {
                case 'heading':
                  return (
                    <h2 key={index} className="text-3xl font-[900] text-gray-900 mt-12 mb-6 tracking-tight">
                      {block.text}
                    </h2>
                  );
                case 'quote':
                  return (
                    <blockquote key={index} className="my-10 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                      <p className="text-xl font-medium text-gray-600 italic mb-4">"{block.text}"</p>
                      <footer className="text-xs font-black uppercase text-[#0993e2] tracking-widest">— {block.author}</footer>
                    </blockquote>
                  );
                case 'image':
                  return (
                    <figure key={index} className="my-10">
                       <img src={block.url} alt="Blog detail" className="w-full rounded-2xl shadow-lg mb-3" />
                       {block.caption && <figcaption className="text-center text-xs text-gray-400 font-bold uppercase tracking-widest">{block.caption}</figcaption>}
                    </figure>
                  );
                default: // paragraph
                  return (
                    <p key={index} className="text-gray-500 text-lg leading-8 font-medium mb-6">
                      {block.text}
                    </p>
                  );
              }
            })}
          </article>

          {/* Tags */}
          {post.tags && (
            <div className="mt-16 pt-8 border-t border-gray-100">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-4">Etiquetas relacionadas</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 text-gray-600 text-[10px] font-black uppercase rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


// --- COMPONENTE PRINCIPAL ---
const Blog = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedPost, setSelectedPost] = useState(null); // Estado para manejar la vista detallada

  const featuredPost = blogConfig.posts.find(p => p.featured);
  const regularPosts = blogConfig.posts.filter(p => !p.featured && (filter === "Todos" || p.category === filter));

  // Función para abrir un post
  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  // Función para volver al listado
  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow pt-28 md:pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* TÍTULO PRINCIPAL (Solo se muestra si NO hay un post seleccionado para mantener limpieza, o se puede dejar estático) */}
          {!selectedPost && (
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 animate-in fade-in slide-in-from-bottom-2">
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
          )}

          {/* RENDERIZADO CONDICIONAL: LISTA O DETALLE */}
          {selectedPost ? (
            // VISTA DETALLADA
            <BlogPost post={selectedPost} onBack={handleBack} />
          ) : (
            // VISTA DE LISTADO (GRID)
            <div className="animate-in fade-in slide-in-from-bottom-4">
              
              {/* ARTÍCULO DESTACADO (FEATURED) */}
              {filter === "Todos" && (
                <article 
                  onClick={() => handlePostClick(featuredPost)}
                  className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20 rounded-[40px] overflow-hidden bg-gray-50 border border-gray-100 transition-all hover:shadow-2xl cursor-pointer"
                >
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
                    <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium line-clamp-3">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
                            <User className="w-full h-full p-2 text-gray-400" />
                        </div>
                        <span className="text-xs font-black uppercase text-gray-900">{featuredPost.author}</span>
                      </div>
                      <span className="flex items-center gap-2 font-black text-[10px] uppercase tracking-widest text-[#0993e2] group/btn">
                        Leer más <ArrowUpRight className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              )}

              {/* GRID DE ARTÍCULOS REGULARES */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regularPosts.map((post) => (
                  <article 
                    key={post.id} 
                    onClick={() => handlePostClick(post)} // Evento Click
                    className="group cursor-pointer"
                  >
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
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;