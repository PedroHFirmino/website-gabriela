import React from 'react';
import './Products.css';
import caderno from '../img/ebook.png'
import { Link } from 'react-router-dom';

const Pop = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>DESCOMPLICANDO O POP</h1>
      <h2>Descrição</h2>
      <p>
      O Descomplicando o POP é um guia essencial para profissionais que desejam dominar os Procedimentos Operacionais Padrão (POP) de forma prática e objetiva. Criado para desmistificar conceitos e trazer clareza, ele é ideal para quem busca implementar ou otimizar processos com eficiência e segurança.

        <p>No guia, você encontrará:</p>

        <p>Passo a passo prático para criar e revisar POPs eficazes;</p>

        <p>Estratégias para minimizar erros e garantir a padronização nos processos;</p>

        <p>Dicas sobre como usar o POP como ferramenta de treinamento e melhoria contínua;</p>

        <p>Modelo de POP editável incluso, para facilitar a aplicação no seu dia a dia.</p>

        <p>Com linguagem simples e conteúdo direto, este guia é perfeito para quem busca otimizar sua rotina e elevar os padrões de qualidade no trabalho!</p>
      </p>
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/Q96940860W?sck=HOTMART_PRODUCT_PAGE&off=bg7zh8gd&hotfeature=32&_gl=1*hwd5at*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3NzUxMzQuNjAuMC4w&bid=1736775140611"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Padronização Facilitada: Com o modelo de POP editável incluso, você economiza tempo e assegura que seus processos sejam documentados de forma clara e eficiente, seguindo as melhores práticas.</p>
    <p>◾ Redução de Erros: Ao compreender e aplicar os conceitos do guia, você melhora a execução das atividades, minimizando falhas e aumentando a qualidade dos resultados na rotina profissional.</p>
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
  
  export default Pop;