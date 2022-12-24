import React, { useEffect } from "react";

const Details = ({ oneProduct, getOneProduct }) => {
  useEffect(() => {
    getOneProduct();
  }, []);
  return (
    <div>
      <img src={oneProduct.image} />
      <h2>{oneProduct.title}</h2>
    </div>
  );
};

export default Details;
