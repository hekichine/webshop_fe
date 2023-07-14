import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./MasonryProduct.scss";

const MasonryProduct = () => {
  const filterItem = (con: string) => {
    console.log(con);
  };

  return (
    <>
      <section className="masonry-product">
        <div className="section-inner">
          <Container>
            <Row>
              <Col>
                <div className="head d-flex justify-content-md-between justify-content-center">
                  <h3 className="heading">Popular Products</h3>
                  <ul className="d-flex ">
                    <li>
                      <button
                        className="btn-link btn-filter"
                        onClick={() => filterItem("All")}
                      >
                        All
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link btn-filter"
                        onClick={() => filterItem("Featured")}
                      >
                        Featured
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link btn-filter"
                        onClick={() => filterItem("Popular")}
                      >
                        Popular
                      </button>
                    </li>
                    <li>
                      <button
                        className="btn-link btn-filter"
                        onClick={() => filterItem("New")}
                      >
                        New added
                      </button>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row></Row>
          </Container>
        </div>
      </section>
    </>
  );
};
const data: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export default MasonryProduct;
