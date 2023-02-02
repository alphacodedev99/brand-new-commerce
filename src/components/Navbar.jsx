import { Autocomplete } from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';
// icons
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
// images
import { brandLogo } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
	const { category } = useSelector((state) => state.getCategory);

	return (
		<div className='w-full h-full lg:h-[86px] bg-white'>
			<div className='container flex flex-wrap items-center justify-center h-full gap-3 py-5 mx-auto lg:justify-between lg:gap-0'>
				{/* logo section */}
				<Link to='/' className='flex items-center gap-[6px]'>
					<img src={brandLogo} alt='' />
					<h1 className='text-[#8CB7F5] text-2xl font-bold'>Brand</h1>
				</Link>
				{/* search bar */}
				<div className='flex h-[40px] items-center border-2 border-[#1976d2] rounded-xl '>
					<input
						type='text'
						placeholder='Search'
						className='h-full rounded-l-xl border-r-2 border[#127FFF] mr-2 px-2'
					/>
					<Autocomplete
						size='small'
						disablePortal
						id='combo-box-demo'
						options={category}
						renderInput={(params) => (
							<TextField
								placeholder='All category'
								hiddenLabel
								id='filled-hidden-label-small'
								variant='standard'
								size='small'
								color='primary'
								{...params}
								// here i remove underline on text field
								InputProps={{
									...params.InputProps,
									disableUnderline: true,
								}}
							/>
						)}
					/>
					<button className='rounded-lg bg-gradient-to-t to-[#127FFF] from-[#0067FF] text-[#fff] py-[6px] px-[15px]'>
						Search
					</button>
				</div>
				<div className='flex gap-5'>
					<Link to='/' className='flex flex-col items-center'>
						<Person2Icon
							className='text-[#979797]'
							fontSize='large'
						/>
						<span className='text-[#979797] font-light text-[12px]'>
							Profile
						</span>
					</Link>
					<Link to='/' className='flex flex-col items-center'>
						<MessageIcon
							className='text-[#979797]'
							fontSize='large'
						/>
						<span className='text-[#979797] font-light text-[12px]'>
							Message
						</span>
					</Link>
					<Link to='/' className='flex flex-col items-center'>
						<FavoriteIcon
							className='text-[#979797]'
							fontSize='large'
						/>
						<span className='text-[#979797] font-light text-[12px]'>
							Orders
						</span>
					</Link>
					<Link to='/cart' className='flex flex-col items-center'>
						<ShoppingCartIcon
							className='text-[#979797]'
							fontSize='large'
						/>
						<span className='text-[#979797] font-light text-[12px]'>
							My Cart
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
