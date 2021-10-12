import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { listCart } from "../actions/cartAction";

const CartScreen = ({ count }) => {
  const { cartItems } = useSelector((state) => state.cartItems);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //const id = userInfo._id;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCart());
  }, [dispatch, userInfo]);

  // 1998@tejas
  return (
    <>
      <Container fluid>
        <Row className="border-1">
          <Col md={6} className=" ml-auto text-end mt-3">
            <p style={{ fontSize: "15px" }}>
              User :{count}
              <b className="text-success" style={{ fontSize: "20px" }}>
                {userInfo.firstName} {userInfo.lastname}
              </b>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={10}>
            {cartItems.map((item, index) => (
              <Row className="mt-3 shadow-lg p-1" key={index}>
                <Col md={1} className="mt-5 p-4">
                  <Form.Check
                    value={item.product}
                    className="shadow-none border-0"
                    id="id"
                  />
                </Col>

                <Col md={2}>
                  <Link to={`/product/${item.product}`}>
                    <Image
                      src={item.imageUrl}
                      alt={userInfo.firstName}
                      rounded
                      fluid
                    />
                  </Link>
                </Col>
                <Col
                  md={4}
                  style={{ marginTop: "55px" }}
                  className="mt-5 text-end"
                >
                  <h3>{item.product_name}</h3>
                </Col>
                <Col md={2} className="m-auto" style={{ marginTop: "55px" }}>
                  <InputGroup>
                    <Button>
                      <i className="fas fa-minus"></i>
                    0</Button>
                    <Form.Control />
                    <Button>
                      <i className="fas fa-minus"></i>
                    </Button>
                  </InputGroup>
                </Col>
                <Col
                  md={2}
                  style={{ marginTop: "50px" }}
                  className="text-start"
                >
                  <p style={{ fontSize: "22px" }}>Price:{item.purchasePrice}</p>
                </Col>

                <Col
                  md={1}
                  className="text-center"
                  style={{ marginTop: "55px" }}
                >
                  <Button className=" m-0">
                    <i className="fas fa-trash-alt"></i>
                  </Button>
                </Col>
              </Row>
            ))}
          </Col>

          <Col md={2} className="shadow-sm"></Col>
        </Row>
      </Container>
    </>
  );
};

export default CartScreen;
