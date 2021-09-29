import React from "react";
import { Alert } from "react-bootstrap";
const Message = ({ variant, children }) => {
  return (
    <>
      {" "}
      <Alert className="text-center  rounded mt-1 mb-0 p-0" variant={variant}>
        <b>{children}</b>
      </Alert>
    </>
  );
};

export default Message;
