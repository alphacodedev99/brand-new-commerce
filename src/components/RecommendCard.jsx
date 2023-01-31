import React from 'react';

function RecommendCard({ item }) {
	return (
		<div className='border border-[#E0E0E0] flex flex-col   p-2 rounded-xl'>
			<img
				src={item.thumbnail}
				alt={item.title}
				className='w-[200px] h-[200px] object-cover rounded-xl border border-[#E0E0E0] mx-auto'
			/>
			<p className='text-[#1C1C1C] text-left mt-5'>${item.price}</p>
			<p className='text-[#8B96A5] text-[16px] mb-5'>{item.title}</p>
		</div>
	);
}

export default RecommendCard;
