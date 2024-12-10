import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import gabriela from './img/Gabriela.png';
import ebook from './img/ebook.jpeg';
import SobrePage from './pages/Sobre';
import Feedbacks from './pages/Feedbacks';
import instagram from './icon/instagram-brands-solid.svg';
import facebook from './icon/square-facebook-brands-solid.svg';
import linkedin from './icon/linkedin-brands-solid.svg';
import './Card.css';

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
        <div className="body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
        </Routes>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className='icons'>
          <a href="https://www.instagram.com/umaestudantedefarmacia/" target="_blank" rel="noopener noreferrer"> 
        <img src={instagram} className='instagramicon' alt='instagramicon'/></a>
        <a href="https://www.facebook.com/share/HjbNZ7PGXozdpTQk/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
        <img src={facebook} className='facebookicon' alt='facebookicon'/></a>
        <a href="https://www.linkedin.com/in/gabriela-b%C3%A1rbara-5b8192203" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} className='linkedinicon' alt='linkedinicon'/></a>
        </div>
        <h1>Gabriela Bárbara</h1>
        <div className='categorias'>
          <div className='categoria'>
            <h2>Suporte</h2>
            <p>suporteumaestudantedefarmacia@gmail.com</p>
            </div>
            <div className='categoria'>
            <h2>Parcerias</h2>
            <p>parceriadagabi@gmail.com</p>
            </div>
            <div className='categoria'>
            <h2>Palestras</h2>
            <p>palestrasdagabi@gmail.com</p>
          </div>
          <div className='categoria'>
            <h2>Podcast</h2>
            <a href="https://open.spotify.com/show/3arbFQyofn3bK8HuXzO7qO?si=zlOlXZ_pRaSruaULhf2ccg" target="_blank" rel="noopener noreferrer"> Spotify</a>
            <a href="https://open.spotify.com/show/3arbFQyofn3bK8HuXzO7qO?si=zlOlXZ_pRaSruaULhf2ccg" target="_blank" rel="noopener noreferrer">Deezer</a>
            <a href="https://podcasts.apple.com/br/podcast/fala-farma-por-umaestudantedefarmacia/id1783442098" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
            </div>       
          </div>
          <div className='creator'>
          <h2>Desenvolvido por: Flippy</h2>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Componente Card
const Card = ({ title, description, image, linkText }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <a href='#' className='image-card'>{image}</a>
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
        image={<img src={ebook} className='ebook' alt='ebook'/>}
        linkText="Ver mais"
      />
      <Card
        title="Cronograma de estudos"
        description="Oi, eu sou a Gabriela de Minas Gerais - Brasil"
        image={<img src={ebook} className='ebook' alt='ebook'/>}
        linkText="Ver mais"
      />
      <Card
        title="E-book Gabriela"
        description="Esse é meu e-book teste criando o site"
        linkText="Ver mais"
      />
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



export default App;
