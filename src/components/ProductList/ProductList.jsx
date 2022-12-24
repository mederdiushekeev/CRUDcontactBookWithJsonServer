import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products, getProducts, deleteProduct }) => {
  useEffect(() => {
    getProducts();
  }, []); // массив зависимости , чтобы функция отработала 1 раз

  const navigate = useNavigate();

  return (
    <div className="container d-flex justify-content-between flex-wrap">
      {products.map((item) => (
        <Card className="mt-5" key={item.id} style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Button
              onClick={() => deleteProduct(item.id)}
              className="btn btn-danger"
              variant="primary"
            >
              DELETE
            </Button>
            <Button
              onClick={() => navigate(`/details/${item.id}`)}
              className="btn btn-warning"
              variant="primary"
            >
              DETAILS
            </Button>
            <Button
              onClick={() => navigate(`/edit/${item.id}`)}
              className="btn btn-primary"
              variant="primary"
            >
              EDIT
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
