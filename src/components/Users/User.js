import React, { useState } from 'react';
import { Button, Form, TextArea } from 'semantic-ui-react'
//CSS
import './User.css';

//CONTEXT
import { useCartContext } from '../../context/CartContext';



const User = ({ addUsers }) => {
    const { confirmBuyer } = useCartContext();

    const initialState = {
        name: '',
        cel: '',
        email: '',
        item:'',
    };
    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);
        //Copiamos los valores actuales, y el input [name] que estemos actualizando, le colocamos el valor actual que estamos tipeando
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addUsers(values)
        setValues({ ...initialState }) //Resetear campos del Formualrio
    };


    return (
        <div className='container'>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input
                            placeholder='Nombre'
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
                    <Button type='submit' primary fluid onClick={confirmBuyer}>Confirmar Datos de Usuario</Button>
                </Form>
        </div>
    )
}

export default User
