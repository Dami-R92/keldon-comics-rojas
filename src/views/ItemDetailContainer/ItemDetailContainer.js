import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';

import { useParams } from 'react-router-dom';

//COMPONENT
import ItemDetail from '../../components/ItemDetail/ItemDetail.js';
import { itemsCollection } from '../../firebase';

function ItemDetailContainer() {

	const { id } = useParams();

	const [comics, setComics] = useState([]);



	useEffect(() => {
		(async () => {
			const response = await itemsCollection.doc(id).get();
			setComics({id:response.id, ...response.data()});
		})();
	}, [id]);

	return (
		<div>
			<ItemDetail comics={comics}></ItemDetail>
		</div>
	)
};

export default ItemDetailContainer;