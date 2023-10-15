import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance:0
}

const BankSlice = createSlice({
    name : "Bank_Detail",
    initialState,
    reducers : {
        deposit : (state,action) => {
            state.balance += action.payload;
        },

        withdraw : (state, action) =>{
            action.payload <= state.balance ?  state.balance -= action.payload : alert('Insufficient Balance')
        }
    }
})

export const {deposit, withdraw} = BankSlice.actions;
export default BankSlice.reducer;
export const selectBal = (state) => state.bank.balance


















// import React from 'react'

// const SliceBank = () => {
//   return (
//     <>
//     <h1>SliceBank</h1>
//     </>
//   )
// }

// export default SliceBank