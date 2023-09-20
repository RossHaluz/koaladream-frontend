import { createSlice } from '@reduxjs/toolkit';
import { addFilter } from './operetions';

const initialState = {
  filters: [],
};

const filterAdminSlice = createSlice({
  name: 'filterAdmin',
  initialState,
  reducers: {},
  extraReducers: {
    [addFilter.fulfilled](state, action) {
      state.filters.push(action.payload);
    },
  },
});

export const filterAdminReducer = filterAdminSlice.reducer;
