import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";

import { Link } from "react-router-dom";

import { listProductDetails } from "../actions/productActions";
import {} from "../actions/cartAction";

import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Container,
  Breadcrumb,
  Form,
} from "react-bootstrap";
import Loader from "../components/sharing/Loader";

const ProductDetails = ({ history, match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const imagesize = { height: "400px", width: "400px" };
  const [qty, setQty] = useState(1);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));

    setQty(1);
  }, [dispatch, match]);

  const manusHandler = () => {
    setQty(qty - 1);
    if (qty === 0) setQty(1);
  };

  const plusHandler = () => {
    if (product.countInStock === qty) {
      setMsg(`Total Available products ${product.countInStock}`);
    } else {
      setMsg("");
      setQty(qty + 1);
    }
  };

  const addtocartHandler = () => {
    //dispatch(getFromCart(String(userInfo._id)));
    //history.push(`/api/cart/${userInfo._id}?${qty}`);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        error
      ) : (
        <>
          <Container fluid>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/" className="btn text-decoration-none">
                  <i className="fas fa-home border border-rounded"></i>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="btn  text-decoration-none" active>
                Details
              </Breadcrumb.Item>
            </Breadcrumb>

            <Row className="m-3">
              <Col md={6} className="text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  style={imagesize}
                  fluid
                />
              </Col>
              <Col md={3}>
                <ListGroupItem className="border-0 text-end text-danger">
                  {product.countInStock <= 10 ? (
                    product.countInStock === 0 ? (
                      <p
                        className="text-danger blink_me"
                        style={{ fontSize: "15px" }}
                      >
                        Not Available
                      </p>
                    ) : (
                      <p
                        className="text-danger blink_me"
                        style={{ fontSize: "15px" }}
                      >
                        Hurry up Left Only ({product.countInStock})
                      </p>
                    )
                  ) : (
                    <p className="text-success" style={{ fontSize: "15px" }}>
                      Left ({product.countInStock})
                    </p>
                  )}
                </ListGroupItem>
                <ListGroup variant="flush" className="border-0 text-end mt-2">
                  <ListGroupItem>
                    <h3>{product.name}</h3>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 text-end mt-3">
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} Reviews`}
                    />
                  </ListGroupItem>
                  <ListGroupItem>
                    Price :{" "}
                    <span className="text-success">${product.price}</span>
                  </ListGroupItem>
                  <ListGroupItem className="text-end">
                    {product.description}
                  </ListGroupItem>
                </ListGroup>
                <ListGroupItem className="border-0 text-end mt-3">
                  {product.countInStock > 0 ? (
                    <p
                      className="text-success"
                      style={{
                        fontSize: "17px",
                      }}
                    >
                      In Stock....
                    </p>
                  ) : (
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "24px",
                      }}
                    >
                      Out of Stock....
                    </p>
                  )}
                </ListGroupItem>
              </Col>
              <Col md={3} className="mt-5 text-center">
                {product.countInStock > 0 ? (
                  <>
                    <Row>
                      <Col className=" mt-5 d-flex justify-content-center">
                        <Button onClick={manusHandler}>
                          <i className="fas fa-minus"></i>
                        </Button>
                        <Form.Control
                          value={qty}
                          className="text-center shadow-none rounded-0"
                          onChange={(e) => setQty(e.target.value)}
                          style={{
                            width: "100px",
                            border: "none",
                            borderBottom: "1px solid black",
                          }}
                          maxLength="1"
                          placeholder="Quantity"
                        ></Form.Control>
                        <Button onClick={plusHandler}>
                          <i className="fas fa-plus"></i>
                        </Button>
                        {msg}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mt-5">
                        <Button
                          className="w-75 rounded-0"
                          style={{ fontSize: "17px" }}
                          onClick={addtocartHandler}
                        >
                          Add to Cart
                        </Button>
                      </Col>
                    </Row>
                  </>
                ) : (
                  <Row>
                    <Col className="mt-5">
                      <Button className="w-75" style={{ fontSize: "15px" }}>
                        Notify Me
                      </Button>
                    </Col>
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default ProductDetails;
