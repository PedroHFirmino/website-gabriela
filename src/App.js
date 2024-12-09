import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import gabriela from './img/Gabriela.png';
import SobrePage from './pages/Sobre';
import './Card.css';

// Componente Card
const Card = ({ title, description, linkText }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href="#" className="card-link">{linkText} →</a>
      </div>
    </div>
  );
};

// Página Home
const HomePage = () => (
  <>  
    <h1 id="body-title">Meus Produtos</h1>
    {/* Cards */}
    <div className="card-container">
      <Card
        title="Resuminhos"
        description="Estude de maneira mais clara e objetiva e fixe melhor os conteúdos."
        linkText="Ver mais"
      />
      <Card
        title="Cronograma de estudos"
        description="Oi, eu sou a Gabriela de Minas Gerais - Brasil"
        linkText="Ver mais"
      />
      <Card
        title="E-book Gabriela"
        description="Esse é meu e-book teste criando o site"
        linkText="Ver mais"
      />
    </div>
  </>
);

// Componente principal App
function App() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  return (
    <Router> {/* Router englobando toda a aplicação */}
      <div className="App">
        {/* Cabeçalho */}
        <header className="App-header">
          <img src={gabriela} className="gabriela-foto" alt="foto" />
          <h1>Gabriela Bárbara</h1>
          <nav className="nav-bar">
            <ul className={isMenuActive ? 'active' : ''}>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/sobre">Sobre mim</Link></li>
              <li><Link to="/feedbacks">Feedbacks</Link></li>
              <li>
                <a href="https://www.instagram.com/umaestudantedefarmacia/" target="_blank" rel="noopener noreferrer">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        {/* Rotas */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/feedbacks" element={<h1>Feedbacks</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
