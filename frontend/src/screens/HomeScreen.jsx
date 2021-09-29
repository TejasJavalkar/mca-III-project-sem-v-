import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Row, Col, Container } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../components/sharing/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} md={3}>
                <ProductScreen product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
