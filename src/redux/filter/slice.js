import { createSlice } from "@reduxjs/toolkit";
import { getAllFilters } from "./operetions";

const initialState = {
    filters: []
}

const filterSlice = createSlice({
    name: 'filter', 
    initialState,
    reducers:{},
    extraReducers:{
        [getAllFilters.fulfilled](state, action){
            state.filters = action.payload;
        }
    }
})

export const filterRuducer = filterSlice.reducer;