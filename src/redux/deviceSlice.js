import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMobile: false
};

const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        toggleMobile: (state, action) => {
            state.isMobile = action.payload;
        }
    },
});

export const {toggleMobile} = deviceSlice.actions;

export default deviceSlice.reducer;