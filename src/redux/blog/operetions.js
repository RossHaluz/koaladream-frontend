import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllPosts = createAsyncThunk('api/getAllPosts', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/blog/get-posts');
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})