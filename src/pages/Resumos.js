import React from 'react';
import './Products.css';
import caderno from '../img/resumos.png'
import { Link } from 'react-router-dom';

const Resumos = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>KIT DE RESUMOS</h1>
      <h2>Descrição</h2>
      <p>
      Os resumos são ferramentas essenciais para otimizar o aprendizado e facilitar a fixação de conteúdos complexos. Pensando nisso, este material foi desenvolvido com o objetivo de simplificar temas fundamentais do curso de Farmácia, organizando as informações de forma clara e objetiva.

      <p>Resumos de:</p>

      <p>▪ Farmacologia dos anticoncepcionais orais</p>

      <p>▪ Farmacologia dos anti-inflamatórios</p>

      <p>▪ Imunologia</p>

      <p>▪ Parasitologia</p>

      <p>▪ Conceitos em Toxicologia</p>

      <p>▪ Bioquímica clínica</p>

      <p>▪ Uroanálise</p>

      <p>▪ Farmacologia dos antibióticos</p>

      <p>▪ SUS</p>

      <p>▪ Farmacologia do sistema nervoso central</p>

      <p>▪ Hematologia</p>

      <p>▪ Química farmacêutica</p>

      <p>▪ Farmacotécnica</p>

      <p>▪ Anemias</p>

      <p>▪ Farmacocinética e farmacodinâmica</p>

      <p>Com uma linguagem acessível e diagramas explicativos, esta busca construída não apenas auxilia nossos estudos, mas também contribui para que você desenvolva uma compreensão sólida e aplique esse conhecimento em sua trajetória acadêmica e profissional.</p>

      <p>Vamos juntos explorar e dominar os temas que compõem o universo farmacêutico! 🚀</p>
      </p>
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/C96795211X?sck=HOTMART_PRODUCT_PAGE&off=wljti25d&hotfeature=32&_gl=1*1hqzdzo*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3NzY2NTAuNjAuMC4w&bid=1736776672036"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Economia de Tempo: Esses resumos foram desenvolvidos para quem deseja aproveitar ao máximo cada minuto de estudo. Com todo o conteúdo já organizado e simplificado, você não precisará perder horas buscando informações ou criando materiais próprios. Isso permite que você se concentre no que realmente importa: verificar e aprender de forma eficiente, especialmente em períodos de provas ou preparação para concursos.</p>
    <p>◾ Facilidade de Aprendizado: Os conteúdos são apresentados de forma clara e objetiva.</p>

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
  
  export default Resumos;