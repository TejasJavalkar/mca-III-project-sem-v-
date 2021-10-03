import React, { useState, useEffect } from "react";

import { Form, Button, Card, InputGroup } from "react-bootstrap";

import {} from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/sharing/Message";
import Loader from "../components/sharing/Loader";
import UpdateContainer from "../components/sharing/UpdateContainer";
import { getUserDetails } from "../actions/userAction";
//import { listMyOrders } from "../actions/orderAction";

const ProfileScreen = ({ location, history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const input = {
    height: "45px",
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.firstName) {
        dispatch(getUserDetails("profile"));
      } else {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setEmail(user.email);
        setMobile(user.mobile);
      }
    }
  }, [history, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();

    //dispatch(updateUserDetials({ id: user._id, name, email, password }));
  };

  const inputgroup = {
    paddingLeft: "70px",
    fontSize: "20px",
  };

  return (
    <>
      {" "}
      <UpdateContainer>
        {loading && <Loader />}
        {loading && <Message>{error}</Message>}

        <h1>Profile</h1>
        <div className="dropdown-divider"></div>
        <div className="text-center ">
          <Form>
            <InputGroup className="mt-3" style={input}>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                style={inputgroup}
                className="shadow-none rounded-0 "
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="LastName"
                style={inputgroup}
                className="shadow-none rounded-0"
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                style={inputgroup}
                className="shadow-none rounded-0"
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <Form.Control
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile No"
                style={inputgroup}
                className="shadow-none rounded-0"
              />
            </InputGroup>
            <div className="w-100 mt-5 text-end">
              <Button
                className="w-50 rounded-0 danger flat"
                style={{ fontSize: "22px" }}
                onClick={submitHandler}
              >
                Save
              </Button>
            </div>
          </Form>
        </div>
      </UpdateContainer>
    </>
  );
};

export default ProfileScreen;
