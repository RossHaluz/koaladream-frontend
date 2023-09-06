import { toast } from "react-toastify";
import { loginUser, registerUser, logoutUser, currentUser, updateUser, changePassword } from "./operetions";
const { createSlice } = require("@reduxjs/toolkit");


const initialState = { 
    user: null,
    token: null,
    error: null,
    isLoging: false,
    isLoading: false, 
    isRefreshing: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending](state, action){
            state.isLoading = true;
        },
        [registerUser.fulfilled](state, action) {
            state.isLoading = false;
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoging = true;
            state.isRefreshing = true;
        },
        [registerUser.rejected](state, action){
            state.error = action.payload;
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.isLoging = false;
            state.isRefreshing = false;
        },
        [loginUser.pending](state, action){
            state.isLoading = true;
        }, 
        [loginUser.fulfilled](state, action){
            state.isLoading = false;
            state.user = action.payload;
            state.token = action.payload.token;
            state.isLoging = true;
            state.isRefreshing = true;
        },
        [loginUser.rejected](state, action){
            state.error = action.payload;
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.isLoging = false;
            state.isRefreshing = false;
        },
        [logoutUser.pending](state, __){
            state.isLoading = true;
        },
        [logoutUser.fulfilled](state, __) {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.isLoging = false;
            state.isRefreshing = false;
        },
        [logoutUser.rejected](state, action){
            state.error = action.payload
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.isLoging = false;
            state.isRefreshing = false;
        },
        [currentUser.pending](state, action){
            state.isLoading = true;
        },
        [currentUser.fulfilled](state, action){
            state.isLoading = false;
            state.user = action.payload;
            state.isLoging = true;
        },
        [updateUser.pending](state, __){ 
            state.isLoading = true;
        },
        [updateUser.fulfilled](state, action){ 
            state.isLoading = false;
            state.user = action.payload;
            toast("User data successfully update", {
                position: "bottom-right",
                autoClose: 5000,
                });
        },
        [changePassword.pending](state, __){
            state.isLoading = true;
        },
        [changePassword.fulfilled](state, action){ 
            state.isLoading = false;
            toast(`${action.payload.message}`, {
                position: "bottom-right",
                autoClose: 5000,
                });

        }
    }
})

export const authReducer = authSlice.reducer;