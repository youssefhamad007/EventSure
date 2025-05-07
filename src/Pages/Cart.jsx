
import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'; // Adjust the path as needed
import Cartpage from '../components/Cartpage';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
  return (
    <Cartpage cart={cart} onRemoveItem={removeFromCart}></Cartpage>
  )
}

export default Cart