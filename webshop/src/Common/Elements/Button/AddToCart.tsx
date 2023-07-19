import React from "react";
import { BsCart3 } from "react-icons/bs";
import "./atc.scss";

const AddToCart = (props: any) => {
  const handleAddToCart = () => {
    console.log(1);
  };
  return (
    <>
      <div className="atc-btn">
        <button onClick={() => handleAddToCart()}>
          <BsCart3 />
          Add
        </button>
      </div>
    </>
  );
};

export default AddToCart;
