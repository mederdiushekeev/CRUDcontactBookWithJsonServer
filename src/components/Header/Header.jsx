import { useState } from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand
              className={
                location.pathname === "/"
                  ? "btn btn-warning"
                  : "btn btn-dark text-light"
              }
            >
              Home
            </Navbar.Brand>
          </Link>
          <Link to="/add">
            <Navbar.Brand
              className={
                location.pathname === "/add"
                  ? "btn btn-warning"
                  : "btn btn-dark text-light"
              }
            >
              Add Product
            </Navbar.Brand>
          </Link>

          <Link to="/contacts">
            <Navbar.Brand
              className={
                location.pathname === "/contacts"
                  ? "btn btn-warning"
                  : "btn btn-dark text-light"
              }
            >
              Contacts
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
