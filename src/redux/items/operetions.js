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