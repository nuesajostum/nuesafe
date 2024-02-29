import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import myImg from "../../Assets/Amos Img.png";

// Import Swiper styles


import "./home.css";

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Cardslider() {
  return (
    <div className='slidebody'>
      <div className="slide-title" data-aos="fade-down">
          <h2>2023-2024 Executive Council</h2>
        </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        freeMode={true}
        color='red'
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
            0: {
                slidesPerView: 1,
            },

            520: {
                slidesPerView: 2,
            },

            950: {
                slidesPerView: 3,
            },
        }}
        modules={[FreeMode, Pagination]}
        className="slide-container"
      >

<section>
       
        <div className="slide-container" >
        <div className='slide-wrapper'>
        <SwiperSlide>
            <div className="cardS" data-aos="zoom-in-up">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={myImg} alt="img" className="card-img" />
                  </div>
                </div>

                <div className="card-content">
              <h6>Comr.</h6>
              <h2>TERFA AMOS TARGEMA </h2>
              <h3>Post held : <span>Executive President</span></h3>
              <h3>Department : <span>ELECTRICAL AND ELECTRONICS ENGINEERING</span></h3>
              <h3>Phone Number : <span>090-5047-5867</span></h3>
                </div>
              </div></SwiperSlide>

              <SwiperSlide><div className="cardS" data-aos="zoom-in-up">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={myImg} alt="img" className="card-img" />
                  </div>
                </div>

                <div className="card-content">
                <h6>Comr.</h6>
              <h2>Awulu Oloche</h2>
              <h3>Post held : <span>General Secretary</span></h3>
              <h3>Department : <span>AGRIC & ENVIRONMENTAL ENGINEERING</span></h3>
              <h3>Phone Number : <span>081-5027-4891</span></h3>
                </div>
              </div></SwiperSlide>

              <SwiperSlide><div className="cardS" data-aos="zoom-in-up">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={myImg} alt="img" className="card-img" />
                  </div>
                </div>

                <div className="card-content">
                <h6>Comr.</h6>
              <h2>Bem Demesugh Emmanuel </h2>
              <h3>Post held : <span>Financial Secretary</span></h3>
              <h3>Department : <span>ELECTRICAL AND ELECTRONICS ENGINEERING</span></h3>
              <h3>Phone Number : <span>081-4475-3330</span></h3>
                </div>
              </div></SwiperSlide>

              <SwiperSlide><div className="cardS" data-aos="zoom-in-up">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={myImg} alt="img" className="card-img" />
                  </div>
                </div>

                <div className="card-content">
                <h6>Comr.</h6>
              <h2>Adole Shimawan Joshua </h2>
              <h3>Post held : <span>Treasurer</span></h3>
              <h3>Department : <span>MECHANICAL <br/>ENGINEERING</span></h3>
              <h3>Phone Number : <span>081-5123-0373</span></h3>
                </div>
              </div></SwiperSlide>

              <SwiperSlide><div className="cardS" data-aos="zoom-in-up">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={myImg} alt="img" className="card-img" />
                  </div>
                </div>

                <div className="card-content">
                <h6>Comr.</h6>
              <h2>Orbunde Dooteramo Daniel </h2>
              <h3>Post held : <span>Public Relations Officer</span></h3>
              <h3>Department : <span>MECHANICAL <br/> ENGINEERING</span></h3>
              <h3>Phone Number : <span>081-2250-3975</span></h3>
                </div>
              </div>
              
              </SwiperSlide>

              <SwiperSlide><div className="cardS" data-aos="zoom-in-up">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={myImg} alt="img" className="card-img" />
                  </div>
                </div>

                <div className="card-content">
                <h6>Comr.</h6>
              <h2>lubem-TeghTegh Aondofa </h2>
              <h3>Post held : <span>Director of Socials</span></h3>
              <h3>Department : <span>ELECTRICAL AND ELECTRONICS ENGINEERING</span></h3>
              <h3>Phone Number : <span>070-8145-8568</span></h3>
                </div>
              </div>
              
              </SwiperSlide>

        </div>
        </div>
        </section>
        
      </Swiper>
    </div>
  );
}
