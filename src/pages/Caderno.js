import React from 'react';
import './Caderno.css';
import caderno from '../img/caderno.png'

const Caderno = () => {
    return (
    <div className='Title'>
      <h1>Caderno de atividades</h1>
      <img src={caderno} className="caderno" alt="foto2" />
      
      <div className='container'>
        <div className='text'>
            <h2>Descrição</h2>
            <p>O Caderno de Atividades é ideal para estudantes e profissionais de Farmácia que desejam praticar e reforçar conceitos básicos da profissão de forma dinâmica e interativa. Com exercícios práticos e espaços para preenchimento, perfeito para quem busca aprender de maneira prática, organizada e personalizada!</p>
        </div>
      </div>
    </div>
    
    );
  };
  
  export default Caderno;