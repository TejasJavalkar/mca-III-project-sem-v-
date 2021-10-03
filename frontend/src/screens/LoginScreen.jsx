import React, { useState, useRef, useEffect } from "react";
import { Form, InputGroup, Button, Card, Row, Col } from "react-bootstrap";
import FormContainer from "../components/sharing/FormContainer";
import { Link } from "react-router-dom";
import Message from "../components/sharing/Message";
import Loader from "../components/sharing/Loader";
import { login } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";

const LoginScreen = ({ location, history }) => {
  // styling for input
  const input = {
    height: "45px",
  };
  // ref variable
  const em = useRef();
  const ps = useRef();
  // error state variable
  const [emerror, setEmerror] = useState({});
  const [pserror, setPserror] = useState({});
  // value state variable
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //validation or toggle password state variable
  const [showPassword, setShowPassword] = useState();
  const [isok, setIsok] = useState(false);
  // redirect location
  const redirect = location.search ? location.search.split("=")[1] : "/";
  // selector
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  // dispatch variable
  const dispatch = useDispatch();
  // togglepassword function
  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  // validation function
  const validation = () => {
    const emerror = {};
    const pserror = {};
    let isValid = true;
    var strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    if (!email.trim().length) {
      emerror.empty = "Email Is Required";
      isValid = false;
    }
    if (!pattern.test(email)) {
      emerror.reg = "Email is Invalid E.g:abc@gmail.com";
      isValid = false;
    }

    if (!password.trim().length) {
      pserror.empty = "Password is Empty";
      isValid = false;
    }
    if (!password.trim().length) {
      pserror.empty = "Password is Empty";
      isValid = false;
    }
    if (!strongRegex.test(password)) {
      pserror.regular = "Invalid Password Enter ttHH12@#";
      isValid = false;
    }
    setEmerror(emerror);
    setPserror(pserror);
    return isValid;
  };
  // save function

  const loginHandler = (e) => {
    const isValid = validation();
    e.preventDefault();
    if (isValid) {
      dispatch(login(email, password));
      setIsok(true);
    }
  };
  // useEffect Hook
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const value = "Sign-In";
  return (
    <>
      <FormContainer style={{ border: "1px solid black" }}>
        {loading && <Loader />}
        {isok ? <Message variant="danger">{error}</Message> : null}
        <Form className="">
          <h2 className="mt-5 text-start">{value}</h2>
          <div className="text-center">
            <InputGroup className="mt-3" style={input}>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                ref={em}
                onPaste={(e) => {
                  e.preventDefault();
                  return false;
                }}
                onCopy={(e) => {
                  e.preventDefault();
                  return false;
                }}
                style={{ fontSize: "20px" }}
                className="shadow-none rounded-0"
              />
            </InputGroup>{" "}
          </div>
          {Object.keys(emerror).map((key) => {
            return (
              <Message variant="danger" className="text-danger text-center">
                {emerror[key]}
              </Message>
            );
          })}
          <InputGroup className="mt-4 ">
            <Form.Control
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontSize: "20px" }}
              className="shadow-none rounded-0"
              placeholder="Password"
              ref={ps}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              onCopy={(e) => {
                e.preventDefault();
                return false;
              }}
            />
            <Button
              className="shadow-none rounded-0"
              style={{ width: "50px" }}
              onClick={togglePassword}
            >
              {showPassword ? (
                <i className="fa fa-eye"></i>
              ) : (
                <i className="fa fa-eye-slash"></i>
              )}
            </Button>
          </InputGroup>
          {Object.keys(pserror).map((key) => {
            return (
              <Message variant="danger" className="text-danger text-center">
                {pserror[key]}
              </Message>
            );
          })}
          <div className="mt-5 text-end">
            <Button
              style={{ height: "45px", fontSize: "16px", fontWeight: "bolder" }}
              className="shadow-none w-25 text-center text-dark btn btn-outline-info"
              onClick={loginHandler}
            >
              Sign-In&nbsp;&nbsp;&nbsp;
              <i className=" text-end fas fa-sign-in-alt"></i>
            </Button>
          </div>

          <Card className="mt-5 border-0 ">
            <Row>
              <Col className="text-end">
                <div>Not a Member..?</div>
              </Col>
              <Col className="text-start">
                <Link
                  className="text-decoration-none"
                  style={{ fontWeight: "bolder", fontSize: "14px" }}
                  to={redirect ? `register?redirect=${redirect}` : "/register"}
                >
                  Join Us
                </Link>
              </Col>
            </Row>
          </Card>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginScreen;
