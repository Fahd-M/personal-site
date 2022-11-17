import "./Content.scss";

import carSideView from "../../assets/images/evo-car-side.png";
import carFront from "../../assets/images/evo-front.png";
import infotainment from "../../assets/images/infotainment-empty.jpg";
import carRear from "../../assets/images/evo-back-diagonal.png";
import carCorner from "../../assets/images/evo-front-diagonal.png";

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import "swiper/css/pagination";
import { Pagination } from "swiper";


function Content() {


  return (
    <section className="content">
      <div className="content__container">
        <div className="content__info">
          <div className="content__intro">
            <h1 className="content__title">Welcome</h1>
            <h2 className="home__subtitle">Click to learn more!</h2>
            <div className="car-nav__start">
              <Link to="/about" className="car-nav__button">Start</Link>
            </div>
          </div>

          <Swiper
            className="car-nav container mySwiper"
            spaceBetween={25}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            onSlideChange={()=> console.log('slide changed')}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 36,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 48,
              },
            }}
            
          >
            <SwiperSlide className="car-nav__front card">
              <img src={carFront} className="car-nav__image front-view" alt="Front of car"/>
              <Link to="/home" className="car-nav__link car-nav__link-home">
                Home
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__diagonal card">
              <img src={carCorner} className="car-nav__image diag-view" alt="Diagonal of car" />
              <Link to="/about" className="car-nav__link car-nav__link-about">
                About
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__side card">
              <img src={carSideView} className="car-nav__image side-view" alt="Side of car" />
              <Link to="/education" className="car-nav__link car-nav__link-edu">
                Education
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__back card">
              <img src={carRear} className="car-nav__image rear-view" alt="Rear of car"/>
              <Link to="/experience" className="car-nav__link car-nav__link-exp">
                Experience
              </Link>
            </SwiperSlide>

            <SwiperSlide className="car-nav__screen card">
              <img src={infotainment} className="car-nav__image screen-view" alt="Infotainment of car" />
              <Link to="/contact" className="car-nav__link car-nav__link-contact">
                Contact
              </Link>
            </SwiperSlide> 
          </Swiper>

         
        </div>
      </div>
    </section>
  );
}

export default Content;
