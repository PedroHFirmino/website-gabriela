import React from 'react';
import './Caderno.css';
import caderno from '../img/caderno.png';
import { Link } from 'react-router-dom';

const Caderno = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>Caderno de Atividades</h1>
      <h2>Descrição</h2>
      <p>
        O Caderno de Atividades é ideal para estudantes e profissionais de Farmácia que desejam praticar e reforçar conceitos básicos da profissão de forma dinâmica e interativa. Com exercícios práticos e espaços para preenchimento, perfeito para quem busca aprender de maneira prática, organizada e personalizada!
      </p>
      <h2>Adquira já e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/W96813088H?sck=HOTMART_PRODUCT_PAGE&off=swuu3o8a&hotfeature=32&_gl=1*1qwvtn8*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjI3NDQwNy4xNy4wLjE3MzYyNzQ0MDguNTkuMC4w&bid=1736274427005"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Treino de Conceitos Básicos: Ideal para fixar os fundamentos essenciais da Farmácia.</p>
    <p>◾ Praticidade: Exercícios simples e diretos para facilitar o aprendizado.</p>
    <p>◾ Organização: Permite registrar informações de forma clara e estruturada.</p>
    <p>◾ Interatividade: Torna o estudo mais dinâmico e envolvente.</p>
    <p>◾ Personalização: Pode ser preenchido e adaptado de acordo com as necessidades individuais.</p>
  </div>
  </div>
    <div className='quem-sou-eu-container'>
      <div className='quem-sou-eu'>
        <h1>Quem sou eu?</h1>
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
  
  export default Caderno;