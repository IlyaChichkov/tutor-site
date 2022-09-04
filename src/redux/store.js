import {configureStore, createSlice} from '@reduxjs/toolkit'
import deviceSlice from "./deviceSlice";

export default configureStore({
    reducer: {
        device: deviceSlice,
    }
})
