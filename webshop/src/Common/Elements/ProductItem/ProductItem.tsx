import React, { useState } from "react";

import "./ProductItem.scss";
import { Link } from "react-router-dom";

import CurrencyFormat from "react-currency-format";

import { PiShuffleAngular } from "react-icons/pi";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import AddToCart from "../Button/AddToCart";
import { Product } from "../../../Types/Product";

const ProductItem = (product: Product) => {
  return (
    <>
      <div className="product-item">
        <div className="product-inner">
          <div className="pr-thumb">
            <Link to={`/product-detail/${product.id}`} className="d-flex">
              <img
                className="default-img"
                src={product.images[0].img}
                alt={product.name}
              />
              <img
                className="hover-img"
                src={product.images[1].img}
                alt={product.name}
              />
            </Link>
            <div className="pr-action">
              <Link
                to={"/"}
                className=" action-btn hover-up"
                aria-label="Quick view"
              >
                <BsEye />
              </Link>
              <Link
                to={"/"}
                className=" action-btn hover-up"
                aria-label="Add to wishlist"
              >
                <AiOutlineHeart />
              </Link>
              <Link
                to={"/"}
                className=" action-btn hover-up"
                aria-label="Compare"
              >
                <PiShuffleAngular />
              </Link>
            </div>
            <div className="pr-badges pr-badges-position pr-badges-mrg">
              {product.badge.hot ? (
                <>
                  <span className="hot">hot</span>
                </>
              ) : (
                <></>
              )}
              {product.sale > 0 ? (
                <>
                  <span className="sale">sale</span>
                </>
              ) : (
                <></>
              )}
              {product.badge.new ? (
                <>
                  <span className="new">new</span>
                </>
              ) : (
                <></>
              )}
              {product.sale > 0 ? (
                <>
                  <span className="hot">{product.sale}%</span>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="pr-content-wrap">
            <div className="pr-category">
              <Link to={"/products"}>{product.category}</Link>
            </div>
            <h2 className="pr-title">
              <Link to={"/"}>{product.name}</Link>
            </h2>
            <div className="pr-rate-cover">
              <div
                className="pr-rate d-inline-block"
                style={{ backgroundImage: `url('/assets/rating-stars.png')` }}
              >
                <div
                  className="pr-rating"
                  style={{
                    width: `${product.rating * 20}%`,
                    backgroundImage: `url('/assets/rating-stars.png')`,
                  }}
                ></div>
              </div>
              <span className="text-muted">({product.numReview})</span>
            </div>
            <div className="pr-vendor">
              <span className="text-muted">
                By
                <Link to={"/"}>{product.vendor}</Link>
              </span>
            </div>
            <div className="pr-card-bottom">
              <div className="pr-price">
                {product.sale > 0 ? (
                  <>
                    <CurrencyFormat
                      value={
                        product.price - (product.price * product.sale) / 100
                      }
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />

                    <CurrencyFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                      className="text-muted cost"
                    />
                  </>
                ) : (
                  <CurrencyFormat
                    value={product.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                )}
              </div>
              <div className="pr-atc">
                <AddToCart {...product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
