import { configureStore } from '@reduxjs/toolkit';
import sliceCategory from './sliceCategory';

const store = configureStore({
	reducer: {
		getCategory: sliceCategory,
	},
});

export default store;
