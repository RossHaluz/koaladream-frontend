import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./operetions";

const initialState  = {
    categories: [],
    isLoading: false,
    isOpenCatalog: false,
}

const categorySlice = createSlice({
    name: 'category',
    initialState: {initialState},
    reducers: {
        isOpenCatalog: (state, action) => {
            state.isOpenCatalog = action.payload;
        },
        isCloseCatalog: (state, action) => {
            state.isOpenCatalog = action.payload;
        }
    },
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

export const {isOpenCatalog, isCloseCatalog} = categorySlice.actions;
export const categoriesReducer = categorySlice.reducer;