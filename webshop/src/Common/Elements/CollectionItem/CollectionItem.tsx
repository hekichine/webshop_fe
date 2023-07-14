import React from "react";

import { Image } from "react-bootstrap";
import "./CollectionItem.scss";
import { Link } from "react-router-dom";

import "./CollectionItem.scss";

interface collection {
  image_url: string;
  title: string;
  count: number;
  bg_color: string;
}

const CollectionItem = (props: collection) => {
  return (
    <>
      <div className="cls-item">
        <div
          className="cls-inner"
          style={{ backgroundColor: `${props.bg_color}` }}
        >
          <figure className="cls-img">
            <Link to="/">
              <Image src={props.image_url} alt={props.title} />
            </Link>
          </figure>
          <div className="cls-content">
            <h4 className="cls-title">
              <Link to={"/"}>{props.title}</Link>
            </h4>
            <p className="cls-count">{props.count} items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionItem;
