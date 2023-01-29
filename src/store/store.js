import { configureStore } from '@reduxjs/toolkit';
import sliceCategory from './sliceCategory';
import sliceProduct from './sliceProduct';

const store = configureStore({
	reducer: {
		getCategory: sliceCategory,
		getProducts: sliceProduct,
	},
});

export default store;
