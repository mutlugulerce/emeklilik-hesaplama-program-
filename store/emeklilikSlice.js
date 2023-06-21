import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    girisYili: '',
    primGun: '',
    yas: '',
    emeklilikDurumu: '',
}


export const emeklilikSlice = createSlice({
    name: 'emeklilik',
    initialState,
    reducers:{
        setEmeklilikDurumu: (state, action) => {
            state.emeklilikDurumu = action.payload;
          },
    }
})


export const {setEmeklilikDurumu} = emeklilikSlice.actions;
export default emeklilikSlice.reducer;