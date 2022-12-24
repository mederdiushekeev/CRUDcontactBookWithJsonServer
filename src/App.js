import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import axios from "axios";
import EditForm from "./components/EditForm/EditForm";
import Details from "./components/Details/Details";

const App = () => {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);

  const [oneProduct, setOneProduct] = useState(null);

  //! create (add)

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }

  //! read (show)

  async function getProducts() {
    const result = await axios.get(API);
    setProducts(result.data);
  }

  //! delete

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  //! get one product for edit

  async function getOneProduct(id) {
    let result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }

  //! update

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    // getProducts();
  }

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList
                deleteProduct={deleteProduct}
                getProducts={getProducts}
                products={products}
              />
            }
          />
          <Route path="/add" element={<AddForm addProduct={addProduct} />} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
          <Route
            path="/edit/:id"
            element={
              <EditForm
                getOneProduct={getOneProduct}
                oneProduct={oneProduct}
                updateProduct={updateProduct}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <Details getOneProduct={getOneProduct} oneProduct={oneProduct} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
