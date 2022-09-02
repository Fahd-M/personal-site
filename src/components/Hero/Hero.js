import React from 'react';
import './Hero.scss';
import HeroImg from '../../assets/images/hero-windshield.avif';
import closeTag from '../../assets/images/close-tag.svg';
import binaryWorld from '../../assets/images/binary-world.svg';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero__text'>
        <h1 className='hero__title'>Home</h1>
        <h2 className='hero__subheading'>Hello world</h2>
      </div>
    <div className='hero__visual'>
      <img src={HeroImg} className='hero__img' alt="windshield"/>
      <img src={closeTag} className='hero__small-img' />

      <img src={binaryWorld} className='hero__big-img'/>
    </div>
</div>
  )
}

export default Hero