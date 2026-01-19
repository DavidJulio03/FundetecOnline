import React from 'react';
import NosotrosHero from './components/NosotrosHero';
import Objetivos from './components/Objetivos';
import MisionVision from './components/MisionVision';
import MarcoFilosofico from './components/MarcoFilosofico';
import GaleriaGraduados from './components/Galeria';
import Footer from '../../shared/layout/Footer';
import Header from '../../shared/layout/Header';


const Nosotros = () => {
  return (
    <main className="pt-16 bg-white">
      <Header></Header>
      <NosotrosHero />
      <Objetivos />
      <MisionVision />
      <MarcoFilosofico />
      <GaleriaGraduados />
      <Footer></Footer>
    </main>
  );
};

export default Nosotros;