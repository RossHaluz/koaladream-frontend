import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'http://localhost:8000';

export const getCategories = createAsyncThunk('api/getCategories', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/category/get-categories');
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})