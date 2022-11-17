import "./HamburgerNav.scss";
import { CgMenuRound } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function HamburgerNav() {
  const [open, setOpen] = useState(false);

  const openIcon = (
    <CgMenuRound
      className="hmbg__icon"
      size="50px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgCloseO
      className="hmbg__icon hmbg__icon-close"
      size="50px"
      color="white"
      onClick={() => setOpen(!open)}
    />
  );


  const closeMenu = () => setOpen(false);
  const isMobile = () => true;
  const animateFrom = { opacity: 0, x: +100 };
  const animateTo = { opacity: 1, x: 0 };

  const listFrom = {opacity: 0, x: -100, y:-50};
  const listTo = {opacity:1, x:0, y:0}

  return (
    <div className="hmbg">
      {open ? closeIcon : openIcon}
      {open && (
        <motion.ul 
            initial={listFrom}
            animate={listTo}
            transition={{duration:1}}
            className="hmbg__list">
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.5, duration:0.5 }}
            className="hmbg__item"
            onClick={() => isMobile && closeMenu()}
          >
            <NavLink
              to="/about"
              className="hmbg__link"
              activeClassName="hmbg__link--active"
            >
              About
            </NavLink>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 1.0, duration:1 }}
            className="hmbg__item"
            onClick={() => isMobile && closeMenu()}
          >
            <NavLink
              to="/experience"
              className="hmbg__link"
              activeClassName="hmbg__link--active"
            >
              Experience
            </NavLink>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 1.5, duration:1}}
            className="hmbg__item"
            onClick={() => isMobile && closeMenu()}
          >
            <NavLink
              to="/education"
              className="hmbg__link"
              activeClassName="hmbg__link--active"
            >
              Education
            </NavLink>
          </motion.li>
          <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 2, duration:1 }}
            className="hmbg__item"
            onClick={() => isMobile && closeMenu()}
          >
            <NavLink
              to="/contact"
              className="hmbg__link"
              activeClassName="hmbg__link--active"
            >
              Contact
            </NavLink>
          </motion.li>
        </motion.ul>
      )}
    </div>
  );
}

export default HamburgerNav;
