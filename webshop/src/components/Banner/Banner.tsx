import { Col, Container, Row } from "react-bootstrap";
import BannerItem from "../../Common/Elements/Banner/BannerItem";
import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <Container>
        <Row className="gx-3 gy-3 justify-content-center">
          {data.map((el) => {
            return (
              <Col md={6} xl={4} key={el.title}>
                <BannerItem title={el.title} image_url={el.image_url} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

const data: { title: string; image_url: string }[] = [
  {
    title: "Everyday Fresh & \n Clean with Our\n Products",
    image_url: "../../../public/banner-1.png",
  },
  {
    title: "Make your Breakfast\n Healthy and Easy",
    image_url: "../../../public/banner-2.png",
  },
  {
    title: "The best Organic \n Products Online",
    image_url: "../../../public/banner-3.png",
  },
];
export default Banner;
