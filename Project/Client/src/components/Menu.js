import React from 'react';
import Products from './Products'
import Cart from './Cart'

import './Menu.css';

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-title"> MENU </div>
      <div className="main">
        <Products />
        <Cart />
      </div>
    </div>
  );
};
export default Menu;
