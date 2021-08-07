import { createContext, useState, useContext } from 'react';
import { usersCollection } from '../../src/firebase';

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    const [datos,setDatos] = useState(false)

    const [datosUser,setDatosUser] = useState(false)

    const confirmData = () => {
        setDatos(true)
    }
    const closeForm = () => {
        setDatos(false)
    }
    const confirmBuyer = () => {
            setDatosUser(true);
        }  
    
    const purchaseEnd = () => {
        setCart([]);
        alert('Muchas gracias por su compra! En Instantes recibira una alerta con su codigo de Seguimiento')
    }
        
//Funcionamiento del Carrito.
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

    //ADMINISTRACION DE USUARIOS Y PEDIDOS.

    const addUsers = async (user) => {
        let newUser = await usersCollection.doc()
        newUser.set(user);
        setTimeout(() => {
            alert ('Registre su numero de pedido para seguimiento :  '+ newUser.id)
          }, 5000);
    };


    return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, isInCart, purchaseEnd, realStock, removeItem, totalCart, elementsInCart, datos, confirmData, datosUser, closeForm,confirmBuyer, addUsers }}>
        {children}
    </CartContext.Provider>

}