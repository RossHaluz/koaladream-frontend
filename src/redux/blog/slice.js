import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "./operetions";

const initialState = {
    posts: [],
    isLoading: false
}

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: {
        [getAllPosts.pending](state, action){
            state.isLoading = true
        },
        [getAllPosts.fulfilled](state, action){ 
            state.isLoading = false;
            state.posts = action.payload;
        }
    }
})

export const blogReducer = blogSlice.reducer;