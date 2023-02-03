import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';

function ListViewProducts() {
	const { products } = useSelector((state) => state.getProducts);
	const [listView, setListView] = useState('listView');

	return (
		<div className='w-[80%]'>
			<div className='bg-white p-[10px] w-full flex justify-between rounded-xl'>
				<p>
					{products.length} items in <span>Prodcuts</span>
				</p>
				<div className='flex gap-5'>
					<button onClick={() => setListView('listView')}>
						List View
					</button>
					<button onClick={() => setListView('gridView')}>
						Grid View
					</button>
				</div>
			</div>

			<ListView activeView={listView} allProduct={products} />
		</div>
	);
}

export default ListViewProducts;
