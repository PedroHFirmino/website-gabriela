import React from 'react';
import './Products.css';
import caderno from '../img/guiapraticoanti2.png'
import { Link } from 'react-router-dom';

const GuiaAoPaciente = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>Meu guia prático de orientação ao paciente: Antibióticos.</h1>
      <h2>Descrição</h2>
      <p>
      O "Meu guia prático de orientação ao paciente: Antibióticos" é um material educativo direcionado para auxiliar pacientes a entender o uso correto de antibióticos e a importância desse medicamento no combate às infecções bacterianas. Desenvolvido de forma clara e acessível, o guia é uma ferramenta útil tanto para profissionais de saúde quanto para pacientes, promovendo o uso responsável e seguro desse tipo de medicamento.
      </p>
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/S97229792Y?sck=HOTMART_PRODUCT_PAGE&off=3lxrbys4&hotfeature=32&_gl=1*xn8rag*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3NzgxNzcuNjAuMC4w&bid=1736778380394"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Educação do paciente: Ajuda os pacientes a entenderem a importância de seguir o tratamento corretamente, diminuindo os erros e aumentando a eficácia terapêutica.</p>
    <p>◾ Prevenção da resistência bacteriana: Conscientize sobre o impacto do uso inadequado de antibióticos na saúde pública e na eficácia dos tratamentos futuros.</p>
    <p>◾ Facilidade de compreensão: Com linguagem simples e visual didático, o guia é ideal para diferentes públicos, incluindo pessoas sem conhecimento técnico.</p>
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
  
  export default GuiaAoPaciente;