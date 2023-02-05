import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {DetailSingle} from "../components";


function Detail() {
	let id = useParams();
	const {products} = useSelector((state) => state.getProducts);

	const [currentProduct, setCurrentProduct] = useState();

	useEffect(() => {
		let currentP = products.find(product => product.id === parseInt(id.id));
		setCurrentProduct(currentP);
	}, [products]);



	return <div>
		<DetailSingle currentProduct={currentProduct}/>
	</div>;
}

export default Detail;
