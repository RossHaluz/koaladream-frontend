import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8001';

export const addItemToOrder = createAsyncThunk('api/addItemToOrder', async(params, {rejectWithValue}) => {
    console.log(params);
    const {itemId, value} = params;
    try {
        const {data} = await axios.post(`/api/order/add-item/${itemId}`, value);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})