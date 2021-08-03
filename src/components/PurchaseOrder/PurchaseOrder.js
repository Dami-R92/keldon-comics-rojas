import React, { useState, useEffect } from 'react';
import User from '../Users/User';
//FIREBASE
import { usersCollection } from '../../firebase';
//SEMANTIC UI
import { Button } from 'semantic-ui-react'

//CSS
import './PurchaseOrder.css';

//CONTEXT
import { useCartContext } from '../../context/CartContext';


const PurchaseOrder = () => {

    const { cart, datosUser, purchaseEnd} = useCartContext();

    const [users, setUsers] = useState([]);

    const addUsers = async (user) => {
        // console.log('Usuario', user);
        await usersCollection.doc().set(user)
        console.log('Usuario agregado!');
    }


    const getUsers = () => {
        usersCollection.onSnapshot((querySnapShot) => {
            const docs = [];
            querySnapShot.forEach((doc) => {
                // console.log(doc.data());
                // console.log(doc.id);
                docs.push({ ...doc.data(), id: doc.id })
                // console.log(docs);
            })
            setUsers(docs)
        })
    }

    useEffect(() => {
        getUsers();
    }, [])





    return (
        <div>
            <h1>Dejanos tus Datos de Contacto</h1>
            <User addUsers={addUsers} />
            {datosUser?
            <div>
            <h1>Datos del Usuario</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>Telefono: {user.cel}</p>
                    <p>Email: {user.email}</p>
                </div>
            ))}
            <h2>Detalle de la Compra</h2>
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
            <Button className='btn' onClick={purchaseEnd} size='big' color='green'>Finalizar Compra</Button>
            </div>
            : ""}
            
        </div>
    )
}

export default PurchaseOrder
