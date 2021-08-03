import React from 'react'
import { Link } from 'react-router-dom';
//SEMANTIC UI
import { Button } from 'semantic-ui-react'
//CONTEXT
import { useCartContext } from '../../context/CartContext';
//CSS
import './Cart.css'
//Componentes
import PurchaseOrder from '../PurchaseOrder/PurchaseOrder';

const Cart = () => {

  const { cart, clearCart, removeItem, totalCart, datos, confirmData} = useCartContext();

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
                <td><button className='btn-remove' onClick={() => removeItem(item.id)}> X </button></td>
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
      {datos? <PurchaseOrder /> :
        <div>
          <Button className='btn' onClick={clearCart} size='big' color='blue' >Vaciar Carrito</Button>
          <Button className='btn' onClick={confirmData} size='big' color='green'>Confirmar Datos</Button>
        </div>}
    </div>
  )
}

export default Cart;
