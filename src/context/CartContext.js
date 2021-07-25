import { createContext, useState, useContext } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext)



export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    const [datos,setDatos] = useState("")

    const [datosUser,setDatosUser] = useState("")

    const confirmData = () => {
        setDatos(!datos)
    }
    const confirmBuyer = () => {
        setDatosUser(!datosUser)
    }
    
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

    const removeItem = (id) => setCart(cart.filter(item=> item.id !== id))

    const realStock = comics => {
        const foundItem = cart.find(e=>e.id===comics.id);
        return foundItem ? comics.stock - foundItem.quantity : comics.stock
    }

    const totalCart = cart.reduce((acc,{amount, quantity})=> acc + amount * quantity, 0);

    const elementsInCart = cart.reduce((acc,{quantity})=> acc + quantity,0);

    



    return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, isInCart, purchaseEnd, realStock, removeItem, totalCart, elementsInCart, datos, confirmData, confirmBuyer, datosUser}}>
        {children}
    </CartContext.Provider>

}