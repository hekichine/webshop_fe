import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Container } from "react-bootstrap";
import slideitem from "../../Common/Data/dataSlideshow";

import "./SlideShow.scss";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

const Slideshow = () => {
  return (
    <>
      <Container>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          className="slideshow"
        >
          {slideitem.map((item, index): any => {
            return (
              <SwiperSlide className="slide-item" key={item.title}>
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
