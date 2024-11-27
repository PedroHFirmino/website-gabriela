
import './App.css';
import gabriela from './img/Gabriela.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gabriela} className="gabriela-foto" alt="foto" />
      <h1>Gabriela Bárbara</h1>
        <nav className='nav-bar'>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Sobre mim</a></li>
            <li><a href="/">Feedbacks</a></li>
            <li><a href="https://www.instagram.com/umaestudantedefarmacia/" target='blank'>Contato</a></li>
            </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
