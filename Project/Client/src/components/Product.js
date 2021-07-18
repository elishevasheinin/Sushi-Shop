import React from 'react';
import { MDBIcon } from 'mdbreact';
import orderStore from '../Data/OrderStore';

import './Product.css';

export default function Product({ product, canAdd = false }) {
  const addToCart = (product) => {
    orderStore.addItem(product);
  };

  return (
    <div href="#" data-toggle="tooltip" data-placement="top" title={product.description}>
      <img className="product-img" src={product.image} alt="product" />
      <div className={`details ${canAdd ? "menu-details" : ""}`}>
        {canAdd &&
          <MDBIcon className="plus" icon="plus" onClick={() => addToCart(product)} />}
        {product.type}
        <span className="price">{product.price}</span>
      </div>
    </div>
  );
}
