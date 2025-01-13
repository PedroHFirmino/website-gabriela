import React from 'react';
import './Products.css';
import caderno from '../img/ebookrotina.png'
import { Link } from 'react-router-dom';

const RotinaEstudos = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>eBook: Como organizar sua rotina de estudos</h1>
      <h2>Descrição</h2>
      <p>
      Esse eBook foi criado exclusivamente para estudantes do ensino superior que têm dificuldade para organizar sua rotina de estudos.

      <p>Nele, você aprenderá a:</p>

      <p>✅ Organize sua rotina de forma prática e eficiente</p>

      <p>✅ Criar um cronograma de estudos personalizado</p>

      <p>✅ Vencer a procrastinação com estratégias simples e eficazes</p>

      <p>✅Fazer seu tempo render ao máximo, sem abrir mão de momentos de descanso</p>

      <p>Com dicas exclusivas e ferramentas simples de aplicar, você estará mais preparado(a) para alcançar seus objetivos acadêmicos e ter um desempenho incrível em sua jornada universitária</p>

      <p>🎯 Comece hoje mesmo a transformar sua rotina de estudos!</p>
      </p>
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/N96812528L?sck=HOTMART_PRODUCT_PAGE&off=d2hh2z02&hotfeature=32&_gl=1*c9iaba*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3NzU2ODguMjIuMC4w*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.&bid=1736775706251"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Objetividade: Focado em pontos essenciais para facilitar o aprendizado.</p>
    <p>◾ Organização: Ajuda a planejar estudos de forma eficiente.</p>
    <p>◾ Praticidade: Conteúdo direto ao ponto, sem enrolação.</p>
    <p>◾ Flexibilidade: Pode ser adaptado à rotina de cada estudante.</p>
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
  
  export default RotinaEstudos;