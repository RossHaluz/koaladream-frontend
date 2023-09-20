import { createSlice } from '@reduxjs/toolkit';
import {
  getHitsItems,
  getItemsCategory,
  paginationItemsCategory,
  getItemDetails,
} from './operetions';

const initialState = {
  items: [],
  hitsItems: [],
  isLoading: false,
  currentPage: 1,
  totalPages: null,
  itemDetails: null,
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getHitsItems.pending](state, __) {
      state.isLoading = true;
    },
    [getHitsItems.fulfilled](state, action) {
      state.isLoading = false;
      state.hitsItems = action.payload;
    },
    [getItemsCategory.pending](state, action) {
      state.isLoading = true;
    },
    [getItemsCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload.getItems;
      state.currentPage = action.payload.meta.page;
      state.totalPages = action.payload.meta.totalPages;
    },
    [paginationItemsCategory.pending](state, action) {
      state.isLoading = true;
    },
    [paginationItemsCategory.fulfilled](state, action) {
      state.isLoading = false;
      state.items = [...state.items, ...action.payload.getItems];
    },
    [getItemDetails.pending](state, action) {
      state.isLoading = true;
    },
    [getItemDetails.fulfilled](state, action) {
      state.isLoading = false;
      state.itemDetails = action.payload;
    },
  },
});

export const { changePage } = itemSlice.actions;

export const itemReducer = itemSlice.reducer;
