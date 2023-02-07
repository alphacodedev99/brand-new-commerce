import { configureStore } from '@reduxjs/toolkit';
import sliceCart from './sliceCart';
import sliceCategory from './sliceCategory';
import sliceProduct from './sliceProduct';

const store = configureStore({
	reducer: {
		getCategory: sliceCategory,
		getProducts: sliceProduct,
		storeProduct: sliceCart,
	},
});

export default store;
