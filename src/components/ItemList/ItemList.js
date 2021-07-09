import React from 'react';
import Item from '../Item/Item.js';

import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'

export default function ItemList({ items }) {

    return (
        items.map((item, key) => {
            return (
                <div key={item.id}>
                    <Link to={`/detail/${item.id}`} >
                        <Grid.Column>
                            <Item item={item} key={item.id} />
                        </Grid.Column>
                    </Link>
                </div>
            )
        })
    )
};

