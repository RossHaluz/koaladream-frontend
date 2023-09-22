import { createSlice } from '@reduxjs/toolkit';
import {
  createOption,
  getOptions,
  deleteOption,
  getOption,
  updateOption,
} from './operetions';
import { toast } from 'react-toastify';

const initialState = {
  options: [],
  option: null,
};

const optionsSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {},
  extraReducers: {
    [createOption.fulfilled](state, action) {
      console.log(action.payload);
      state.options.push(action.payload);
    },
    [getOptions.fulfilled](state, action) {
      state.options = action.payload;
    },
    [deleteOption.fulfilled](state, action) {
      state.options = state.options.filter(
        item => item._id !== action.payload.option._id
      );
    },
    [getOption.fulfilled](state, action) {
      state.option = action.payload.option;
      // state.options = action.payload.options;
    },
    [updateOption.fulfilled](state, action) {
      const findIndex = state.options.findIndex(
        item => item._id === action.payload._id
      );
      state.options[findIndex] = action.payload;
      toast('Success update');
    },
  },
});

export const optionsReduser = optionsSlice.reducer;
