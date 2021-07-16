import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import { useCartContext } from '../../context/CartContext.js';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css'


export default function ItemDetail({ comics }) {

    const { addToCart } = useCartContext();


    const addOn = qty => addToCart(comics, qty);

    return (

        <Grid divided='vertically' stackable className='detail' >
            <Grid.Row columns={2} >
                <Grid.Column className='cover-detail'>
                    <Image src={comics.cover} />
                </Grid.Column>
                <Grid.Column className='header-detail'>
                    <h1>{comics.name}</h1>
                    <h2>$ {comics.amount}</h2>
                    <h4>Stock: {comics.stock}</h4>
                    <ItemCount stock={comics.stock} addOn={addOn} id={comics.id} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} >
                <Grid.Column>
                    <p className='item-detail-escription'>{comics.description}</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
