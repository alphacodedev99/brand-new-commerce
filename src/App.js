import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

// Component on all pages
import {
	Navbar,
	Footer,
	Subscribe,
	CategoryHolder,
} from './components';
import { getAllProduct } from './store/sliceProduct';
import { fetchAllProduct } from './utils/fetchAllProduct';
// redux
function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		fetchAllProduct().then((data) =>
			dispatch(getAllProduct(data.products))
		);
	}, []);

	return (
		<div>
			<Navbar />
			<CategoryHolder />
			<div className='container mx-auto'>
				<Outlet />
			</div>
			<Subscribe />
			<Footer />
		</div>
	);
}

export default App;
