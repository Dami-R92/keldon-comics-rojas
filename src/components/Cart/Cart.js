import React from 'react'
import { Redirect } from 'react-router-dom';
//SEMANTIC UI
import { Button } from 'semantic-ui-react'

//CONTEXT
import { useCartContext } from '../../context/CartContext'

//CSS
import './Cart.css'

const Cart = () => {
  const { cart, clearCart, purchaseEnd } = useCartContext();

  if (!cart.length) return <Redirect to='/' />;

  return (
    <div className='cart-container'>
      <table>
        <caption>Tu Carrito</caption>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Catidad</th>
            <th>Sub Total</th>
          </tr>
        </tbody>
      </table>
      {cart.map((item) => (
        <div className='cart-container'>
          <table>
            <tbody>
              <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>$ {item.quantity * item.amount}</td>
              </tr>
            </tbody>
          </table>
        </div>

      ))}
      <Button className='btn' onClick={clearCart} size='big' color='blue' >Vaciar Carrito</Button>
      <Button className='btn' onClick={purchaseEnd} size='big' color='green'>Finalizar Compra</Button>
    </div>
  )
}

export default Cart
