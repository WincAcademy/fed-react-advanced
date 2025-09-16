import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Amsterdam",
    coordinates: null
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocationName: (state, action) => {
            state.name = action.payload;
        },
        setLocationCoordinates: (state, action) => {
            state.coordinates = action.payload;
        },
    }
});

export const { setLocationName, setLocationCoordinates } = locationSlice.actions;
export default locationSlice.reducer;
