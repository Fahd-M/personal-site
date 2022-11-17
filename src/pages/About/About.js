import Interests from '../../components/Interests/Interests';
import fahdSelfie from '../../assets/logos/BSTN-May-2022-Toront-CT-Headshot-46.jpg';
import fahdSelfieOutdoor from '../../assets/images/Fahd-Munir-headshot.jpeg';

import './About.scss';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
    <div className='about__container container section'>
      <div className='about__content'>
        <motion.img 
          transition={ {repeat:Infinity, duration: 30}}
          initial={{y:1300}}
          animate={{y: [1300,1200,1000,800,600,400, 200, 0, 200, 400, 600, 800, 1000, 1200,1300]}}
          src={fahdSelfieOutdoor} 
          alt="Fahd selfie outdoors"
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
          transition={ {repeat:Infinity, duration: 30}}
          initial={{y:0}}
          animate={{y: [0,200, 400, 600, 800, 1000, 1200, 1300, 1200, 1000, 800, 600,400, 200, 0]}}
          src={fahdSelfie} 
          alt="Fahd selfie indoors"
          className='about__img'
        />
 
      </div>      
    </div>
    <div className='interact'>
      <Link
       to="/contact"
       className='interact__cta btn'
      >
      Contact me here!
      </Link>
    </div>
    <div className="interests__container container">
      <h2 className="interests__title">Interests</h2>
      <Interests />
    </div>
    </>
  )
}

export default About