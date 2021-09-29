import React, { useState, useRef, useEffect } from "react";
import { Form, InputGroup, Card, Row, Col, Button } from "react-bootstrap";
import FormContainer from "../components/sharing/FormContainer";
import { Link } from "react-router-dom";
import Message from "../components/sharing/Message";
import Loader from "../components/sharing/Loader";
import { register } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
const RegisterScreen = ({ location, history }) => {
  // Ref variable
  const fn = useRef();
  const ln = useRef();
  const em = useRef();
  const ps = useRef();
  const cps = useRef();
  //error state variable
  const [fnerror, setFn] = useState({});
  const [lnerror, setLn] = useState({});
  const [emerror, setEm] = useState({});
  const [pserror, setPs] = useState({});
  const [cpserror, setCps] = useState({});
  const [pscpserror, setPsCps] = useState({});
  // value state variable
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //validation or password toggle variable
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  // labe value
  const value = "Sign-Up";
  // style for InputGroup;
  const input = {
    height: "45px",
  };
  // toggle password Functions
  const togglePassword = () => {
    setShowPassword(showPassword ? false : true);
  };
  const togglePassword1 = () => {
    setShowPassword1(showPassword1 ? false : true);
  };
  // form validation function
  const formValidation = () => {
    const fnerror = {};
    const lnerror = {};
    const emerror = {};
    const pserror = {};
    const cpserror = {};
    const pscpserror = {};
    let isValid = true;

    // const namereg = new RegExp("/^(?:[A-Z]+|d+)$/");
    if (!firstName.trim().length) {
      fnerror.empty = "First Name is Required";
      isValid = false;
      fn.current.focus();
    }

    if (!lastName.trim().length) {
      lnerror.empty = "Last Name is Required";
      isValid = false;
      ln.current.focus();
    }

    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    if (!email.trim().length) {
      emerror.empty = "Email is Required";
      // eslint-disable-next-line no-unused-vars
      em.current.focus();
      isValid = false;
    }

    if (!pattern.test(email)) {
      emerror.reg = "Invalid Email E.g: abc@gmail.com";
      isValid = false;
      em.current.focus();
    }

    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    if (!password.trim().length) {
      pserror.empty = "Password is Empty";
      isValid = false;
      ps.current.focus();
    }
    if (!strongRegex.test(password)) {
      pserror.reg = "Invalid Password Enter ttHH12@#";
      isValid = false;
      ps.current.focus();
    }

    if (!confirmPassword.trim().length) {
      cpserror.empty = "Password is Empty";
      isValid = false;
      cps.current.focus();
    }
    if (!strongRegex.test(confirmPassword)) {
      cpserror.reg = "Invalid Password Enter ttHH12@#";
      isValid = false;
      cps.current.focus();
    }

    if (password !== confirmPassword) {
      pscpserror.wrong = "Missmatch credentials";
      isValid = false;
      ps.current.focus();
    }

    setFn(fnerror);
    setLn(lnerror);
    setEm(emerror);
    setPs(pserror);
    setCps(cpserror);
    setPsCps(pscpserror);
    return isValid;
  };
  // useEffect to save the value
  const redirect = location.search ? location.search.split("=")[1] : "/login";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  // save handler for register
  const saveHandler = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      dispatch(register(firstName, lastName, email, password));
    }
  };
  return (
    <>
      <FormContainer>
        {loading && <Loader />}
        {Loader}
        <Form className="">
          <h2 className="text-start">{value}</h2>
          <Row>
            <Col>
              {" "}
              <InputGroup className="mt-3 " style={input}>
                <Form.Control
                  type="text"
                  value={firstName}
                  ref={fn}
                  onChange={(e) =>
                    setFirstName(e.target.value.toLocaleUpperCase("Te"))
                  }
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  style={{ fontSize: "20px" }}
                  placeholder="First Name"
                  className="shadow-none rounded-0"
                />
              </InputGroup>
              {Object.keys(fnerror).map((key) => {
                return (
                  <Message variant="danger" className="text-danger text-center">
                    {fnerror[key]}
                  </Message>
                );
              })}
            </Col>
            <Col>
              {" "}
              <InputGroup className="mt-3" style={input}>
                <Form.Control
                  type="Email"
                  value={lastName}
                  ref={ln}
                  onChange={(e) =>
                    setLastName(e.target.value.toLocaleUpperCase("Te"))
                  }
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onCopy={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  className="shadow-none rounded-0"
                  placeholder="Last Name "
                  style={{ fontSize: "20px" }}
                />
              </InputGroup>
              {Object.keys(lnerror).map((key) => {
                return <Message variant="danger">{lnerror[key]}</Message>;
              })}
            </Col>
          </Row>
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
            </InputGroup>
            {Object.keys(emerror).map((key) => {
              return <Message variant="danger">{emerror[key]}</Message>;
            })}
          </div>
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
            return <Message variant="danger">{pserror[key]}</Message>;
          })}
          <InputGroup className="mt-4">
            <Form.Control
              type={showPassword1 ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ fontSize: "20px" }}
              className="shadow-none rounded-0"
              placeholder="Confirm Password"
              ref={cps}
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
              onClick={togglePassword1}
            >
              {showPassword1 ? (
                <i className="fa fa-eye"></i>
              ) : (
                <i className="fa fa-eye-slash"></i>
              )}
            </Button>
          </InputGroup>
          {Object.keys(cpserror).map((key) => {
            return <Message variant="danger">{cpserror[key]}</Message>;
          })}
          {Object.keys(pscpserror).map((key) => {
            return (
              <Message variant="warning" className="text-danger">
                {pscpserror[key]}
              </Message>
            );
          })}
          <div className="mt-5 text-end">
            <Button
              style={{ height: "45px", fontSize: "16px", fontWeight: "bolder" }}
              className="shadow-none btn btn-outline-info text-dark w-25 text-center rounded-0"
              onClick={saveHandler}
            >
              Sign-Up&nbsp;&nbsp;&nbsp;
              <i className=" text-end fas fa-sign-in-alt"></i>
            </Button>
          </div>
          <Card className="mt-4 border-0 ">
            <Row>
              <Col className="text-end">
                <div>Already a Member..?</div>
              </Col>
              <Col className="text-start">
                <Link
                  className="text-decoration-none"
                  to={redirect ? `login?redirect=${redirect}` : "/login"}
                  style={{ fontWeight: "bolder", fontSize: "14px" }}
                >
                  Sign-In
                </Link>
              </Col>
            </Row>
          </Card>
        </Form>
      </FormContainer>
    </>
  );
};

export default RegisterScreen;
