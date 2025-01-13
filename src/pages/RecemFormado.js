import React from 'react';
import './Products.css';
import caderno from '../img/guiapratico.png'
import { Link } from 'react-router-dom';

const RecemFormado = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>Guia do Recém Formado</h1>
      <h2>Descrição</h2>
      <p>
      Você está saindo da faculdade e sente aquele misto de entusiasmo e insegurança sobre o futuro? O Guia Prático do Recém-Formado foi feito para te ajudar nessa transição desafiadora, trazendo dicas valiosas e práticas para quem está começando a carreira na área da Farmácia.
      
      <p>No guia, você encontrará:</p>

      <p>▪ Orientações claras sobre os primeiros passos no mercado de trabalho;</p>

      <p>▪ Dicas para criar um currículo de impacto (incluindo um modelo editável);</p>

      <p>▪ Estratégias para se destacar em entrevistas e processos seletivos;</p>

      <p>▪ Conselhos sobre como escolher o caminho certo na profissão;</p>

      <p>▪ Sugestões de como lidar com os desafios do início da carreira e construir confiança como profissional.</p>

      <p>Transforme dúvidas em decisões seguras e comece sua trajetória com mais autoconfiança e propósito. Esse é o suporte que você precisava para dar os primeiros passos rumo ao sucesso!</p>
      </p>
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/G96940781S?sck=HOTMART_PRODUCT_PAGE&off=wdgjfi5f&hotfeature=32&_gl=1*1j2cemy*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3NzY2OTYuMTQuMC4w&bid=1736777109757"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Facilidade de Aplicação: Com orientações práticas e diretas, o guia torna mais simples e rápido colocar em prática os primeiros passos na carreira, desde a criação de um currículo atrativo até a preparação para entrevistas.</p>
    <p>◾ Personalização Profissional: Inclui um modelo de currículo editável que permite adaptar suas informações e destacar seus pontos fortes, ajudando você a se posicionar melhor no mercado de trabalho.</p>
 
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
  
  export default RecemFormado;