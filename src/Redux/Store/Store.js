import { configureStore } from "@reduxjs/toolkit";
import BankSlice from "../SliceCompo/SliceBank";

const Store = configureStore({
    reducer: {
        bank : BankSlice
    }
})

export default Store









