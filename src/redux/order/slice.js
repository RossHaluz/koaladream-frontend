import { createSlice } from "@reduxjs/toolkit";
import { createNewOrder, deleteOrder, getOrders, getOrder } from "./operetions";

const initialState = {
    orders: [],
    orderItems: [],
    order: null,
    isLoading: false,
    dataFromOrder: null
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
        },
        setDataFromOrder(state, action) {
            state.dataFromOrder = action.payload
        },
        removeItemsFromCart(state, __) {
            state.orderItems = []
        }
    },
    extraReducers: {
      [createNewOrder.pending](state, action) {
        state.isLoading = true;
      },
      [createNewOrder.fulfilled](state, action){
        state.isLoading = false;
        state.orders.push(action.payload);
      },
      [getOrders.pending](state, action){
        state.isLoading = true;
      },
      [getOrders.fulfilled](state, action){
        state.isLoading = false;
        state.orders = action.payload;
      },
      [deleteOrder.pending](state, action){
        state.isLoading = true;
      },
      [deleteOrder.fulfilled](state, action){
        state.isLoading = false;
        state.orders = state.orders.filter(item => item._id !== action.payload._id);
      },
      [getOrder.pending](state, action){
        state.isLoading = true;
      },
      [getOrder.fulfilled](state, action){
        state.isLoading = false;
        state.order = action.payload;
      }
    }
})

export const {addItemToCart, removeItemFromCart, setDataFromOrder, removeItemsFromCart} = orderSlice.actions;
export const orderReducer = orderSlice.reducer;