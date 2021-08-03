import React from 'react'
import { Card, Label } from 'semantic-ui-react'
import './Item.css'

import Img from './defaultimg.png';


export default function Item({ item }) {

    return (
        <Card className='card'>
            <img className='cover' src={item.cover} wrapped ui={false} alt='Portada del comic' />
            <Card.Content>
                <h3 className='card-title' >{item.name}</h3>
                <label color='orange' as='a' className='card-amount' >$ {item.amount}</label>
                {!item.stock ? <Label className='agotado' as='a' color='red' tag> Agotado </Label> : ""}
                <p className='quote'>{item.quote}</p>
            </Card.Content>
        </Card>
    );
};
Item.defaultProps = {
    cover: Img,
    name: 'Keldon Comics'
}