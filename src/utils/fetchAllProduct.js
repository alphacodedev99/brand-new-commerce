export const fetchAllProduct = async () => {
	let data = await fetch('https://dummyjson.com/products');
	return data.json();
};
