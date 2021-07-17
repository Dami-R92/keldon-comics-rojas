import React from 'react'
import carrito from './cart.png'
import './CartWidget.css'

//CONTEXT
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { elementsInCart, cart } = useCartContext();

    if (!cart.length) return "";


    return (
        <div className='cartWidget' >
            <img className='cartWidget--img' src={carrito} alt="" />
            <p>: <strong className='cartWidget--strong' > {elementsInCart}</strong> </p>
        </div>
    )
}

export default CartWidget
