import React, { useState } from 'react';
import './Education.scss';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import eduMessages from './eduMessages';
import { Schools } from './Schools';


function Education() {
  return (
    <div className='education__wrapper'>
      <section className='section education'>
        <h1 className='education__title'>Education</h1>
        <div className='education__info'>
          <h2 className='education__school'>School</h2>
          {eduMessages.degrees.map(item => <Schools key={item.name} {...item}/>)}
        </div>
      </section>
      
    </div>
  )
}

export default Education