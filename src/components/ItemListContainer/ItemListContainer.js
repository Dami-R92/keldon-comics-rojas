import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

//FIREBASE
import { itemsCollection } from '../../firebase';

//CSS
import './ItemListContainer.css'
//SEMANTIC UI
import { Grid } from 'semantic-ui-react'


const ItemListContainer = () => {
    const { categoryName } = useParams();

    const [items, setItems] = useState([]);

    useEffect(() => {

        (async()=> {
            let collection= itemsCollection;
            if (categoryName) collection = itemsCollection.where('category', '==', categoryName);
            const response = await collection.get();
            setItems(response.docs.map(item=> ({id: item.id, ...item.data()})))
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
