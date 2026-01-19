import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Ruta para manejar errores 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;