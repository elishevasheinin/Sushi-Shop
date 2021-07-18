import React from "react";
import { observer } from 'mobx-react'
import orderStore from '../Data/OrderStore'
import NumberPicker from "./NumberPicker";

import './OrderItem.css'

const OrderItem = ({ product }) => {

  const addToCart = (product) => {
    orderStore.addItem(product);
  }

  const removeFromCart = (product) => {
    orderStore.removeItem(product);
  }

  return (
    <div className="cart-details">
      <span className="product-name">{product.type}</span>
      <span className="product-price">{orderStore.getItemsCosts(product)} ₪</span>
      <NumberPicker number={orderStore.getAmount(product)} 
        onPlusPressed={() => addToCart(product)} 
        onMinusPressed={() => removeFromCart(product)} />
    </div>
  )
};

export default observer(OrderItem);