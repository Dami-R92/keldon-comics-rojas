import React, { useState } from 'react';
import { usersCollection } from '../../firebase';
import './Order.css'

import { Input } from 'semantic-ui-react'

const Order = () => {

    const [orderId, setOrderId] = useState('');
    const [aRenderizar, setARenderizar] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        usersCollection.doc(orderId).get()
            .then((order) => {
                setARenderizar(order.data());
            })
    }

    const handleOnChange = (e) => {
        const { value } = e.target;
        setOrderId(value)
    };

    return (
        <div className='order-container'>
            <h1 className='order-title'>Hace el seguimiento de tu Pedido</h1>
            <p className='order-text' >Ingresa el Codigo de Seguimiento suministrado con tu compra para ver el estado de ru producto </p>
            <Input
                icon={{ name: 'search', circular: true, link: true, onClick: handleSubmit }}
                placeholder='Search...'
                onChange={handleOnChange}
                name='surname'
            />
            <br />
            {!aRenderizar
                ? ''
                :
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Email</th>
                            </tr>
                            <tr>
                                <td>{aRenderizar.name}</td>
                                <td>{aRenderizar.surname}</td>
                                <td>{aRenderizar.cel}</td>
                                <td>{aRenderizar.email}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio $: </th>
                            </tr>
                        </tbody>
                        <tbody>
                            {JSON.parse(aRenderizar.items).map((item, key) => {
                                return (
                                    <tr>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                    </tr>)
                            })}
                        </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Total en Carrito</td>
                                    <td>{aRenderizar.totalCart}</td>
                                </tr>
                            </tbody>
                        
                    </table>
                </div>
            }
        </div>
    )
}

export default Order
