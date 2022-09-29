import React from 'react'
import Skills from '../../components/Skills/Skills';
import Interests from '../../components/Interests/Interests';
import fahdSelfie from '../../assets/logos/BSTN-May-2022-Toront-CT-Headshot-46.jpg';
import fahdSelfieOutdoor from '../../assets/images/Fahd-Munir-headshot.jpeg';

import './About.scss';
import { motion } from "framer-motion";

function About() {
  return (
    <>
    <div className='about__container container section'>
      <div className='about__content'>
        <motion.img 
          transition={ {repeat:Infinity, duration: 20}}
          initial={{y:550}}
          animate={{y: [550, 400, 200, 0, 200, 400, 550]}}
          src={fahdSelfieOutdoor} 
          className='about__outdoor'
        />
        <div className='about__text'>
          <h1 className='about__title section__title'> About Me </h1>
          <div className='about__body'>
            <p className='about__info'>
            If I had to describe myself in one word it would be RESILIENT. 
            </p>    
            <p className='about__info'>
            I aspire to build a career solving problems and working on large projects to generate revenue or increase efficiency of business operations. Helping to create a structure through a fully functional and interactive website or mobile application would be where I find myself finding a role.

            </p>      
            <p className='about__info'>
            It is my goal to work in a team that specializes in web or software development that is working on an evolving application which serves a particular function. By being fully immersed in the world of web development, I hope to act like a sponge and soak up as possible while I continue to grow. As a quick learner I'm very adaptable to new situations.

            </p> 
            <p className='about__info'>
            I love to collaborate within a team and communicating technical information in an understandable way. I enjoy the planning and research process of any project and believe this leads to more success with my coding.  My free time is spent working on my personal projects, playing basketball, working on my automobile, and reading about current news events. 
            </p>
          </div>
        </div>
        <motion.img 
          transition={ {repeat:Infinity, duration: 20}}
          initial={{y:0}}
          animate={{y: [0, 200, 400, 550, 400, 200, 0]}}
     
          src={fahdSelfie} 
          className='about__img'
        />
 
      </div>      
    </div>
    </>
  )
}

export default About