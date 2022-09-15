import React from "react";
import MobileScreen from "../MobileScreen/MobileScreen";
import TabletScreen from "../TabletScreen/TabletScreen";
import "./Content.scss";
import { GiElectric } from "react-icons/gi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { FaDog } from "react-icons/fa";
import carSideView from "../../assets/images/evo-car-side.png";
import carFront from "../../assets/images/evo-front.png";
import infotainment from "../../assets/images/infotainment-empty.jpg";
import carRear from "../../assets/images/evo-back-diagonal.png";
import carCorner from "../../assets/images/evo-front-diagonal.png";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss'
import "swiper/css/pagination";
import { Pagination } from "swiper";



import { motion } from "framer-motion";
function Content() {
  return (
    <section className="content">
      <div className="content__container">
        <div className="content__info">
          <div className="content__intro">
            <h1 className="content__title">Welcome</h1>
            <h2 className="home__subtitle">Click to learn more!</h2>
            <motion.div className="car-nav__start">
              <Link to="/about" className="car-nav__button">Start</Link>
            </motion.div>
            {/* SET UP onClick so that after clicking start it makes the slider div appear? */}
            
            {/* MOVE THIS CODE BELOW INTO ABOUT PAGE(INTERESTS) */}
            {/* <h3 className="home__icons">
              <GiElectric className="home__intro-icon" color="white" />
              Junior Developer
            </h3>
            <h3 className="home__icons">
              <AiOutlineCar className="home__intro-icon" color="white" />
              Automotive Enthusiast 
            </h3>
            <h3 className="home__icons">
              <MdOutlineSportsBasketball className="home__intro-icon" color="white" />
              All things basketball
            </h3>
            <h3 className="home__icons">
              <FaDog className="home__intro-icon" color="white" />
              Dog Lover
            </h3> */}
          </div>
{/* can put the img inside the link? so clicking anywhere on image will take you to that page? */}
   {/* OR can create a card with the background image as the car, with text at the bottom(travel site vibe) */}
          
          <Swiper
            className="car-nav container mySwiper"
            spaceBetween={25}
            slidesPerView={1}
            loop={'true'}
            grabCursor={'true'}
            onSlideChange={()=> console.log('slide changed')}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            // breakpoints={{
            //   768: {
            //     slidesPerView: 3,
            //   },
            //   1280: {
            //     spaceBetween: 48,
            //   },
            // }}
            
          >
            <SwiperSlide className="car-nav__front card">
              <img src={carFront} className="car-nav__image front-view" />
              <Link to="/home" className="car-nav__link car-nav__link-home">
                Home
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__diagonal card">
              <img src={carCorner} className="car-nav__image diag-view" />
              <Link to="/about" className="car-nav__link car-nav__link-about">
                About
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__side card">
              <img src={carSideView} className="car-nav__image side-view" />
              <Link to="/education" className="car-nav__link car-nav__link-edu">
                Education
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__back card">
              <img src={carRear} className="car-nav__image rear-view" />
              <Link to="/experience" className="car-nav__link car-nav__link-exp">
                Experience
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__screen card">
              <img src={infotainment} className="car-nav__image screen-view" />
              <Link to="/contact" className="car-nav__link car-nav__link-contact">
                Contact
              </Link>
            </SwiperSlide> 
          </Swiper>

          {/* add ternary operator for which screen to show based on screen width or use scss */}
          {/* <TabletScreen />
          <MobileScreen /> */}
        </div>
      </div>
    </section>
  );
}

export default Content;
