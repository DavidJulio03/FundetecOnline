import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  BookMarked, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Award,
  ArrowRight
} from 'lucide-react';
import BachilleratoDetail from './components/BachilleratoDetail';
import Header from '../../shared/layout/Header';
import TecnicosDetail from './components/TecnicosDetail';
import DiplomadosExplorer from './components/DiplomadosExplorer';
import Footer from '../../shared/layout/Footer';

const Programas = () => {
  return (
      
    <div className="font-sans antialiased text-gray-800 bg-white min-h-screen">
      <Header />
      <BachilleratoDetail></BachilleratoDetail>
      <TecnicosDetail></TecnicosDetail>
      <DiplomadosExplorer></DiplomadosExplorer>
      <Footer></Footer>
    </div>

  );
};

export default Programas;