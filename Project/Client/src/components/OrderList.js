import React from "react";
import Cart from './Cart'
import OrderItem from "./OrderItem";

const OrderList = ({ products }) => {
  return (
    <div className="order-list">
      {products.map(product =>
        <OrderItem orderItem={product} />)}
    </div>
  )
};
export default OrderList;