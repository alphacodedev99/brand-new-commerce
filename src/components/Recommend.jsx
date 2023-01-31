import React from 'react';
import { useSelector } from 'react-redux';
import RecommendCard from './RecommendCard';

function Recommend() {
	const { products } = useSelector((state) => state.getProducts);

	let recommendedItems = products.slice(0, 10);

	return (
		<div className='my-10'>
			<h3 className='text-[#1C1C1C] text-[24px] font-[600]'>
				Recommended items
			</h3>
			<div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
				{recommendedItems.map((item, index) => {
					return <RecommendCard item={item} key={index} />;
				})}
			</div>
		</div>
	);
}

export default Recommend;
