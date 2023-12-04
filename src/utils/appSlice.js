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
    },
});

export const {toggleSideBar} = appSlice.actions;
export default appSlice.reducer;