import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
//CSS
import './User.css';

//CONTEXT
import { useCartContext } from '../../context/CartContext';



const User = ({ addUsers }) => {
    const { cart, totalCart, confirmBuyer, closeForm } = useCartContext();

    const initialState = {
        name: '',
        surname: '',
        cel: '',
        email: '',
        emailRepeat: '',
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
        if (values.email ===values.emailRepeat && values!=='') {
            // console.log('Ahora si perro');
            closeForm();
            e.preventDefault();
            addUsers(values)
            setValues({ ...initialState })
        }else {
            console.log('asi no');
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        setValues({ ...values, [name]: value });
    };



    return (
        <div className='container'>
            <div className='form-container'>
                <button className='btn-close' onClick={closeForm}> X </button>
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
                        <input
                            placeholder='Email'
                            onChange={handleOnChange}
                            name='email'
                            value={values.email}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Por favor repetinos tu Email</label>
                        <input
                            placeholder=' Repetinos tu Email'
                            onChange={handleOnChange}
                            name='emailRepeat'
                            value={values.emailRepeat}
                        />
                    </Form.Field>
                    <Button type='submit' primary fluid >Confirmar Datos de Usuario</Button>
                </Form>
            </div>
        </div>
    )
}

export default User
