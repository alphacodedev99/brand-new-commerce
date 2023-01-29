export const fetchCategory = async (category) => {
	let data = await fetch(
		`https://dummyjson.com/products/category/${category}`
	);
	return data.json();
};
