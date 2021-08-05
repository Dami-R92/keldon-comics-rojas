import React, { useState } from 'react';
import { Button, Label, Icon, Grid } from 'semantic-ui-react'
import { useCartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';
//CSS
import './ItemCount.css'


export default function ItemCount({ stock, addOn, id }) {

    const [number, setNumber] = useState(stock ? 1 : 0);

    let { isInCart } = useCartContext();

    const handleIncrement = () => {
        if (number < stock) {
            setNumber(number + 1)
        }
    };

    const handleDecrement = () => {
        if (number > 0) {
            setNumber(number - 1)
        }
    };


    return (

        <div className='contador'>
            {stock ? "":  <Label className='agotado' as='a' color='red' tag> Agotado </Label> }
            <Grid.Row columns={3} >
                {stock > 0 ? <Button size='small' className='btn-handle' color="orange" onClick={handleDecrement}> - </Button> : <Button className='btn-handle' size='small' color="grey"> - </Button>}
                <Label size='large' basic  >{number}</Label>
                {stock > 0 ? <Button size='small' className='btn-handle' color="blue" onClick={handleIncrement}> + </Button> : <Button className='btn-handle' size='small' color="grey"> + </Button>}
            </Grid.Row>
            <br />
            {isInCart(id) === true ?
                <Button className='btn-count' color="red" to='/cart' >
                    <Link to='/cart' > <Icon className='Link' name='shopping cart' /> Ir al Carrito</Link>
                </Button> :
                <Button className='btn-count' color="red" onClick={() => addOn(number)}>
                    <Icon name='shopping cart' /> Comprar
                </Button>
            }
        </div>
    )
}
