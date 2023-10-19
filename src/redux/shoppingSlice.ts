import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
    orderData: [],
};

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.productData = action.payload
        }
    }
});

export const {addToCart} = shoppingSlice.actions;
export default shoppingSlice.reducer;