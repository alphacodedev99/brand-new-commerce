import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SideFilterCategory from './SideFilterCategory';
import SideFilterBrands from './SideFilterBrands';
import SideFilterFeatures from './SideFilterFeatures';
import SideFilterPriceRange from './SideFilterPriceRange';
import SideFilterCondition from './SideFilterCondition';
import SideFilterRatings from './SideFilterRatings';

function SideFilter() {

	const { category } = useSelector((state) => state.getCategory)
	const { products } = useSelector((state) => state.getProducts)

	useEffect(() => {
		console.log(category)
		console.log(products)
}, [category])



	return <div>
		<SideFilterCategory />
		<SideFilterBrands />
		<SideFilterFeatures />
		<SideFilterPriceRange />
		<SideFilterCondition />
		<SideFilterRatings />
		
	</div>;
}

export default SideFilter;
