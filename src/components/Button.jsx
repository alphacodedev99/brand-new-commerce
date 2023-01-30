import React from 'react';

function Button({ title }) {
	return (
		<button className='rounded-lg mt-[10px] bg-gradient-to-t to-[#127FFF] from-[#0067FF] text-[#fff] py-[3px] px-[15px]'>
			{title}
		</button>
	);
}

export default Button;
