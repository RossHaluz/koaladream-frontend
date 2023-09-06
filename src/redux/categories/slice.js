import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operetions";

const initialState  = {
    categories: [],
    isLoading: false,
}

const categorySlice = createSlice({
    name: 'category',
    initialState: {initialState},
    reducers: {},
    extraReducers: {
        [getCategories.pending](state, __){
            state.isLoading = true;
        },
        [getCategories.fulfilled](state, action) {
            state.isLoading = false;
            state.categories = action.payload;
        }
    }
})

export const categoriesReducer = categorySlice.reducer;