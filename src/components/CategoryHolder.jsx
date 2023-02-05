import React, { useEffect } from 'react';
import { fetchCategory } from '../utils/fetchCategory';

// icons
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../store/sliceCategory';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useState } from 'react';
import {Link, useParams} from 'react-router-dom';

function CategoryHolder() {
	const [country, setCountry] = useState('');
	const [ship, setShip] = useState('');
	// send data to redux-toolkit
	const dispatch = useDispatch();
	// get item from redux
	const { category } = useSelector((state) => state.getCategory);
	let currentCategory = useParams();
	console.log(currentCategory)
	useEffect(() => {
		fetchCategory().then((data) => dispatch(getAllCategory(data)));
	}, []);

	// for category selection
	let firstFiveCategories = category.slice(0, 5);

	// take value from countrey
	const handleChange = (event) => {
		setCountry(event.target.value);
	};

	const handleShip = (event) => {
		setShip(event.target.value);
	};

	return (
		<div className='border-b border-[#DEE2E7] bg-white'>
			<div className='container flex items-center justify-between gap-2 mx-auto'>
				{/* categories */}
				<div className='flex flex-wrap items-center justify-center w-full lg:justify-start'>
					<MenuIcon
						className='mr-1 cursor-pointer'
						fontSize='large'
					/>
					<Link to='/product' className={`${!currentCategory.category ? 'bg-[#DEE2E7] p-[10px] mr-5' : 'mr-5 p-[10px]'}`}>
						All category
					</Link>

					<div className='flex items-center justify-center lg:justify-start flex-wrap  gap-[26px] mt-[20px] sm:mt-0 '>
						{firstFiveCategories.map((item, index) => {
							return (
								<Link
									to={`/product/${item}`}
									key={index}
									className={`${currentCategory.category === item ? 'bg-[#DEE2E7] p-[10px]' : 'p-[10px]'}`}>
									{item}
								</Link>
							);
						})}
					</div>
				</div>
				{/* slect country and value */}
				<div className='hidden gap-10 lg:flex'>
					<FormControl variant='standard' className='w-[120px] '>
						<InputLabel id='demo-simple-select-label'>
							Country,Value
						</InputLabel>
						<Select
							disableUnderline
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							label='Age'
							onChange={(event) => handleChange(event)}
							value={country}>
							<MenuItem value={'serbia'}>Serbia, RSD</MenuItem>
							<MenuItem value={'croatia'}>Croatia, Kruna</MenuItem>
							<MenuItem value={'bangdl'}> Bangld, Krn</MenuItem>
						</Select>
					</FormControl>
					<FormControl variant='standard' className='w-[120px]'>
						<InputLabel id='demo-simple-select-label'>
							Ship to
						</InputLabel>
						<Select
							disableUnderline
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							label='Age'
							value={ship}
							onChange={handleShip}>
							<MenuItem value={'serbia'}>Serbia</MenuItem>
							<MenuItem value={'germany'}>Germany</MenuItem>
							<MenuItem value={'greece'}>Greece</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
		</div>
	);
}

export default CategoryHolder;
