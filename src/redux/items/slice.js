import { createSlice } from "@reduxjs/toolkit";
import { getHitsItems } from "./operetions";

const initialState = {
    items: [],
    hitsItems: [],
    isLoading: false
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: {
        [getHitsItems.pending](state, __){
            state.isLoading = true;
        },
        [getHitsItems.fulfilled](state, action){
            state.isLoading = false;
            state.hitsItems = action.payload;
        }
    }
})

export const itemReducer = itemSlice.reducer;