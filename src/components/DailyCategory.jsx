import React from 'react';
import { useSelector } from 'react-redux';
// countdown events
import Countdown, { zeroPad } from 'react-countdown';
function DailyCategory() {
	const Completionist = () => <span>You are good to go!</span>;
	// countdown events
	const renderer = ({ hours, minutes, seconds }) => (
		<span className='flex gap-2'>
			<span className='font-bold bg-[#606060] py-[10px] px-[15px] text-center text-[#fff] rounded-lg'>
				{zeroPad(hours)}
				<p className='font-light text-[12px]'>Hour</p>
			</span>

			<span className='font-bold bg-[#606060] py-[10px] px-[15px] text-center text-[#fff] rounded-lg'>
				{zeroPad(minutes)}
				<p className='font-light text-[12px]'>Min</p>
			</span>

			<span className='font-bold bg-[#606060] py-[10px] px-[15px] text-center text-[#fff] rounded-lg'>
				{zeroPad(seconds)}
				<p className='font-light text-[12px]'>Sec</p>
			</span>
		</span>
	);

	const { products } = useSelector((state) => state.getProducts);

	// for random five article from all products present
	let random = [...products]
		.sort(() => 0.5 - Math.random())
		.slice(0, 5);

	return (
		<div className='mt-[35px] w-full h-full border border-[#DEE2E7] rounded-lg flex '>
			<div className='border-r border-[#DEE2E7] w-[280px]  pt-[20px] pl-[10px] '>
				<h3 className='text-[#1C1C1C] font-[600] text-[20px]'>
					Deals and offers
				</h3>
				<p className='text-[#8B96A5] font-[400] mb-[10px]'>
					Hygiene equipments
				</p>
				<Countdown date={Date.now() + 31235000} renderer={renderer} />
			</div>
			<div className='grid grid-cols-5 items-center h-full w-full'>
				{random.map((item, index) => {
					return (
						<div
							key={item.id}
							className='border-r last:border-none border-[#DEE2E7] flex flex-col items-center justify-start h-full w-full py-[10px]'>
							<img
								src={item.thumbnail}
								alt='img'
								className='w-[140px] h-[140px] object-cover mt-[20px]'
							/>
							<div className='flex flex-col items-center justify-center mt-[10px] grow'>
								<p className='text-center text-[#1C1C1C] font-[400]'>
									{item.title}
								</p>
								<span className='bg-[#FFE3E3] px-4 py-1 rounded-full text-[#EB001B] text-[14px] mt-[5px]'>
									-{item.discountPercentage.toFixed(0)}%
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default DailyCategory;
