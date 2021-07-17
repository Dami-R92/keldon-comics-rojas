import React from 'react'
import { Link } from 'react-router-dom';
//SEMANTIC UI
import { Button } from 'semantic-ui-react'

//CONTEXT
import { useCartContext } from '../../context/CartContext'

//CSS
import './Cart.css'

const Cart = () => {
  const { cart, clearCart, purchaseEnd, removeItem, totalCart } = useCartContext();

  if (!cart.length) return (
    <div>
      <h1>Vaya, no hay nada en tu carrito!! </h1>
      <h1>¿Por que no agregamos algunas cosas?</h1>
      <Button className='btn' size='big' color='white'> <Link className='Link' to='/' >Volver a la Tienda </Link></Button>

    </div>
  )

  return (
    <div className='cart-container'>
      <table>
        <caption>Tu Carrito</caption>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Catidad</th>
            <th>Sub Total</th>
            <th>Funciones</th>
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
                <td><Button onClick={() => removeItem(item.id)}> X </Button></td>
              </tr>
            </tbody>
          </table>
        </div>

      ))}
      <table>
        <tbody>
          <tr>
            <td>Total: </td>
            <td>$ {totalCart}</td>
          </tr>
        </tbody>
      </table>


      <Button className='btn' onClick={clearCart} size='big' color='blue' >Vaciar Carrito</Button>
      <Button className='btn' onClick={purchaseEnd} size='big' color='green'>Finalizar Compra</Button>
    </div>
  )
}

export default Cart
