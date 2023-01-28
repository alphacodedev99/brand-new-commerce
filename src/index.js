import React from 'react';
import ReactDOM from 'react-dom/client';
// general style
import './index.css';
// routers
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
// pages for routing - clean import in one line
import App from './App';
import {
	Home,
	Product,
	Detail,
	Cart,
	Register,
	Login,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/product',
				element: <Product />,
			},
			{
				path: '/detail/:id',
				element: <Detail />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
