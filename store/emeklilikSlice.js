import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
    girisYili: '',
    primGun: '',
    yas: '',
    emeklilikDurumu: '',
}


const emeklilikSlice = createSlice({
    name: 'emeklilik',
    initialState,
    reducers:{

    }
})



export default emeklilikSlice.reducer;