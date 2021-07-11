import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'
import axios from 'axios';
import { useParams } from 'react-router-dom';

//CSS
import './ItemListContainer.css'
//SEMANTIC UI
import { Grid } from 'semantic-ui-react'


const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`https://60d7a31d307c300017a5f92c.mockapi.io/keldon`);
            if (!categoryName) return setItems(data);
            const catItems= data.filter(items=>items.category ===categoryName);
            setItems(catItems);
        })();

    }, [categoryName]);


    return (
        <div className='item-container'>
            <Grid columns={3} stackable>
                <ItemList items={items} />
            </Grid>
        </div>
    );
};

export default ItemListContainer;
