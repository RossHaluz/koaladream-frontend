import { createSlice } from '@reduxjs/toolkit';
import { addFilter, getFilters, deleteFilter, getFilter, updateFilter } from './operetions';
import { toast } from 'react-toastify';

const initialState = {
  filters: [],
  filter: null
};

const filterAdminSlice = createSlice({
  name: 'filterAdmin',
  initialState,
  reducers: {},
  extraReducers: {
    [addFilter.fulfilled](state, action) {
      state.filters.push(action.payload);
    },
    [getFilters.fulfilled](state, action){
      state.filters = action.payload;
    },
    [deleteFilter.fulfilled](state, action){
     state.filters = state.filters.filter(item => item._id !== action.payload.item._id)
    },
    [getFilter.fulfilled](state, action){
      state.filter = action.payload.getFilter;
      state.filters = action.payload.filters;
    },
    [updateFilter.fulfilled](state, action){
      const findIndex = state.filters.findIndex(item => item._id === action.payload._id);
      state.filters[findIndex] = action.payload;
      toast('Filter success update')
    }
  },
});

export const filterAdminReducer = filterAdminSlice.reducer;
