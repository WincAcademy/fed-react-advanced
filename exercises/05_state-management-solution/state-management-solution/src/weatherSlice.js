import { createSlice } from "@reduxjs/toolkit";
import { sunnyWeather } from "./utils/data";

const initialState = {
    currentWeather: sunnyWeather,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (state, action) => {
            state.currentWeather = action.payload;
        },
    },
});

export const { setWeather } = weatherSlice.actions;
export default weatherSlice.reducer;
