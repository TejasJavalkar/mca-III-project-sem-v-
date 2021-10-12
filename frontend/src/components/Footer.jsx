import React from "react";
import { Col, Container, Row, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Container className="bg-dark" fluid>
        <div style={{ borderBottom: "2px solid white" }}></div>
        <Row>
          <Col className="p-2" md={3} sm={2}>
            <h1 className="text-light text-center">Services</h1>
            <ul className="mt-1">
              <LinkContainer to="/" className="text-light text-center">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-light text-center" to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-light text-center" to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </ul>
          </Col>
          <Col className="p-2" md={3} sm={2}>
            {" "}
            <h1 className="text-light text-center">Links</h1>
            <ul className="mt-1">
              <LinkContainer to="/" className=" text-center text-light">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-light text-center" to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-light text-center" to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </ul>
          </Col>
          <Col className="p-2" md={3} sm={1}>
            <h1 className="text-light text-center">Links</h1>
            <ul className="mt-1">
              <LinkContainer to="/" className="text-light text-center">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-light text-center" to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer className="text-light text-center" to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </ul>
          </Col>
          <Col className="m-5">
            <h3 className="text-light text-center">ShoppingCs.Com</h3>
          </Col>
        </Row>
        <div style={{ borderBottom: "1px solid white" }}></div>
        <Row>
          <Col className="text-light text-center p-2">
            &copy; 2021 copyright :
            <Link
              to="/"
              style={{ fontSize: "15px" }}
              className="text-light text-decoration-none"
            >
              ShoppinCs.com
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
