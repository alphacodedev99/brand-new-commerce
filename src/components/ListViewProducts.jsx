import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import GridView from './GridView';
import ListView from './ListView';
import {BsFillGridFill} from 'react-icons/bs';
import {FaThList} from 'react-icons/fa';

function ListViewProducts() {
	const { products } = useSelector((state) => state.getProducts);
	const [listView, setListView] = useState('listView');

	return (
		<div className='w-[80%]'>
			<div className='bg-white p-[10px] w-full flex items-center justify-between rounded-xl mt-[20px]'>
				<p>
					{products.length} items in <span>Prodcuts</span>
				</p>
				<div className='flex gap-5'>
					<button onClick={() => setListView('listView')} className={`${listView === 'listView' ? 'bg-[#DEE2E7] p-[10px]': 'p-[10px]'}`}>
						<FaThList className="text-2xl"/>
					</button>
					<button onClick={() => setListView('gridView')} className={`${listView !== 'listView' ? 'bg-[#DEE2E7] p-[10px]': 'p-[10px]'}`}>
						<BsFillGridFill className="text-2xl"/>
					</button>
				</div>
			</div>

			<ListView activeView={listView} allProduct={products} />
		</div>
	);
}

export default ListViewProducts;
