import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';

export const addFilter = createAsyncThunk(
  'api/addFilter',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/filter/add-filter', params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilters = createAsyncThunk('api/getFilters', async(__, {rejectWithValue}) => {
  try {
    const {data} = await axios.get('/api/filter/get-filters');
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const deleteFilter = createAsyncThunk('api', async(filterId, {rejectWithValue}) => {
  try {
    const {data} = await axios.delete(`/api/filter/delete-filter/${filterId}`); 
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const getFilter = createAsyncThunk('api/getFilter', async(filterId, {rejectWithValue}) => {
  try {
    const {data} = await axios.get(`/api/filter/get-filter/${filterId}`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const updateFilter = createAsyncThunk('api/updateFilter', async(params, {rejectWithValue}) => {
  const { value, filterId } = params;
  try {
    const {data} = await axios.put(`/api/filter/update-filter/${filterId}`, value);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})