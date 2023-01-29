import { Autocomplete, Button } from '@mui/material';
import React, { useEffect } from 'react';
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
		<div className='w-full h-[86px] flex items-center justify-between'>
			{/* logo section */}
			<Link to='/' className='flex items-center gap-[6px]'>
				<img src={brandLogo} alt='' />
				<h1 className='text-[#8CB7F5] text-2xl font-bold'>Brand</h1>
			</Link>
			{/* search bar */}
			<div className='flex h-[40px] items-center border-2 border-[#0D6EFD] rounded-xl '>
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
					sx={{ width: 150 }}
					renderInput={(params) => (
						<TextField
							placeholder='All category'
							hiddenLabel
							id='filled-hidden-label-small'
							variant='standard'
							size='small'
							color='primary'
							{...params}
						/>
					)}
				/>
				<Button variant='contained' className=''>
					Search
				</Button>
			</div>
			<div className='flex gap-5'>
				<Link to='/' className='flex flex-col items-center'>
					<Person2Icon className='text-[#979797]' fontSize='large' />
					<span className='text-[#979797] font-light text-[12px]'>
						Profile
					</span>
				</Link>
				<Link to='/' className='flex flex-col items-center'>
					<MessageIcon className='text-[#979797]' fontSize='large' />
					<span className='text-[#979797] font-light text-[12px]'>
						Message
					</span>
				</Link>
				<Link to='/' className='flex flex-col items-center'>
					<FavoriteIcon className='text-[#979797]' fontSize='large' />
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
	);
}

export default Navbar;
