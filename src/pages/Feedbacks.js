import React from 'react';
import './Feedbacks.css';
import feedback from '../img/Feedback.png';
import feedback2 from '../img/Feedback2.png';
import feedback3 from '../img/Feedback3.png';
import feedback4 from '../img/Feedback4.png';
import feedback5 from '../img/Feedback5.png';
import feedback6 from '../img/Feedback6.png';
import feedback7 from '../img/Feedback7.png';
import feedback8 from '../img/Feedback8.png';
import feedback9 from '../img/Feedback9.png';
import feedback10 from '../img/Feedback10.png';

const Feedbacks = () => {
  return (
    <div className='feedbacks'>
      <h1>Feedbacks</h1>
      <div className='feedbacks-container'>
        <img src={feedback} className='feedback'/>
        <img src={feedback2} className='feedback2'/>
        <img src={feedback3} className='feedback3'/>
        <img src={feedback4} className='feedback4'/>
        <img src={feedback5} className='feedback5'/>
        <img src={feedback6} className='feedback6'/>
        <img src={feedback7} className='feedback7'/>
        <img src={feedback8} className='feedback8'/>
        <img src={feedback9} className='feedback9'/>
        <img src={feedback10} className='feedback10'/>
      </div>

    </div>

    
  );
};

export default Feedbacks;
