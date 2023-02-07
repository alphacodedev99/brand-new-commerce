import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
function ListView({ activeView, allProduct }) {
	let category = useParams();

	let filteredProducts = allProduct.filter(
		(el) => el.category === category.category
	);

	// setup for pagination
	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

	useEffect(() => {
		if (filteredProducts.length === 0) {
			const endOffset = itemOffset + itemsPerPage;
			setCurrentItems(allProduct.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(allProduct.length / itemsPerPage));
		} else {
			setItemOffset(0);
			const endOffset = itemOffset + itemsPerPage;
			setCurrentItems(filteredProducts.slice(itemOffset, endOffset));
			setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
		}
	}, [itemOffset, itemsPerPage, allProduct, category.category]);

	const handlePageClick = (event) => {
		const newOffset =
			(event.selected * itemsPerPage) % allProduct.length;
		setItemOffset(newOffset);
	};
	return (
		<>
			<div
				className={`${
					activeView === 'listView'
						? 'flex flex-col gap-5 mt-[20px]'
						: 'grid grid-cols-3 gap-5 mt-[20px]'
				}`}>
				{currentItems.map((item, index) => {
					return (
						<div
							key={index}
							className={`${
								activeView === 'listView'
									? 'flex items-center gap-10 bg-white h-[230px] '
									: 'bg-white flex flex-col items-center  p-[20px]  max-h-[400px] overflow-hidden'
							}`}>
							<img
								src={item.thumbnail}
								alt={item.title}
								className={`${
									activeView === 'listView'
										? 'h-full max-w-[200px] object-cover'
										: 'w-[230px] h-[230px] object-cover'
								}`}
							/>

							<div
								className={`${
									activeView === 'listView'
										? 'flex' + ' flex-col gap-2'
										: 'flex items-start flex-col' +
										  ' w-full mt-[10px]'
								}`}>
								{activeView === 'listView' ? (
									<h3 className='text-[#1C1C1C] text-xl'>
										{item.title}
									</h3>
								) : null}
								<p className='text-[20px] font-bold'>${item.price}</p>
								<div className='flex items-center gap-2'>
									<Rating
										name='text-feedback'
										value={item.rating}
										readOnly
										precision={0.5}
										emptyIcon={
											<StarIcon
												style={{ opacity: 0.55 }}
												fontSize='inherit'
											/>
										}
									/>
									<p className='text-[#ff9800]'>{item.rating}</p>
									{activeView === 'listView' ? (
										<>
											<p className='text-[#8B96A5] font-[400]'>
												{' '}
												- {item.stock} orders
											</p>
											<p className='text-[#00B517]'>Free Shipping</p>
										</>
									) : null}
								</div>

								<p className='text-[#505050] text-lg'>
									{activeView === 'listView'
										? item.description
										: item.category}
								</p>
								{activeView === 'listView' ? (
									<Link
										to={`/detail/${item.id}`}
										className='text-[#0D6EFD]'>
										View details
									</Link>
								) : null}
							</div>
						</div>
					);
				})}
			</div>

			{/*	PAGINATION*/}
			<ReactPaginate
				className='flex items-center justify-center gap-2 mt-5'
				pageClassName='bg-[#fff] border border-[#ddd] p-3 flex items-center justify-center'
				activeClassName='bg-[#e5e5e5]'
				previousClassName='bg-[#fff] border border-[#ddd] p-3'
				nextClassName='bg-[#fff] border border-[#ddd] p-3'
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</>
	);
}

export default ListView;
