import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8001';

export const createOption = createAsyncThunk(
  'api/createOption',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/option/add-option', params);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOptions = createAsyncThunk(
  'api/getOptions',
  async (__, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/api/option/get-options');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOption = createAsyncThunk(
  'api/deleteOption',
  async (optionId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `/api/option/delete-option/${optionId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOption = createAsyncThunk(
  'api/getOption',
  async (optionId, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/api/option/get-option/${optionId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateOption = createAsyncThunk(
  'api/updateOption',
  async (params, { rejectWithValue }) => {
    const { optionId, value } = params;
    try {
      const { data } = await axios.put(
        `/api/option/update-option/${optionId}`,
        value
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
