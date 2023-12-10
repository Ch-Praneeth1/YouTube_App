import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import commentsSlice from "./commentsSlice"


const store = configureStore({
    reducer:{
        app: appSlice,
        search: searchSlice,
        chat: commentsSlice,
    },
});

export default store;