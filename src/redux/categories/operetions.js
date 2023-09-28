import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8001';

export const getCategories = createAsyncThunk('api/getCategories', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/category/get-categories');
        return data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const createCategory = createAsyncThunk('api/createCategory', async(params, {rejectWithValue}) => {
    console.log(params);

    try {
        const {data} = await axios.post('/api/category/create-category', params);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getAllCategories = createAsyncThunk('api/getAllCategories', async(__, {rejectWithValue}) => {
    try {
        const {data} = await axios.get('/api/category/all-categories');
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const deleteCategory = createAsyncThunk('api/deleteCategory', async(categoryId, {rejectWithValue}) => {
    try {
        const {data} = await axios.delete(`/api/category/delete-category/${categoryId}`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const getCategory = createAsyncThunk('api/getCategory', async(categoryId, {rejectWithValue}) => {
    try {
        const {data} = await axios.get(`/api/category/get-category/${categoryId}`);
        return data
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const updateCategory = createAsyncThunk('api/updateCategory', async(params, {rejectWithValue}) => {
const {categoryId, categoryData} = params;
    try {
        const {data} = await axios.put(`/api/category/update-category/${categoryId}`, categoryData);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})