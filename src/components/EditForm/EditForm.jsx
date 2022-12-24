import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditForm = ({ oneProduct, getOneProduct, updateProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setPrice(oneProduct.price);
      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleValues() {
    const editedProduct = {
      title,
      price,
      image,
      id: Date.now(),
    };

    updateProduct(params.id, editedProduct);
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
      <button
        onClick={() => {
          handleValues();
          navigate("/");
        }}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditForm;
