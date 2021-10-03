import React from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
import logimage from "../../loginbg.jpg";
const FormContainer = ({ children, value }) => {
  return (
    <>
      <Container>
        <Card className="border-0 shadow-lg  justify-content-center">
          <Row>
            {" "}
            <Col className=" shadow-none text-center p-2" md={6}>
              <p
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "60px",
                  fontSize: "29px",
                }}
                className="text-light"
              >
                ShoppingCs.Com
              </p>
              <p
                style={{ position: "absolute", top: "60px", left: "90px" }}
                className="text-light"
              >
                Welcome To ShoppingCs <br />
              </p>
              <Card.Img
                src={logimage}
                className="card-img-top"
                alt="..."
                style={{
                  width: "460px",
                  height: "500px",
                  objectFit: "fill",
                }}
                fluid
              />
            </Col>
            <Col md={6}>
              {" "}
              <Card.Body className="mt-5  ">{children}</Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default FormContainer;
