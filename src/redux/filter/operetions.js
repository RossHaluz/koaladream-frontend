import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://koaladream.onrender.com';

export const getAllFilters = createAsyncThunk('api/getAllFilters', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/filter/get-filters');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})