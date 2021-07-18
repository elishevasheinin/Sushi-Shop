import React from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import './UserMessage.css';

const UserMessage = (props) => {
  const goToHome = () => {
    props.history.push("/");
  }
  return (
    <div className="user-message">
      <div className="user-message-text"> Hey!
        <div> Your order has been accepted </div>
        :)
      </div>
      <Button className="user-message-button" variant="contained" onClick={goToHome}> Back To Home </Button>
    </div >
  );
};

export default withRouter(UserMessage);