import React from 'react';

function CategorySection({ item, bgImg, title }) {
	return (
		<div className='flex my-[20px] border border-[#DEE2E7] rounded-lg'>
			<div
				className='p-[10px] bg-center bg-cover w-[250px]'
				style={{ backgroundImage: `url(${bgImg})` }}>
				<h3 className='text-[#1C1C1C] text-[20px] font-semibold'>
					{title}
				</h3>
				<button className='bg-[#fff] px-[10px] py-[5px] rounded-lg mt-[10px]'>
					Source Now
				</button>
			</div>
			<div className='grid grid-cols-4 w-full'>
				{item.map((el, index) => {
					return (
						<div className='py-[10px] pl-[10px] border border-[#DEE2E7] flex items-center justify-between w-full'>
							<div className='flex flex-col gap-2'>
								<h3 className='text-[#1C1C1C] text-[16px] '>
									{el.title}
								</h3>
								<p className='text-[#8B96A5] text-[13px] '>
									USD {el.price}
								</p>
							</div>
							<img
								src={el.thumbnail}
								alt=''
								className='w-[82px] h-[82px] object-cover pr-[5px]'
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CategorySection;
