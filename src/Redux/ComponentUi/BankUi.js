import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, selectBal, withdraw } from '../SliceCompo/SliceBank';

const BankUi = () => {
    const dispatch = useDispatch();
    const balance = useSelector(selectBal);
    const [data,setData] = useState({amount : 0})



      const handleChange =(e) =>{
        setData({...data, [e.target.name] : e.target.value})
      }


      const handleDeposit =() =>{
        dispatch(deposit( parseInt(data.amount)))

      }

      const handleWithdraw=()=>{
        dispatch(withdraw(parseInt(data.amount)))

      }

  return (
    <>
    <h2>Amount in your account : {balance}</h2>
    <input type='number' name='amount' value={data.amount} onChange={handleChange} /><br/>
    <button onClick={handleDeposit}>Deposit</button>
    <button onClick={handleWithdraw}>Withdraw</button>
    </>
  )
}

export default BankUi