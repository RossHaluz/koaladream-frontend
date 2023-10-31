import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createReview = createAsyncThunk('api/createReview', async(params, {rejectWithValue}) => {
const {itemId, data: values} = params

    try {
        const {data} = await axios.post(`/api/reviews/create-review/${itemId}`, values); 
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const reviewsUser = createAsyncThunk('api/reviewsUser', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/reviews/get-reviews');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getAllReviewsItem = createAsyncThunk('api/getAllReviewsItem', async(itemId, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/reviews/reviews-item/${itemId}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})