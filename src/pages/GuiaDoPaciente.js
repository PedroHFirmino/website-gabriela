import React from 'react';
import './Products.css';
import caderno from '../img/guiapráticoanti.png'
import { Link } from 'react-router-dom';

const GuiaDoPaciente = () => {
    return (
<div className="Title">
  <h1>Produtos</h1>
  <div className="container">
    <img src={caderno} className="caderno" alt="foto2" />
    <div className="text">
      <h1>Meu guia prático de orientação do paciente: Anticoncepcionais.</h1>
      <h2>Descrição</h2>
      <p>
      Meu guia prático de orientação ao paciente: Anticoncepcionais" é um material completo que aborda não apenas os diferentes tipos de anticoncepcionais, mas também seus mecanismos de ação, auxiliando na escolha do método mais adequado para cada paciente.</p>

      <p>O guia inclui informações detalhadas sobre:</p>

      <p>▪ DIU (Dispositivo Intrauterino): Explicação sobre os diferentes tipos (DIU hormonal e de cobre), seu mecanismo de ação, vantagens, vantagens e cuidados necessários.</p>

      <p>▪ Pílula do dia seguinte: Orientações sobre quando e como utilizá-la, seus mecanismos de ação e sua indicação como um método de emergência, esclarecendo dúvidas comuns sobre eficácia e segurança.</p>

      <p>▪ Mecanismo de ação dos anticoncepcionais em geral: Explicações claras sobre como métodos hormonais (pílulas, adesivos, injetáveis) atuam no organismo, inibindo a ovulação, alterando o muco cervical e/ou modificando o endométrio, além de outros métodos contraceptivos, como preservativos.</p>

      <p>Esse conteúdo é apresentado de forma didática e ilustrada, tornando-o acessível para diferentes públicos, desde profissionais de saúde até pacientes que buscam entender suas melhores opções de contracepção.</p>

      <p>Com informações completas e linguagem clara, o guia ajuda a desmistificar o uso de anticoncepcionais e promove decisões mais conscientes e seguras em relação à saúde reprodutiva.</p>
      
      <h2>Adquira e receba na hora!</h2>
      <div className="button-container">
    <Link to="https://pay.hotmart.com/W97229669I?sck=HOTMART_PRODUCT_PAGE&off=79dbxzwo&hotfeature=32&_gl=1*85iukn*_gcl_aw*R0NMLjE3MzI2MzgyNTYuQ2owS0NRaUFnSmE2QmhDT0FSSXNBTWlMN1Y5X1dPbk5BTUh3MzNZU3lqRzBsSnVYaE9vUUpXa2haMV9NNVhwalF3aXU1ZlBIb0p4bXdwVWFBc1R2RUFMd193Y0I.*_gcl_au*NjIwMzIzMTUyLjE3MjkxNjc3NDU.*_ga*MTQ3MjAyODA2My4xNzI5MTY3NzQ1*_ga_GQH2V1F11Q*MTczNjc3NDA3MC4xOS4xLjE3MzY3Nzc1MzMuNjAuMC4w&bid=1736778026165"  target="_blank" className="button-link">
    <button className="button">Comprar</button>
    </Link>
</div>
</div>
    </div>
    <div className='container-vantagens'>
    <div className='vantagens'>
    <h2>Vantagens</h2>
    <p>◾ Facilidade na comunicação: Serve como um material de apoio no atendimento, ajudando a explicar de forma mais didática e visual as opções contraceptivas aos pacientes.</p>
    <p>◾ Otimização do tempo: Responder a dúvidas comuns de maneira clara e objetiva, permitindo que o profissional aborde outras necessidades durante o atendimento.</p>
    <p>◾ Confiabilidade: Baseado em informações científicas, o guia transmite segurança tanto para o profissional quanto para o paciente, reforçando a confiança no cuidado.</p>
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
  
  export default GuiaDoPaciente;