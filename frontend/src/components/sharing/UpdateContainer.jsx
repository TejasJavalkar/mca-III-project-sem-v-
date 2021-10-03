import React from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
const UpdateContainer = ({ children }) => {
  return (
    <>
      <Container className="mt-5">
        <Card className="border-0 shadow-lg  justify-content-center">
          <Row>
            {" "}
            <Col className=" shadow-none text-center p-2" md={6}>
              <p
                style={{
                  fontSize: "29px",
                }}
                className="text-dark"
              >
                ShoppingCs.Com
              </p>

              <p>
                Edit Profile <br />
              </p>
            </Col>
            <Col md={6}>
              {" "}
              <Card.Body className="mt-5">{children}</Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default UpdateContainer;
