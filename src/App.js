import './App.css';
import gabriela from './img/Gabriela.png';
import React from 'react';
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

// Componente principal App
function App() {
  return (
    <div className="App">
      {/* Cabeçalho */}
      <header className="App-header">
        <img src={gabriela} className="gabriela-foto" alt="foto" />
        <h1>Gabriela Bárbara</h1>
        <nav className="nav-bar">
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/">Sobre mim</a></li>
            <li><a href="/">Feedbacks</a></li>
            <li><a href="https://www.instagram.com/umaestudantedefarmacia/" target="_blank" rel="noopener noreferrer">Contato</a></li>
          </ul>
        </nav>
      </header>

      <h1 id='body-title'>Meus Produtos</h1>

      {/* Cards  */}

      <div className="card-container">
        <Card 
          title="E-book Gabriela" 
          description="Esse é meu e-book teste criando o site" 
          linkText="Ver mais"
        />
        <Card 
          title="Cronograma de estudos" 
          description="Oi, eu sou a Gabriela de Minas Gerais - Brasil" 
          linkText="Ver mais"
        />
      </div>
    </div>
  );
}

export default App;
