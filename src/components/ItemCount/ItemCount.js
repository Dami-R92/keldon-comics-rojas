import React, { useState } from 'react';
import { Button, Label, Icon } from 'semantic-ui-react'


export default function ItemCount({ stock, addOn }) {

    const [number, setNumber] = useState(stock ? 1 : 0);

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
        <div>
            <div className='handle'>
                <Label size='large' basic color="violet" key="olive" >{number}</Label>
                <br />
                {stock > 0 ? <Button size='small' color="blue" onClick={handleIncrement}> + </Button> : <Button size='small' color="grey"> + </Button>}
                {stock > 0 ? <Button size='small' color="orange" onClick={handleDecrement}> - </Button> : <Button size='small' color="grey"> - </Button>}
            </div>
            <br />
            <Button color="red" onClick={() => addOn(number)}>
                <Icon name='shopping cart' />
            </Button>
        </div>
    )
}
