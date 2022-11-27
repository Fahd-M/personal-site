import "./Footer.scss";
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__links'>
        <Link to="/home" className="footer__logo">Return to Home</Link>
        <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/fahd-munir/' target="_blank" rel="noreferrer"className='footer__link'>
              <AiOutlineLinkedin className='footer__icon'/>
            </a>
            <a href='https://github.com/Fahd-M' target="_blank" rel="noreferrer" className='footer__link'>
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

