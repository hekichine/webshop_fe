import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./MasonryProduct.scss";

import ProductItem from "../../Common/Elements/ProductItem/ProductItem";
import { sampleProducts } from "../../data";

const MasonryProduct = () => {
  const [currentTabs, setCurrentTabs] = useState<number>(1);

  const filterItem = (id: number) => {
    setCurrentTabs(id);
  };

  return (
    <>
      <section className="masonry-product">
        <div className="section-inner">
          <Container>
            <Row>
              <Col>
                <div className="head d-flex justify-content-md-between justify-content-cente align-items-center">
                  <h3 className="heading">Popular Products</h3>
                  <ul className="d-flex">
                    {dataTabs.map((el) => {
                      return (
                        <>
                          <li key={el.id}>
                            <button
                              className="btn-link btn-filter"
                              onClick={() => filterItem(el.id)}
                              data-active={currentTabs === el.id}
                            >
                              {el.title}
                            </button>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 row-cols-2 row-cols-md-3 gy-3 gy-md-4">
              {sampleProducts.map((el) => {
                return (
                  <Col>
                    <ProductItem {...el} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
const data: number[] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const dataTabs: { id: number; title: string }[] = [
  {
    id: 1,
    title: "All",
  },
  {
    id: 2,
    title: "Featured",
  },
  {
    id: 3,
    title: "Popular",
  },
  {
    id: 4,
    title: "New added",
  },
];
export default MasonryProduct;
