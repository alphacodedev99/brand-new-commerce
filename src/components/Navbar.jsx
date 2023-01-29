import React from 'react';

// images
import { brandLogo } from '../assets';

function Navbar() {
	return (
		<div className='w-full h-[86px] flex items-center'>
			<div className='flex items-center gap-[6px]'>
				<img src={brandLogo} alt='' />
				<h1 className='text-[#8CB7F5] text-2xl font-bold'>Brand</h1>
			</div>
		</div>
	);
}

export default Navbar;
