import React from 'react';
// hooks
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// components
import { ListViewProducts, SideFilter } from '../components';

function Product() {
	// here i take if i have params in my URL
	let category = useParams();

	const { products } = useSelector((state) => state.getProducts);

	return (
		<div>
			<div className='flex gap-10'>
				<SideFilter />
				<ListViewProducts />
			</div>
		</div>
	);
}

export default Product;
