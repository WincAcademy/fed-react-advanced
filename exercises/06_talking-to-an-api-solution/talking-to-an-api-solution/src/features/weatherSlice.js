import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentWeather: null,
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
