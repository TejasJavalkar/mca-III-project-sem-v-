import React from "react";
import { Col, Container, Card, Row } from "react-bootstrap";
const UpdateContainer = ({ children }) => {
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
                Edit Profile <br />
              </p>
            </Col>
            <Col md={6}>
              {" "}
              <Card.Body className="mt-5  align-item-center">
                {children}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default UpdateContainer;
