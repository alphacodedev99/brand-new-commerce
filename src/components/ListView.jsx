import React from 'react';
import {Link} from 'react-router-dom'
function ListView({ activeView, allProduct }) {
	console.log(allProduct);
	return (
		<div
			className={`${
				activeView === 'listView'
					? 'flex flex-col gap-5 mt-[20px]'
					: 'grid grid-cols-3 gap-5 mt-[20px]'
			}`}>
			{allProduct.map((item,index)=>{
				return(
					<div key={index} className={`${activeView === 'listView' ? 'flex items-center gap-10 bg-white h-[230px] ' : 'bg-white flex flex-col items-center  p-[20px]  max-h-[400px] overflow-hidden'}`}>
						<img src={item.thumbnail} alt={item.title} className={`${activeView === 'listView' ? 'h-full max-w-[200px] object-cover' : 'w-[230px] h-[230px] object-cover'}`} />
						<div className={`${activeView === 'listView' ? 'flex' +
							' flex-col gap-2' : 'flex items-start flex-col' +
							' w-full mt-[10px]'}`}>
							{activeView === 'listView' ? <h3 className="text-[#1C1C1C] text-xl">{item.title}</h3> : null}
							<p className="text-[20px] font-bold">${item.price}</p>
							<span className="text-[#FF9017]">{item.rating}</span>
							<p className="text-[#505050] text-lg">{activeView === 'listView' ? item.description : item.category }</p>
							{activeView === 'listView' ? <Link to='/' className="text-[#0D6EFD]">View details</Link> : null}
						</div>
					</div>
				)
			})}
		</div>
	);
}

export default ListView;
