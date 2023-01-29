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

function CategoryHolder() {
	const [country, setCountry] = useState('');
	const [ship, setShip] = useState('');
	// send data to redux-toolkit
	const dispatch = useDispatch();
	// get item from redux
	const { category } = useSelector((state) => state.getCategory);

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
		<div className='border-b border-[#DEE2E7] '>
			<div className='flex items-center justify-between gap-2 w-full '>
				<div className='flex items-center'>
					<MenuIcon
						className='mr-1 cursor-pointer'
						fontSize='large'
					/>
					<p className='mr-5'>All category</p>

					<div className='flex gap-[26px]  '>
						{firstFiveCategories.map((item, index) => {
							return (
								<p key={index} className=''>
									{item}
								</p>
							);
						})}
					</div>
				</div>

				<div className='flex gap-10'>
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
