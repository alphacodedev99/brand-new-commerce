import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import React, { useState } from 'react';
import { buildingBg } from '../assets';
import Button from './Button';
function InfoSection() {
	const [psc, setPsc] = useState('');

	const handleChange = (event) => {
		setPsc(event.target.value);
	};
	return (
		<div className='h-[600px] md:h-[420px] mb-[20px] bg-gradient-to-r from-[#2C7CF1] to-[#00d0ff97] relative rounded-lg '>
			<img
				src={buildingBg}
				alt=''
				className='z-0 w-full h-full opacity-40'
			/>
			<div className=' p-[20px] absolute top-0 bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between'>
				<div>
					<h3 className='text-[#fff] text-[32px] font-[600] '>
						An easy way to send <br /> requests to all suppliers
					</h3>
					<p className='text-[#fff] text-[16px] font-[400]'>
						Lorem ipsum dolor sit amet, consectetur adipisicing <br />
						elit, sed do eiusmod tempor incididunt.
					</p>
				</div>
				<div className='bg-[#fff] p-[10px] rounded-lg'>
					<form className='flex flex-col gap-4'>
						<h3 className='text-[20px] font-[600] my-[10px]'>
							Send quote to suppliers
						</h3>
						<input
							type='text'
							placeholder='What item you need?'
							className='border border-[#ddd] px-[10px] py-[10px] rounded-lg'
						/>
						<textarea
							placeholder='Type more details'
							name='detail'
							className='border border-[#ddd] px-[10px] py-[10px] rounded-lg'></textarea>
						<div className='flex flex-wrap items-center gap-2 md:flex-nowrap'>
							<input
								type='text'
								placeholder='Quantity'
								className='border border-[#ddd] px-[10px] py-[12px] rounded-lg'
							/>
							<FormControl sx={{ minWidth: 120 }} size='small'>
								<InputLabel
									id='demo-simple-select-helper-label'
									className='mt-[5px]'>
									Psc
								</InputLabel>
								<Select
									className=' px-[10px] py-[5px] rounded-lg '
									labelId='demo-simple-select-helper-label'
									id='demo-simple-select-helper'
									value={psc}
									label='Age'
									onChange={handleChange}>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</div>
					</form>
					<Button title='Send inquiry' />
				</div>
			</div>
		</div>
	);
}

export default InfoSection;
