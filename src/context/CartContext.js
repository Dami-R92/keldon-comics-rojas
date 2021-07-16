import { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext)



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    const purchaseEnd = () => {
        setCart([]);
        alert('Muchas gracias por tu compra!')
    }

    //Si esta en acrrito devuelve true si no esta devuelve False.
    let isInCart = id => cart.some(item => item.id === id)



    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }

                } else return cartElement;
            })
            setCart([newCart])
        } else {
            setCart(prev => [...prev, { ...item, quantity }])
        }
    };

    return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, isInCart, purchaseEnd }}>
        {children}
    </CartContext.Provider>

}