import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Container } from "react-bootstrap";
import slideitem from "../../Common/Data/dataSlideshow";

import "./SlideShow.scss";

const Slideshow = () => {
  return (
    <>
      <Container>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="slideshow"
        >
          {slideitem.map((item, index): any => {
            return (
              <SwiperSlide className="slide-item">
                <div className="slide-inner position-relative">
                  <div className="slide-img">
                    <img src={`${item.img_url}`} alt="" />
                  </div>
                  <div className="slide-content d-flex justify-content-center align-items-center">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default Slideshow;
