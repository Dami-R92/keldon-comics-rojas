import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount.js';
import './Item.css'

import img from './defaultimg.png';

export default function Item({ item }) {

    return (
        <Card className='card'>
            <Image className='cover' src={item.cover} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
            </Card.Content>
            <ItemCount stock={item.stock} />
        </Card>
    );
};
Item.defaultProps = {  
    cover: img,
    name: 'Keldon Comics'
} 