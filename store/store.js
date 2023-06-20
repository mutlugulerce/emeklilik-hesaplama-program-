import { configureStore } from "@reduxjs/toolkit";
import emeklilikReducer from './emeklilikSlice'

const store = configureStore({
    reducer: {
        emeklilik: emeklilikReducer,
    }
});


export default store;