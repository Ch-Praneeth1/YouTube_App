import { createSlice } from "@reduxjs/toolkit";


const appSlice = createSlice({
    name: "app",
    initialState:{
        sideBarOpen: true,
    },

    reducers:{
        toggleSideBar: (state) =>{
            state.sideBarOpen = !state.sideBarOpen;
        },

        offSideBar: (state) =>{
            state.sideBarOpen = false;
        },
    },
});

export const {toggleSideBar, offSideBar} = appSlice.actions;
export default appSlice.reducer;