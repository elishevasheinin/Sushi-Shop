import React from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import './ChooseTable.css';

const ChooseTable = (props) => {
  const { history } = props;
  return (
    <div className="choose-table">
      <div className="buttons-wrapper">
        <Button className="choose-button pickup" variant="contained" 
          onClick={() => history.push('./pickupTable')}> Pickup </Button>
        <Button className="choose-button table-reservation" variant="contained" 
          onClick={() => history.push('./reservationTable')}> Table Reservation </Button>
        <Button className="choose-button shipping" variant="contained" 
          onClick={() => history.push('./shippingTable')}> Shipping </Button>
      </div>
    </div>
  )
};
export default withRouter(ChooseTable);
