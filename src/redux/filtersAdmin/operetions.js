import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

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
