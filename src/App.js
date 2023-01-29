import { Outlet } from 'react-router-dom';

// Component on all pages
import {
	Navbar,
	Footer,
	Subscribe,
	CategoryHolder,
} from './components';
function App() {
	return (
		<div className='container mx-auto'>
			<Navbar />
			<CategoryHolder />
			<Outlet />

			{/* TODO: For now is hidden */}
			{/* <Subscribe />
			<Footer /> */}
		</div>
	);
}

export default App;
