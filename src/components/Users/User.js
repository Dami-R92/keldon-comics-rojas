import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
//CSS
import './User.css';

//CONTEXT
import { useCartContext } from '../../context/CartContext';

const User = ({ addUsers }) => {
    const { cart, totalCart, purchaseEnd, closeForm } = useCartContext();

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
        if (values.email === values.emailRepeat && values.name, values.email, values.surname, values.cel !== '') {
            closeForm();
            e.preventDefault();
            addUsers(values);
            setValues({ ...initialState })
            purchaseEnd();
            
        } else {
            alert('Debe ingresar todos los datos requeridos, muchas gracias!');
        }
    }; 

    const handleOnChange = (e) => {
        const { name, value } = e.target;
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
                            name='name'
                            value={values.name}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Apellido</label>
                        <input
                            placeholder='Apellido'
                            onChange={handleOnChange}
                            name='surname'
                            value={values.surname}
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
                    {cart.map((item) => (
                        <div className='table-user'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{item.name} x {item.quantity}</td>
                                        <td>$ {item.quantity * item.amount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                    <table className='table-user'>
                        <tbody>
                            <tr>
                                <td>Total: </td>
                                <td>$ {totalCart}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button type='submit' primary fluid >Finalizar Compra</Button>
                </Form>
            </div>
        </div>
    )
}

export default User
