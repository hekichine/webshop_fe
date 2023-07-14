import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

import "./index.scss";
import CollectionItem from "../../Common/Elements/CollectionItem/CollectionItem";

const FeatureCategories = () => {
  return (
    <section className="categories">
      <div className="section-inner">
        <Container>
          <Row>
            <div className="head d-flex align-items-end mb-4 flex-wrap ">
              <h3 className="me-3 heading">Featured Categories</h3>
              <ul className="d-flex align-items-center">
                <li>
                  <Link to={"/shop?categories=cake-milk"}>Cake & Milk</Link>
                </li>
                <li>
                  <Link to={"/"}>Coffes & Teas</Link>
                </li>
                <li>
                  <Link to={"/"}>Pets Food</Link>
                </li>
                <li>
                  <Link to={"/"}>Vegetables</Link>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
        <div className="cte-list">
          <Container>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              className="categories row"
              slidesPerView={2}
              spaceBetween={20}
              breakpoints={{
                525: {
                  width: 525,
                  slidesPerView: 3,
                },
                768: {
                  width: 768,
                  slidesPerView: 4,
                },
                1024: { width: 1024, slidesPerView: 5 },
                1200: { width: 1200, slidesPerView: 6 },
                1366: { width: 1366, slidesPerView: 8 },
              }}
            >
              {data.map((el, index) => {
                return (
                  <SwiperSlide key={index}>
                    <CollectionItem
                      image_url="../../../public/assets/cat-12.png"
                      title="cls"
                      count={10}
                      bg_color="#FFFCEB"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Container>
        </div>
      </div>
    </section>
  );
};

const data: number[] = [
  1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

export default FeatureCategories;
