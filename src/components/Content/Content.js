import React from "react";
import MobileScreen from "../MobileScreen/MobileScreen";
import TabletScreen from "../TabletScreen/TabletScreen";
import "./Content.scss";
import { GiElectric } from "react-icons/gi";
import carSideView from "../../assets/images/evo-car-side.png";
import carFront from "../../assets/images/evo-front.png";
import infotainment from "../../assets/images/infotainment-empty.jpg";
import carRear from "../../assets/images/evo-back-diagonal.png";
import carCorner from "../../assets/images/evo-front-diagonal.png";

import { Link } from "react-router-dom";

function Content() {
  return (
    <section className="content">
      <div className="content__container">
        <div className="content__info">
          <div className="content__intro">
            <h1 className="content__title">Toronto, Ontario, Canada</h1>
            <h2 className="home__subtitle">Click to learn more!</h2>
            <h3 className="home__icons">
              <GiElectric className="home__intro-icon" color="white" />
              Junior Developer
            </h3>
          </div>
{/* can put the img inside the link? so clicking anywhere on image will take you to that page? */}
   {/* OR can create a card with the background image as the car, with text at the bottom(travel site vibe) */}
          <div className="car-nav">
            <div className="car-nav__front">
              <img src={carFront} className="car-nav__image front-view" />
              <Link to="/home" className="car-nav__link car-nav__link-home">
                Home
              </Link>
            </div>
            <div className="car-nav__diagonal">
              <img src={carCorner} className="car-nav__image diag-view" />
              <Link to="/about" className="car-nav__link car-nav__link-about">
                About
              </Link>
            </div>
            <div className="car-nav__side">
              <img src={carSideView} className="car-nav__image side-view" />
              <Link to="/education" className="car-nav__link car-nav__link-edu">
                Education
              </Link>
            </div>
            <div className="car-nav__back">
              <img src={carRear} className="car-nav__image rear-view" />
              <Link to="/experience" className="car-nav__link car-nav__link-exp">
                Experience
              </Link>
            </div>
            <div className="car-nav__screen">
              <img src={infotainment} className="car-nav__image screen-view" />
              <Link to="/contact" className="car-nav__link car-nav__link-contact">
                Contact
              </Link>
            </div>
            <div className="car-nav__start">
              <Link to="/about" className="car-nav__button">Start</Link>
            </div>
          </div>

          {/* add ternary operator for which screen to show based on screen width or use scss */}
          {/* <TabletScreen />
          <MobileScreen /> */}
        </div>
        {/* START BUTTON HERE LATER + ANIMATION */}
      </div>
    </section>
  );
}

export default Content;
