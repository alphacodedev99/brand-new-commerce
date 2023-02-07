import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartSingle from '../components/CartSingle';

function Cart() {
	const { cart } = useSelector((state) => state.storeProduct);

	return (
		<div className=' bg-white border border-[#ddd] rounded-xl mt-5 p-5'>
			<div className='flex flex-col gap-5'>
				{cart.map((item, index) => {
					return <CartSingle key={index} products={item} />;
				})}
			</div>
		</div>
	);
}

export default Cart;
