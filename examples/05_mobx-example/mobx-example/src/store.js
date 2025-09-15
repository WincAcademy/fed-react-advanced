import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterStore'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});