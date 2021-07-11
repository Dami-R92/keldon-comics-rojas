import { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext)



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    //Si esta en acrrito devuelve true si no esta devuelve False.
    const isInCart = id => cart.some(item => item.id === id)



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

    const realStock = (item, comics) => {
        return (item.stock - item.quantity)
    }

    return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, realStock }}>
        {children}
    </CartContext.Provider>

}