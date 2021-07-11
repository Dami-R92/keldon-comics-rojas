import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, clearCart } = useCartContext();

  if (!cart.length) return <Redirect to='/' />;

  return (
    <div>
      {cart.map((item) => (
        <h1>Product: {item.name} - {item.quantity}</h1>
      ))}
      <button onClick={clearCart}>VACIAR CARRITO</button>
    </div>
  )
}

export default Cart
