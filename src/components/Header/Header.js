import "./Header.scss";
import HamburgerNav from "./HamburgerNav";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/BSTN-May-2022-Toront-CT-Headshot-46.jpg";
import { motion } from "framer-motion";
//import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__home">
          <motion.img 
          whileHover={{        
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 90, 180, 270, 360,],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
            //transition={{ ease: "linear", duration: 1, repeat: Infinity }}

            // animate={{
            //     scale: [1, 2, 2, 1, 1],
            //     rotate: [0, 270, 360, -270, 0],
            //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                
            // }}
             className="nav__logo" src={logo} alt="fahd site logo" ></motion.img>
        </Link>
      </nav>
      <HamburgerNav />
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            About
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/experience"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Experience
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/education"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Education
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className="nav__link"
            activeClassName="nav__link--active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
