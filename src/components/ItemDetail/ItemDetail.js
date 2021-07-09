import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css'


export default function ItemDetail({ comics }) {

    return (

        <Grid divided='vertically' stackable className='detail' >
            <Grid.Row columns={2} >
                <Grid.Column>
                    <Image src={comics.cover} />
                </Grid.Column>
                <Grid.Column>
                    <h1>{comics.name}</h1>
                    <h2>$ {comics.amount}</h2>
                    <ItemCount stock={comics.stock} />
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
