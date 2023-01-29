import { createSlice } from '@reduxjs/toolkit';

const sliceCategory = createSlice({
	name: 'category',
	initialState: {
		category: [],
	},
	reducers: {
		getAllCategory: (state, action) => {
			state.category = action.payload;
		},
	},
});

export const { getAllCategory } = sliceCategory.actions;
export default sliceCategory.reducer;
