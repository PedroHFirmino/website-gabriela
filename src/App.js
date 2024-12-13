import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import gabriela from './img/Gabriela.png';
import caderno from './img/caderno.png';
import ebook from './img/ebook.png';
import bulario from './img/bulario.png';
import ebookrotina from './img/ebookrotina.png';
import resumos from './img/resumos.png';
import guiapratico from './img/guiapratico.png';

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
            <a href="https://deezer.page.link/4tjTw1N9Vx4Ci6Ve6" target="_blank" rel="noopener noreferrer">Deezer</a>
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
        title="Caderno de atividades"
        description="Ideal para fixar os fundamentos essenciais da Farmácia."
        image={<img src={caderno} className='ebook' alt='caderno'/>}
        linkText="Ver mais"
      />
      <Card
        title="Descomplicando o POP"
        description="Guia essencial para profissionais que desejam dominar os Procedimentos Operacionais Padrão (POP)."
        image={<img src={ebook} className='ebook' alt='pop'/>}
        linkText="Ver mais"
      />
      <Card
        title="Bulário"
        description="Pratique e memorize os nomes dos medicamentos de forma facilitada."
        image={<img src={bulario} className='ebook' alt='bulario'/>}
        linkText="Ver mais"
      />
      <Card
        title="eBook: Rotina de Estudos"
        description="Prepare-se para alcançar seus objetivos acadêmicos e ter um desempenho incrível em sua jornada universitária."
        image={<img src={ebookrotina} className='ebook' alt='ebookrotina'/>}
        linkText="Ver mais"
      />
      <Card
        title="Resumos"
        description="Estude de maneira objetiva e simplificada com tudo que você precisa para fixar o conteúdo."
        image={<img src={resumos} className='ebook' alt='resumos'/>}
        linkText="Ver mais"
      />
      <Card
        title="Guia Prático - Recém Formado"
        description="Feito para te ajudar a iniciar, trazendo dicas valiosas e práticas para quem está começando a carreira na área da Farmácia."
        image={<img src={guiapratico} className='ebook' alt='guiapratico'/>}
        linkText="Ver mais"
      />
      
    </div>
    
  </>
  
);



export default App;
