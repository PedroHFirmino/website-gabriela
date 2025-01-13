import React from 'react';
import './Products.css';
import caderno from '../img/guiaestagiario.png'
import { Link } from 'react-router-dom';

const GuiaEstagiario = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>Guia prático do Estagiário</h1>
      <h2>Descrição</h2>
      <p>
      O Guia Prático do Estagiário para Estudantes de Farmácia é um recurso indispensável para ajudar os futuros farmacêuticos a se prepararem para a fase prática de sua formação. Este guia oferece uma abordagem passo a passo, com orientações detalhadas sobre como aproveitar ao máximo o estágio, desde a preparação inicial até o fechamento da experiência.</p>

      <p>Além disso, o Guia Prático do Estagiário contém um modelo de currículo editável , oferecendo um bônus que facilita a elaboração de um currículo profissional, destacando as habilidades essenciais para quem está em busca de um estágio.</p>
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/Y97230093Y?sck=HOTMART_PRODUCT_PAGE&off=jgis7d5f&hotfeature=32&_gl=1*3dnewl*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3Nzg1MjUuNjAuMC4w&bid=1736778580024"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Preparação Completa para o Mercado de Trabalho : O guia oferece orientações claras sobre como os estagiários se adaptarem rapidamente ao ambiente profissional, entender suas responsabilidades e desenvolver habilidades essenciais para o trabalho em farmácias, hospitais ou outras áreas da saúde. Isso garante que o estudante esteja bem preparado para enfrentar os desafios do estágio e se destacar no mercado de trabalho.</p>

  </div>
  </div>
    <div className='quem-sou-eu-container'>
      <div className='quem-sou-eu'>
        <h2>Quem sou eu?</h2>
        <p>Sou Gabriela Barbara, farmacêutica formada em 2022, com experiência em farmácia hospitalar, drograria e logística farmacêutica. Tenho paixão por compartilhar conhecimento e inspirar pessoas, o que me levou a criar o Instagram @umaestudantedefarmacia , onde ajudo estudantes e profissionais da área a se desenvolverem e serem sua melhor versão.</p>

      <p>📚 Pós graduada em: Farmácia Hospitalar e acompanhamento oncologico;</p>

      <p>🩺 Farmacia Clinica e prescrição farmacêutica;</p>

      <p>💼 Membro do GTT de Publicidade e propaganda pelo CRF MG.</p>

      <p>💟 Espero te ajudar muito com os meus conteúdos!</p>
      </div>
    </div>

  </div>
  
    
    
    );
  };
  
  export default GuiaEstagiario;