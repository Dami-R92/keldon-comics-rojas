import React from 'react';
import './Home.css';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

function Home() {
	return (
		<div className='Home'>
			<h1 className='page-titles'>El mundo del Comic y el Manga en tu bolsillo!</h1>
			<ItemListContainer />
		</div>
	);
}

export default Home;
