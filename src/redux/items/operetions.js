import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';

export const getHitsItems = createAsyncThunk(
  'api/getHitsItems',
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/item/get-hitsItems');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getItemsCategory = createAsyncThunk(
  'api/ge',
  async (params, { rejectWithValue }) => {
    const { category, getPage = 1 } = params;
    try {
      const { data } = await axios.get(
        `/api/item/get-items/${category}?page=${getPage}&limit=12`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const paginationItemsCategory = createAsyncThunk(
  'api/paginationItemsCategory',
  async (params, { rejectWithValue }) => {
    const { category, page = 1 } = params;
    try {
      const { data } = await axios.get(
        `/api/item/get-items/${category}?page=${page}&limit=12`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getItemDetails = createAsyncThunk(
  'api/getItemDetails',
  async (itemId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/item/item-details/${itemId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItem = createAsyncThunk('api/addItem', async(params, {rejectWithValue}) => {
  try {
    const {data} = await axios.post('/api/item/add-item', params);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const getAllItems = createAsyncThunk('api/createAsyncThunk', async(__, {rejectWithValue}) => {
  try {
    const {data} = await axios.get('/api/item/all-items');
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const updateItem = createAsyncThunk('api/updateItem', async(params, {rejectWithValue}) => {
  const {itemId, data: value} = params;
  try {
    const {data} = await axios.post(`/api/item/update-item/${itemId}`, value);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const deleteItem = createAsyncThunk('api/deleteItem', async(itemId, {rejectWithValue}) => {
  try {
    const {data} = await axios.delete(`/api/item/delete-item/${itemId}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const filterItems = createAsyncThunk('api/filterItems', async(query, {rejectWithValue}) => {
  try {
    const {data} = await axios.get(`/api/item/filter-items?filters=${query}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})