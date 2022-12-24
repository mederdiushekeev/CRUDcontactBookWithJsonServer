import React, { useState } from "react";

const AddForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleValues() {
    const newProduct = {
      title,
      price,
      image,
      id: Date.now(),
    };
    addProduct(newProduct);

    setTitle("");
    setPrice("");
    setImage("");
  }

  return (
    <div className="container">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
      />
      <input
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="image"
        type="text"
      />
      <button onClick={handleValues}>Add Product</button>
    </div>
  );
};

export default AddForm;
