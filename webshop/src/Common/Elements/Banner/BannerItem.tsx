import React from "react";
import { Image } from "react-bootstrap";

import "./bannerItem.scss";
import { Link } from "react-router-dom";
const BannerItem = (props: { title: string; image_url: string }) => {
  return (
    <>
      <div className="bn-item">
        <div className="bn-inner">
          <figure>
            <Image src={props.image_url} alt={props.title} />
          </figure>
          <div className="bn-content">
            <h3 className="title">{props.title}</h3>
            <Link
              to={"/"}
              className="bn-btn btn d-inline-flex  justify-content-between"
            >
              Shop now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerItem;
