import React from 'react';
import './Hero.scss';
// import HeroImg from '../../assets/images/hero-windshield.avif';
import closeTag from '../../assets/images/close-tag.svg';
import binaryWorld from '../../assets/images/binary-world.svg';

import {motion} from 'framer-motion';
import Waveline from './Waveline';

function Hero() {
  return (
    <div className='hero'>
      <Waveline />
      <div className='hero__text'>
        <motion.h1 
          initial={{rotate: 0, scale: 1}}
          animate={{rotate: -15}} 
          transition={{duration: 3}}
          className='hero__title'>
            Home
        </motion.h1>
        <motion.h2 whileHover={{scale: 3, x:-100, y:+50}} transition={{delay: 1.5}} className='hero__subheading'>Hello world</motion.h2>
      </div>
    <div className='hero__visual'>
      <img src={closeTag} className='hero__small-img' />
      <motion.img initial={{scale: 0}} animate={{scale: 1}} transition={{delay: 1.5}} src={binaryWorld} className='hero__big-img'/>
    </div>
</div>
  )
}

export default Hero