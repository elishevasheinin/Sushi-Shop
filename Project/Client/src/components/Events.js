import React from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import './Events.css';

const Events = (props) => {
  const { history } = props;
  return (
    <div className="events">
      <div className="events-details">
        <p className="events-text">In our restaurant you can celebrate events ranging from birthdays, social or business events
          Up to 20 people in a unique atmosphere alongside excellent dishes and a particularly rich menu.
          <br />
          You can order Sushiman for an event that will prepare a sushi roll for you on the spot and will add interest to the event (write to us by email).
          <br />
          Everyone already knows that quality and delicious Asian food is only eaten by us.
          <br />
        </p>
        <Button className="events-button" variant="contained" 
          onClick={() => history.push('./contact')}> Contact Us </Button>
      </div>
        <div className="events-title">EVENTS</div>
    </div>
  )
};
export default withRouter(Events);
