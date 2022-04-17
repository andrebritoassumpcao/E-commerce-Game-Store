import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Todos from './components/pages/Todos';
import Acao from './components/pages/Acao';
import Aventura from './components/pages/Aventura';
import Esportes from './components/pages/Esportes';
import Estrategia from './components/pages/Estrategia';
import Ofertas from './components/pages/Ofertas';
import Game from './components/pages/Game';


import Carrinho from './components/pages/Carrinho';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>   
        <Navbar />
        <Container customClass="min-height">
            <Routes>            
              <Route path="/" element={<Home />}/>
              <Route path="/todos" element={<Todos />}/>
              <Route path="/acao" element={<Acao />}/>
              <Route path="/aventura" element={<Aventura />}/>          
              <Route path="/esportes" element={<Esportes />}/>          
              <Route path="/estrategia" element={<Estrategia />}/>          
              <Route path="/ofertas" element={<Ofertas />}/>     
              <Route path="/carrinho" element={<Carrinho />}/>    
              <Route path="/game/:id" element={<Game />}/>    

  
                      
            </Routes>
          </Container>
        <Footer />    
    </Router>
  );
}

export default App;
