import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'
//CSS
import './User.css';

//CONTEXT
import { useCartContext } from '../../context/CartContext';



const User = ({ addUsers }) => {
    const { cart, totalCart, confirmBuyer } = useCartContext();

    const initialState = {
        name: '',
        surname: '',
        cel: '',
        email: '',
        items: JSON.stringify(cart.map((item) => {
            return [
                item.name,
                item.quantity,
                item.amount,
            ]
        })),
        totalCart: totalCart,
    };

    const [values, setValues] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers(values)
        setValues({ ...initialState }) //Resetear campos del Formualrio
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setValues({ ...values, [name]: value });
    };

    // const itemsPurchase = cart.map((item) => {
    //     return [
    //         item.name,
    //         item.quantity,
    //         item.amount,
    //     ]
    // })
    // console.log(cart);

    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Nombre</label>
                    <input
                        placeholder='Nombre'
                        onChange={handleOnChange}
                        name='surname'
                        value={values.surname}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Apellido</label>
                    <input
                        placeholder='Apellido'
                        onChange={handleOnChange}
                        name='name'
                        value={values.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Telefono: </label>
                    <input
                        placeholder='Telefono'
                        onChange={handleOnChange}
                        name='cel'
                        type='number'
                        value={values.cel}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <TextArea
                        placeholder='Email'
                        onChange={handleOnChange}
                        name='email'
                        value={values.email}
                    />
                </Form.Field>
                {/* <input
                    type='hidden'
                    placeholder='Items'
                    onChange={handleOnChange}
                    name='items'
                    value={itemsPurchase}>
                </input> */}
                {/* <input
                    type='hidden'
                    placeholder='totalCart'
                    onChange={handleOnChange}
                    name='totalCart'
                    value={totalCart}>
                </input> */}
                <Button type='submit' primary fluid onClick={confirmBuyer}>Confirmar Datos de Usuario</Button>
            </Form>
        </div>
    )
}

export default User
