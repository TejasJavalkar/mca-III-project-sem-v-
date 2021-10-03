import React, { useState, useRef } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";

const Header = ({ count }) => {
  const [searchString, setSearchString] = useState();
  const [show, setShow] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const navitem = {
    fontSize: "16px",
    marginRight: "20px",
    color: "#3399f3",
  };

  const searchString1 = useRef();

  const input = {
    paddingLeft: "40px",
    height: "45px",
    fontSize: "16px",
    border: "none",
    borderBottom: "1px solid #3399f3",
    color: "black",
    marginRight: "-5px",
    backgroundColor: "dark",
  };

  const openHandler = () => {
    setShow(true);
  };

  const closeHandler = () => {
    setShow(false);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    alert(`${searchString1.current.value}`);
  };

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <Navbar bg="dark" expand="lg" className="p-2">
        <Container>
          <LinkContainer to="/" className="text-light text-decoration-none">
            <Navbar.Brand>ShoppingCs</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="mt-3">
            <Nav className="ml-auto">
              {userInfo ? (
                <Dropdown style={{ marginRight: "10px" }}>
                  <Dropdown.Toggle
                    variant=" text-light shadow-none"
                    id="dropdown-basic"
                    style={{ fontWeight: "bold" }}
                  >
                    {userInfo.firstName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="mt-2 dropdown-menu-right">
                    <LinkContainer
                      to="/profile"
                      className="text-dark text-center"
                    >
                      <NavDropdown.Item className="p-0">
                        My Profile&nbsp;&nbsp;
                        <span className="fas fa-user-circle"></span>
                      </NavDropdown.Item>
                    </LinkContainer>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item>
                      <LinkContainer
                        to="/order"
                        className="text-dark text-center"
                      >
                        <NavDropdown.Item>
                          My Order&nbsp;&nbsp;&nbsp;
                          <span className="fas fa-user-circle"></span>
                        </NavDropdown.Item>
                      </LinkContainer>
                    </Dropdown.Item>
                    <div className="dropdown-divider"></div>
                    <Dropdown.Item
                      as="button"
                      onClick={logoutHandler}
                      className="text-center"
                    >
                      Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="fas fa-power-off"></span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <LinkContainer
                  to="/login"
                  style={navitem}
                  activeStyle={{ color: "white", border: "1px solid #3399f3" }}
                >
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                    &nbsp; singin
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to="/" style={navitem} className="text-end">
                <Nav.Link>
                  <i style={{ fontSize: "22px" }} className="fas fa-home"></i>
                </Nav.Link>
              </LinkContainer>
              <Nav.Link
                style={navitem}
                className="text-end text-decoration-none"
                onClick={openHandler}
              >
                <i style={{ fontSize: "22px" }} className="fas fa-search"></i>
              </Nav.Link>

              <LinkContainer to="/cart" style={navitem} className="text-end">
                <Nav.Link className="pl-1">
                  <i
                    style={{ fontSize: "24px", marginRight: "-20px" }}
                    className="fas fa-shopping-cart"
                  ></i>
                  <label
                    className="text-center"
                    style={{
                      position: "relative",
                      top: "-14px",
                      left: "10px",
                      width: "20px",
                      backgroundColor: "indianred",
                      borderRadius: "60px",
                    }}
                  >
                    {count}
                  </label>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show ? (
        <>
          <Container className="p-3">
            <p
              className="text-end "
              style={{ cursor: "pointer" }}
              onClick={closeHandler}
            >
              <i class="fas fa-times-circle" style={{ fontSize: "22px" }}></i>
            </p>
            <Form className="d-flex justify-content-center">
              <InputGroup className=" text-center w-75">
                <Form.Control
                  placeholder="Search For Brand,Television,Tv,Camera...etc"
                  className="shadow-none w-50"
                  style={input}
                  ref={searchString1}
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
                <Button
                  style={{ width: "60px" }}
                  className="shadow-none  rounded-0"
                  onClick={searchHandler}
                >
                  <i className="fas fa-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Container>
        </>
      ) : null}
    </>
  );
};

export default Header;
