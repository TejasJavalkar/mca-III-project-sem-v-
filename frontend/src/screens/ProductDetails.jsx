import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "../components/Rating";

import { Link } from "react-router-dom";

import { listProductDetails } from "../actions/productActions";

import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  ListGroupItem,
  Container,
  Breadcrumb,
} from "react-bootstrap";
import Loader from "../components/sharing/Loader";

const ProductDetails = ({ history, match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const imagesize = { height: "400px", width: "400px" };

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

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
                    {" "}
                    <Row>
                      <Col className="mt-5">
                        <Button
                          className="w-75 rounded-0"
                          style={{ fontSize: "17px" }}
                        >
                          Add to Cart
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="mt-5">
                        <Button
                          variant="warning"
                          className="w-75 rounded-0"
                          style={{ fontSize: "17px" }}
                        >
                          Purchase
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
