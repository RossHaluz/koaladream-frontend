import { createSlice } from "@reduxjs/toolkit";
import { addItemToOrder } from "./operetions";

const initialState = {
    orderItems: [],
    isLoading: false,
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItemToCart(state, action) {
           state.orderItems.push(action.payload);
        },
        removeItemFromCart(state, action) {
            state.orderItems = state.orderItems.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: {
        [addItemToOrder.pending](state, action){
            state.isLoading = true;
        },
        [addItemToOrder.fulfilled](state, action){
            state.isLoading = false;
        }
    }
})

export const {addItemToCart, removeItemFromCart} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;