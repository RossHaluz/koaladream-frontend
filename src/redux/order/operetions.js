import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8001';

export const createNewOrder = createAsyncThunk('api/createNewOrder', async(params, {rejectWithValue}) => {
    try {
       const {data} = await axios.post('/api/order/create-order', params);
       return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getOrders = createAsyncThunk('api/getOrders', async(__, {rejectWithValue}) => {
try {
    const {data} = await axios.get('/api/order/get-orders');
    return data
} catch (error) {
    return rejectWithValue(error.message);
}
})

export const deleteOrder = createAsyncThunk('api/deleteOrder', async(orderId, {rejectWithValue}) => {
    try {
        const {data} = await axios.delete(`/api/order/delete-order/${orderId}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getOrder = createAsyncThunk('api/getOrder', async(orderId, {rejectWithValue}) => {

    try {
        const {data} = await axios.get(`/api/order/get-order/${orderId}`);
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})