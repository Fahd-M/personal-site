import React from 'react'
import "./Footer.scss";
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineCopyright } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__links'>
        <Link to="/home" className="footer__logo">Return to Home</Link>
        <div className='footer__socials'>
            <a href='https://facebook.com' target="_blank" className='footer__link'>
              <AiOutlineFacebook className='footer__icon'/>
            </a>
            <a href='https://intagram.com' target="_blank" className='footer__link'>
              <BsInstagram className='footer__icon'/>
            </a>
            <a href='https://linkedin.com' target="_blank"className='footer__link'>
              <AiOutlineLinkedin className='footer__icon'/>
            </a>
            <a href='https://github.com' target="_blank" className='footer__link'>
              <AiFillGithub className='footer__icon'/>
            </a>
        </div> 
      </div>

      <p className='footer__copyright'> &copy; Fahd Munir Portfolio Website. </p>
      <p className='footer__copyright--legal'> All rights reserved.</p>
    </footer>

  )
}

export default Footer

