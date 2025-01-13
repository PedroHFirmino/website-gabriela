import React from 'react';
import './Products.css';
import caderno from '../img/etiquetas.jpeg'
import { Link } from 'react-router-dom';

const Etiquetas = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>Bulário Personalizável</h1>
      <h2>Descrição</h2>
      <p>As etiquetas de posologia ilustradas são uma solução criativa e acessível para auxiliar pacientes que precisam de cuidados especiais, especialmente aqueles que têm dificuldade em compreender textos, como crianças, idosos ou pessoas com baixa alfabetização.</p>

      <p>Essas etiquetas apresentam desenhos simples, coloridos e intuitivos para representar horários, doses e instruções de uso de medicamentos. Por exemplo, ícones como o sol para a manhã, a lua para a noite ou copos d'água para indicar ingestão de líquidos. Essa abordagem visual facilita a compreensão e reduz o risco de erros na administração de medicamentos.</p>

      <p>Desenvolvidas como um produto digital, as etiquetas podem ser personalizadas e ajustadas para atender às necessidades específicas de cada paciente. Após a personalização, podem ser impressas ou compartilhadas em formato digital, confortáveis ​​e convenientes</p>
      
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/I97229477R?sck=HOTMART_PRODUCT_PAGE&off=5c020728&hotfeature=32&_gl=1*1o89hwj*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3NzczOTUuNTIuMC42Nzg3MzQ3ODA.&bid=1736777533693"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Ilustrações Claras e Intuitivas: Cada etiqueta apresenta desenhos e ícones que representam horários, dosagens e instruções específicas, tornando a compreensão mais fácil para pacientes com diferentes níveis de alfabetização ou que enfrentam desafios cognitivos.</p>
    <p>◾ Personalização Flexível: Permite a personalização das etiquetas de acordo com as necessidades individuais de cada paciente.</p>

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
  
  export default Etiquetas;