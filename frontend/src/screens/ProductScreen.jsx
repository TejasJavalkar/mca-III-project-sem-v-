import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className=" mb-2 mt-4 rounded" size="lg">
        <Link to={`/product/${product._id}`} className="text-center">
          <Card.Img src={product.image} alt={product.name} />
        </Link>
        <Card.Body>
          <Link
            to={`/product/${product._id}`}
            className="text-decoration-none text-end"
          >
            <Card.Title as="div">
              <p
                style={{
                  fontSize: "16px",
                  wordSpacing: "0px",
                  letterSpacing: "0px",
                  color: "black",
                }}
              >
                {product.name}
              </p>
            </Card.Title>
          </Link>
          <div className="dropdown-divider"></div>
          <Card.Text as="div" className="mt-3 text-end">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <div className="text-end mt-3 ">
            Price : <span className="text-success">{product.price} &#36;</span>
          </div>
          <div className="dropdown-divider"></div>
          <div className="text-center mb-0">
            <Link
              className="text-decoration-none btn btn-outline-success"
              to={`/product/${product._id}`}
            >
              Shop Now
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
