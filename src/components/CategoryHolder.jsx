import React, { useEffect } from 'react';
import { fetchCategory } from '../utils/fetchCategory';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../store/sliceCategory';

function CategoryHolder() {
	// send data to redux-toolkit
	const dispatch = useDispatch();
	// get item from redux
	const { category } = useSelector((state) => state.getCategory);

	useEffect(() => {
		fetchCategory().then((data) => dispatch(getAllCategory(data)));
	}, []);

	// for category selection
	let firstFiveCategories = category.slice(0, 5);

	return (
		<div>
			<div className='flex items-center gap-2'>
				<MenuIcon className='mr-1 cursor-pointer' fontSize='large' />
				<p className='mr-5'>All category</p>
				<div className='flex gap-[26px]'>
					{firstFiveCategories.map((item, index) => {
						return (
							<p key={index} className=''>
								{item}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CategoryHolder;
