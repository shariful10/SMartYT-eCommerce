import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../../types";

interface StoreState {
	productData: Products[];
	userInfo: null | string;
	orderData: [];
}

const initialState: StoreState = {
	productData: [],
	userInfo: null,
	orderData: [],
};

export const shoppingSlice = createSlice({
	name: "shopping",
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const existingProduct = state.productData.find(
				(item: Products) => item._id === action.payload._id
			);

			if (existingProduct) {
				existingProduct.quantity += action.payload.quantity;
			} else {
				state.productData.push(action.payload);
			}
		},
		increaseQuantity: (state, action) => {
			const existingProduct = state.productData.find(
				(item: Products) => item._id === action.payload._id
			);
			existingProduct && existingProduct.quantity++;
		},
		decreaseQuantity: (state, action) => {
			const existingProduct = state.productData.find(
				(item: Products) => item._id === action.payload._id
			);

			if (existingProduct?.quantity === 1) {
				existingProduct.quantity === 1;
			} else {
				existingProduct && existingProduct.quantity--;
			}
		},
		deleteProduct: (state, action) => {
			state.productData = state.productData.filter(
				(item) => item._id !== action.payload
			);
		},
		resetCart: (state) => {
			state.productData = [];
		},
		addUser: (state, action) => {
			state.userInfo = action.payload;
		},
		deleteUser: (state) => {
			state.userInfo = null;
		}
	},
});

export const {
	addUser,
	addToCart,
	resetCart,
	deleteUser,
	deleteProduct,
	increaseQuantity,
	decreaseQuantity,
} = shoppingSlice.actions;
export default shoppingSlice.reducer;
