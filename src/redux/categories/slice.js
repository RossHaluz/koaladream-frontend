import { createSlice } from "@reduxjs/toolkit";
import { getCategories, createCategory, getAllCategories, deleteCategory, getCategory, updateCategory } from "./operetions";
import { toast } from "react-toastify";

const initialState  = {
    categories: [],
    category: null,
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
        },
        [createCategory.pending](state, action){
            state.isLoading = true;
        },
        [createCategory.fulfilled](state, action){
            state.isLoading = false;
            state.categories?.push(action.payload);
        },
        [getAllCategories.pending](state, action){
            state.isLoading = true;
        },
        [getAllCategories.fulfilled](state, action){
            state.isLoading = false;
            state.categories = action.payload;
        },
        [deleteCategory.pending](state, action){
            state.isLoading = true;
        },
        [deleteCategory.fulfilled](state, action){
            state.isLoading = false;
            state.categories = state.categories.filter(item => item._id !== action.payload.category._id);
        },
        [getCategory.pending](state, action) {
            state.isLoading = true
        },
        [getCategory.fulfilled](state, action) {
            state.isLoading = false;
            state.category = action.payload.category;
            state.categories = action.payload.categories;
        },
        [updateCategory.pending](state, action) {
            state.isLoading = true;
        },
        [updateCategory.fulfilled](state, action){
            state.isLoading = false;
           const findIndex = state.categories.findIndex(item => item._id === action.payload._id);
           state.categories[findIndex] = action.payload;
           toast('Category succes update');
        }

    }
})

export const {isOpenCatalog, isCloseCatalog} = categorySlice.actions;
export const categoriesReducer = categorySlice.reducer;