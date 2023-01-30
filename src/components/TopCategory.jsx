import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchCategory } from '../utils/fetchPerCategory';
// images
import { avatar } from '../assets';
import Button from './Button';
function TopCategory() {
	// default first category
	const [currentCategory, setCurrentCategory] =
		useState('home-decoration');
	// here i get the category from fetchPerCategory
	const [currentViewCategory, setCurrentViewCategory] = useState([]);
	// get the category
	const { category } = useSelector((state) => state.getCategory);
	let topCategory = category.slice(5, 14);

	// when categort changes, update the category
	useEffect(() => {
		fetchCategory(currentCategory).then((data) =>
			setCurrentViewCategory(data.products)
		);
	}, [currentCategory]);

	return (
		<div className='w-full  h-[420px] border-2 border-[#DEE2E7] mt-[20px] rounded-lg  px-[10px] flex items-center gap-5 py-[10px]'>
			<div className='flex flex-col h-full '>
				{topCategory.map((cat, index) => {
					return (
						<p
							style={{
								background:
									cat === currentCategory ? '#E5F1FF' : 'transparent',
							}}
							className='text-[16px] py-[10px] px-[10px] text-[#505050] font-normal rounded-xl'
							key={index}
							onClick={() => setCurrentCategory(cat)}>
							{cat}
						</p>
					);
				})}
			</div>
			{/* middle section of photo and description */}
			<div className='relative grow'>
				<img
					src={currentViewCategory[0]?.thumbnail}
					alt=''
					className=' grow min-w-full max-h-[400px] my-[-10px] py-[10px] object-cover '
				/>
				<div className='flex flex-col pt-[56px] pl-[46px] absolute top-0 bottom-0 left-0 right-0 bg-[#4242427b] hover:bg-transparent transition-all duration-700'>
					<h4 className='text-[28px] font-light text-[#1C1C1C]'>
						Latest trending
					</h4>
					<h2 className='text-[32px] text-[#1c1c1c] font-bold'>
						{currentViewCategory[0]?.title}
					</h2>
					<span className='bg-[#fff] px-[16px] py-[10px] w-[120px] rounded-lg'>
						Learn more
					</span>
				</div>
			</div>
			{/* right section */}
			<div className='flex flex-col gap-5 py-[10px]'>
				<div className='bg-[#E3F0FF] w-[200px] h-[150px] rounded-lg  py-[10px] px-[10px] flex flex-col'>
					<div className='flex gap-2'>
						<img src={avatar} alt='' />
						<p className='text-[#1C1C1C]'>
							Hi, user <br /> let's get stated
						</p>
					</div>
					<Button title='Join now' />
					<button className='rounded-lg mt-[10px] bg-[#fff] text-[#0067FF] py-[3px]'>
						Log in
					</button>
				</div>
				<div className='bg-[#F38332] w-[200px] h-[95px] rounded-lg'>
					<p className='text-[#fff] pt-[16px] pl-[16px]'>
						Get US $10 off with a new supplier
					</p>
				</div>
				<div className='bg-[#55BDC3] w-[200px] h-[95px] rounded-lg'>
					<p className='text-[#fff] pt-[16px] pl-[16px]'>
						Send quotes with supplier preferences
					</p>
				</div>
			</div>
		</div>
	);
}

export default TopCategory;
