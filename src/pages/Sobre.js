import React from 'react';
import './Sobre.css';
import gabriela from '../img/Gabriela2.png'

const SobrePage = () => {
  return (
    <div className='AboutMe'>
      <h1>Sobre Mim</h1>
      <img src={gabriela} className="gabriela-foto2" alt="foto2" />
      <p>Sou Gabriela Barbara, farmacêutica formada em 2022, com experiência em farmácia hospitalar, drograria e logística farmacêutica. Tenho paixão por compartilhar conhecimento e inspirar pessoas, o que me levou a criar o Instagram @umaestudantedefarmacia , onde ajudo estudantes e profissionais da área a se desenvolverem e serem sua melhor versão.</p>

<p>📚 Pós graduada em: Farmácia Hospitalar e acompanhamento oncologico;</p>

<p>🩺 Farmacia Clinica e prescrição farmacêutica;</p>

<p>💼 Membro do GTT de Publicidade e propaganda pelo CRF MG.</p>

<p>💟 Espero te ajudar muito com os meus conteúdos!</p>
    </div>
  );
};

export default SobrePage;
