import { createSlice } from '@reduxjs/toolkit';

const sliceCart = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		storeCart: (state, action) => {
			let copyCart = [...state.cart];

			let findIndex = null;
			copyCart.find((el, index) => {
				if (el.id === action.payload.id) {
					findIndex = index;
					return;
				}
			});

			if (findIndex === null) {
				copyCart.push({ ...action.payload, count: 1 });
			} else {
				copyCart[findIndex].count++;
			}

			state.cart = copyCart;
			localStorage.setItem('cart', JSON.stringify(copyCart));
			console.log(copyCart);
		},
		restoreCart: (state, action) => {
			if (localStorage.hasOwnProperty('cart')) {
				state.cart = JSON.parse(localStorage.getItem('cart'));
			}
		},
	},
});

export const { storeCart, restoreCart } = sliceCart.actions;
export default sliceCart.reducer;
