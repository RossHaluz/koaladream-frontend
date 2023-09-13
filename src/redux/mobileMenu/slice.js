import { createSlice } from "@reduxjs/toolkit";;

const mobileMenuSlice = createSlice({
    name: 'menu',
    initialState:{
        isOpne: false
    },
    reducers: {
        openMenu: (state, action) => {
            state.isOpne = action.payload;
        },
        closeMenu: (state, action) => {
            state.isOpne = action.payload;
        }
    }
})

export const {openMenu, closeMenu} = mobileMenuSlice.actions;
export const mobileMenuReducer = mobileMenuSlice.reducer;