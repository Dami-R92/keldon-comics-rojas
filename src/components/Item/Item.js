import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import './Item.css'

import img from './defaultimg.png';





export default function Item({ item }) {

    return (
        <Card className='card'>
            <img className='cover' src={item.cover} wrapped ui={false} alt='Portada del comic' />
            <Card.Content>
                <Card.Header>{item.name}</Card.Header>
                <br />
                {!item.stock ? <Label className='agotado' as='a' color='red' tag> Agotado </Label> : ""}
            </Card.Content>

        </Card>
    );
};
Item.defaultProps = {
    cover: img,
    name: 'Keldon Comics'
}