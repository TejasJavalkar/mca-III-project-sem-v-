import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import UpdateContainer from "../components/sharing/UpdateContainer";
const ProfileScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <>
      <UpdateContainer></UpdateContainer>
    </>
  );
};

export default ProfileScreen;
