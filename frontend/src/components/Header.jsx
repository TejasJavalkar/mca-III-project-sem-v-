import React, { useState, useRef } from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
  NavDropdown,
  Dropdown,
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
    margin: "10px",
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
      <Navbar bg="dark" expand="sm" sticky-top="true" className="">
        <Container>
          <Navbar.Brand className="text-light p-2" style={{ fontSize: "18px" }}>
            ShoppingCs
          </Navbar.Brand>
          <Navbar.Toggle
            style={{
              backgroundColor: "white",
              height: "40px",
              width: "50px",
            }}
            aria-controls="basic-navbar-nav"
            className=" btn btn-outline-danger rounded border border-danger"
          />
          <Navbar.Collapse id="basic-navbar-nav text-end">
            <Nav className="text-end ml-auto p-2">
              <LinkContainer exact to="/" style={navitem} className="pr-5">
                <Nav.Link>
                  <i className="fas fa-home"></i> &nbsp;Home
                </Nav.Link>
              </LinkContainer>
              <Nav.Link style={navitem} onClick={openHandler} exact>
                <i className="fas fa-search"></i> &nbsp;Search
              </Nav.Link>

              <LinkContainer
                exact
                to="/cart"
                style={navitem}
                activeStyle={{ color: "white", border: "1px solid #3399f3" }}
                className="pr-5 text-end"
              >
                <Nav.Link as="div">
                  <i
                    style={{
                      fontSize: "23px",

                      zIndex: -1,
                    }}
                    class="fas fa-shopping-cart"
                  ></i>
                  <label
                    className="ml-4 text-light text-center "
                    style={{
                      width: "20px",
                      position: "relative",
                      top: "-15px",
                      left: "-15px",
                      backgroundColor: "indianred",
                      borderRadius: "30px",
                    }}
                  >
                    {count}
                  </label>
                  <span style={{ marginLeft: "-12px" }}>Cart</span>
                </Nav.Link>
              </LinkContainer>
              <Nav.Link style={navitem} className="mt-3">
                {" "}
                {userInfo ? (
                  <NavDropdown
                    id="nav-dropdown"
                    as="nav-item"
                    className="border-0 shadow-none mt-5  rounded-0"
                    title={<b clssName="text-light">{userInfo.firstName}</b>}
                  >
                    <div className="text-center dropdown-item">
                      <LinkContainer
                        to="/profile"
                        className="text-dark text-center"
                      >
                        <NavDropdown.Item
                          className="rounded-0"
                          style={{ fontWeight: "bolder" }}
                        >
                          My Profile&nbsp;&nbsp;
                          <span className="fas fa-user-circle"></span>
                        </NavDropdown.Item>
                      </LinkContainer>
                      <Dropdown.Divider />
                      <LinkContainer
                        to="/order"
                        className="text-dark text-center"
                      >
                        <NavDropdown.Item>
                          My Order&nbsp;&nbsp;&nbsp;
                          <span className="fas fa-user-circle"></span>
                        </NavDropdown.Item>
                      </LinkContainer>
                      <Dropdown.Divider />
                      <NavDropdown.Item
                        as="button"
                        className="text-center"
                        onClick={logoutHandler}
                      >
                        Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="fas fa-power-off"></span>
                      </NavDropdown.Item>
                    </div>
                  </NavDropdown>
                ) : (
                  <LinkContainer
                    as="nav-link"
                    smooth
                    to="/login"
                    style={navitem}
                    activeStyle={{
                      color: "white",
                      border: "1px solid #3399f3",
                    }}
                  >
                    <span>
                      <i class="fas fa-sign-in-alt"></i>&nbsp; Sing-In
                    </span>
                  </LinkContainer>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show ? (
        <>
          {" "}
          <Nav className=" ">
            <Nav.Link className="ml-auto" onClick={closeHandler}>
              <i className="fas fa-times"></i>
            </Nav.Link>
          </Nav>
          <Nav className=" m-auto w-75">
            <InputGroup className="">
              <Form.Control
                type="search"
                style={input}
                placeholder="Search For Shirts,Pants,Brands...."
                aria-label="Username"
                aria-describedby="basic-addon1"
                className="shadow-none rounded "
                value={searchString}
                ref={searchString1}
                onChange={(e) => {
                  setSearchString(e.target.value);
                }}
              />
              <p
                as="button"
                className="btn  border-1 shadow-none"
                onClick={searchHandler}
                style={{
                  width: "60px",
                  height: "45px",
                  padding: "10px",
                  zIndex: "1",
                  borderBottom: "1px solid #3399f3",
                }}
              >
                <i className="fas fa-search f-2x"></i>
              </p>
            </InputGroup>
          </Nav>
        </>
      ) : null}
    </>
  );
};

export default Header;
