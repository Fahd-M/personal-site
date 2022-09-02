import "./Header.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/BSTN-May-2022-Toront-CT-Headshot-46.jpg";
//import React from 'react'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav__home">
          <img className="nav__logo" src={logo} alt="fahd site logo" />
        </Link>
      </nav>
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
