import { createSlice } from '@reduxjs/toolkit';

const sliceProduct = createSlice({
	name: 'product',
	initialState: {
		products: [],
	},
	reducers: {
		getAllProduct: (state, action) => {
			state.products = action.payload;
		},
	},
});

export const { getAllProduct } = sliceProduct.actions;
export default sliceProduct.reducer;
