import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_MAX_COUNT } from "./constants";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        messages:[

        ]
    },
    reducers:{
        addMessage: (state, action) =>{
            state.messages.splice(LIVE_CHAT_MAX_COUNT, 1)
            state.messages.unshift(action.payload);
        },
    },
});


export const {addMessage} = commentsSlice.actions;
export default commentsSlice.reducer;