import React, {useState, useEffect}from 'react';
import './ItemDetailContainer.css';
import axios from 'axios';

//COMPONENT
import ItemDetail from '../../components/ItemDetail/ItemDetail.js';

function ItemDetailContainer({match}) {
	let comicID = match.params.id;
	const [comics, setComics] = useState([]);

    useEffect(() => {
        axios(`https://60d7a31d307c300017a5f92c.mockapi.io/keldon/${comicID}`).then((comic) =>
		setComics(comic.data)
	);
    }, [comicID]);

	return (
		<div>
            <ItemDetail comics={comics}></ItemDetail>
		</div>
	)
};

export default ItemDetailContainer;