import React from "react";
import { Badge, Button, Navbar,Container,Nav } from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function NavbarApp(props) {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>

          <Navbar.Brand className="navbar-brand">
            <img src="/images/souqAmazon-logo-v2.png" alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="active">Home</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/about">About us</Link>
            </Nav>
            <Nav>
              <Link to="/shoppingCart" variant="warning"  className="btn btn-warning text-dark my-3"><FaCartPlus className="text-bold" />  Go To Cart{" "}
                <Badge bg="info">{props.cartCount}</Badge></Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  );
}
