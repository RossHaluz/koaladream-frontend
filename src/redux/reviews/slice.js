import { createSlice } from "@reduxjs/toolkit";
import { createReview, reviewsUser, getAllReviewsItem } from "./operetions";

const initialState = {
    reviews: [],
    reviewsItem: [],
    isLoading: false, 
}

const reviewSlice = createSlice({
    name: 'review', 
    initialState, 
    reducers: {},
    extraReducers: {
        [createReview.pending](state, __){
            state.isLoading = true;
        }, 
        [createReview.fulfilled](state, action){
            state.isLoading = false; 
        },
        [reviewsUser.pending](state, __){
            state.isLoading = true;
        },
        [reviewsUser.fulfilled](state, action) {
            state.isLoading = false;
           state.reviews = action.payload;
        },
        [getAllReviewsItem.pending](state, action){
            state.isLoading = true;
        },
        [getAllReviewsItem.fulfilled](state, action){
            state.isLoading = false;
            state.reviewsItem = action.payload;
        }
    }
})

export const reviewReducer = reviewSlice.reducer;