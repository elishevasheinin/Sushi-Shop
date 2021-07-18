import React from "react";
import { Button } from "@material-ui/core";
import { withRouter } from "react-router";
import { observer } from 'mobx-react'
import orderStore from '../Data/OrderStore'
import OrderItem from './OrderItem'
import './Cart.css'

const Cart = (props) => {
  const goToLogin = (path) => {
    props.history.push(path);
  }

  const {orderList, totalPrice} = orderStore;

  return (
    <div className="cart">
      <div className="cart-items">
        {orderList.map((product, ind) =>
          <OrderItem key={ind} product={product} />)}
      </div>
      <div className="total-price">Total price: {totalPrice} ₪</div>
      <div className="buttons-cover">
        <Button className="cart-button" onClick={() => goToLogin('./shippingLogin')} disabled={totalPrice === undefined || totalPrice <= 0}>Shipping </Button>
        &nbsp; &nbsp; &nbsp;
        <Button className="cart-button" onClick={() => goToLogin('./pickupLogin')} disabled={totalPrice === undefined || totalPrice <= 0}>Pickup </Button>
      </div>
    </div>
  );
};

export default withRouter(observer(Cart));