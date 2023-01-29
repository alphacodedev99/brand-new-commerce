import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import React, { useState } from 'react';
import { buildingBg } from '../assets';
function InfoSection() {
	const [psc, setPsc] = useState('');

	const handleChange = (event) => {
		setPsc(event.target.value);
	};
	return (
		<div
			className='h-[420px] mb-[20px] bg-gradient-to-r from-[#2C7CF1] to-[#00d0ff97] relative rounded-lg  '
			// style={{ backgroundImage: `url(${buildingBg})` }}
		>
			<img
				src={buildingBg}
				alt=''
				className='z-0 w-full h-full opacity-40'
			/>
			<div className=' p-[20px] absolute top-0 bottom-0 left-0 right-0 flex justify-between'>
				<div>
					<h3 className='text-[#fff] text-[32px] font-[600] '>
						An easy way to send <br /> requests to all suppliers
					</h3>
					<p className='text-[#fff] text-[16px] font-[400] '>
						Lorem ipsum dolor sit amet, consectetur adipisicing <br />{' '}
						elit, sed do eiusmod tempor incididunt.
					</p>
				</div>
				<div className='bg-[#fff] p-[10px] rounded-lg'>
					<form className='flex flex-col '>
						<h3>Send quote to suppliers</h3>
						<input type='text' placeholder='What item you need?' />
						<textarea name='detail' cols='30' rows='10'></textarea>
						<div>
							<input type='text' placeholder='Quantity' />
							<FormControl variant='standard' className='w-[120px] '>
								<InputLabel id='demo-simple-select-label'>
									Psc
								</InputLabel>
								<Select
									disableUnderline
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Age'
									onChange={(event) => handleChange(event)}
									value={psc}>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
						<button>Send inquiry</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default InfoSection;
