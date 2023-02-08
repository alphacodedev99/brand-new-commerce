import React from 'react';

function CartSingle({ products, cartValue }) {
	return (
		<div className='flex items-center justify-between gap-3'>
			<div className='flex items-center gap-3'>
				<img
					src={products.thumbnail}
					alt=''
					className='w-[100px] h-[100px] object-cover border border-[#e5e5e5] rounded-xl'
				/>
				<div className='flex flex-col items-start gap-1'>
					<h4>{products.title}</h4>
					<div className='flex items-center gap-3 text-[#9d9d9d] font-light'>
						<p>Category: {products.category}</p>
						<p>Stock: {products.stock}</p>
					</div>

					<button className='border border-[#c5c5c5] px-3 py-1 text-red-500 rounded-lg'>
						Remove
					</button>
				</div>
			</div>

			<div className='flex flex-col items-end '>
				<p>${products.price}</p>
				<input
					type='number'
					placeholder='Insert Qty'
					className='border border-[#ddd] rounded-md px-2 py-2 w-[50%]'
				/>
			</div>
		</div>
	);
}

export default CartSingle;
