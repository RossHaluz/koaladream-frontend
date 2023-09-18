import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8000';

export const getHitsItems = createAsyncThunk('api/getHitsItems', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/item/get-hitsItems');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getItemsCategory = createAsyncThunk('api/ge', async(params, {rejectWithValue}) => {
    const {category, getPage} = params;
    try {
        const {data} = await axios.get(`/api/item/get-items/${category}?page=${getPage}&limit=12`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const paginationItemsCategory = createAsyncThunk('api/paginationItemsCategory', async(params, {rejectWithValue}) => {
    const {category, page=1} = params;
try {
    const {data} = await axios.get(`/api/item/get-items/${category}?page=${page}&limit=12`);
        return data;
} catch (error) {
    return rejectWithValue(error.message)
}
})