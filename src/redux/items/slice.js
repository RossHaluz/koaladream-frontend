import { createSlice } from '@reduxjs/toolkit';
import {
  getHitsItems,
  getItemsCategory,
  paginationItemsCategory,
  getItemDetails,
  addItem,
  getAllItems,
  updateItem,
  deleteItem,
  filterItems
} from './operetions';
import { toast } from 'react-toastify';

const initialState = {
  items: [],
  hitsItems: [],
  isLoading: false,
  currentPage: 1,
  totalPages: null,
  itemDetails: null,
  count: 1
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
    setCount(state, action) {
      state.count = action.payload;
    }
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
    [addItem.pending](state, action){
      state.isLoading = true;
    },
    [addItem.fulfilled](state, action){
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [getAllItems.pending](state, action){
      state.isLoading = true;
    },
    [getAllItems.fulfilled](state, action){
      state.isLoading = false;
      state.items = action.payload;
    },
    [updateItem.pending](state, action) {
      state.isLoading = true;
    },
    [updateItem.fulfilled](state, action){
      const findIndex = state.items.findIndex(item => item._id === action.payload._id);
     state.items[findIndex] = action.payload;
      state.isLoading = false;
    },
    [deleteItem.pending](state, action){
      state.isLoading = true;
    },
    [deleteItem.fulfilled](state, action){
      state.isLoading = false;
      state.items = state.items.filter(item => item._id !== action.payload.item._id);
      toast(action.payload.message)
    },
    [filterItems.pending](state, action){
      state.isLoading = true;
    },
    [filterItems.fulfilled](state, action){
      state.isLoading = false;
      state.items = action.payload;
    }
  },
});

export const { changePage, setCount } = itemSlice.actions;

export const itemReducer = itemSlice.reducer;
