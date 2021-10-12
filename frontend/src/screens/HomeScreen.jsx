import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, searchProductDetails } from "../actions/productActions";
import { Row, Col, Container, Form, InputGroup } from "react-bootstrap";
import ProductScreen from "./ProductScreen";
import Loader from "../components/sharing/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productSearch = useSelector((state) => state.productSearch);
  const { finds } = productSearch;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [searchstring, setSearchstring] = useState();
  const [fetched, setFetched] = useState(false);

  const searchRef = useRef();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const input = {
    border: "none",
    height: "45px",
    paddingLeft: "60px",
  };

  const searchHandler = async (e) => {
    if (searchRef.current.value.trim().length) {
      e.preventDefault();
      setFetched(true);
      dispatch(searchProductDetails(searchRef.current.value));
    } else {
      return setFetched(false);
    }
  };

  return (
    <>
      <Container fluid>
        {loading ? (
          <Loader />
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <Form className="d-flex justify-content-end">
              <InputGroup
                className=" text-center "
                style={{
                  width: "350px",
                  border: "none",
                  borderBottom: "1px solid black",
                }}
              >
                <Form.Control
                  placeholder="Search For..."
                  className="shadow-none "
                  onChange={(e) => setSearchstring(e.target.value)}
                  value={searchstring}
                  ref={searchRef}
                  style={input}
                />
                <InputGroup.Text
                  id="basic-addon1"
                  className=" p-2"
                  style={{
                    zIndex: 2,
                    position: "relative",
                    right: "5px",
                    border: "none",
                    width: "40px",
                    paddingLeft: "10px",
                    alignText: "center",
                    backgroundColor: "transparent",
                  }}
                  onClick={searchHandler}
                >
                  <i className="fas fa-search"></i>
                </InputGroup.Text>
              </InputGroup>
            </Form>

            {fetched ? (
              <Row>
                {finds.map((product) => (
                  <Col key={product._id} md={3}>
                    <ProductScreen product={product} />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row>
                {products.map((product) => (
                  <Col key={product._id} md={3}>
                    <ProductScreen product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
