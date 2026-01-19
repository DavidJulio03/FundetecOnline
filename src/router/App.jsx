import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import Programas from '../pages/Programas/Programas';
import Nosotros from '../pages/Nosotros/Nosotros';
import FAQ from '../pages/FAQ/FAQ';
import Blog from '../pages/Blog/Blog';


function App() {
  return (
    <Router basename='/FundetecOnline'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programas" element={<Programas />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/preguntas" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;