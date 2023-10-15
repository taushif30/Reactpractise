import React, { useReducer } from 'react'

const initialState= 0;

const reducer =(state,action)=>{
    switch(action){
        case 'Increment' :
            return state + 1;
        case 'Decrement' : 
            return state - 1;
        default :
           return state
    }


}

const Compo = () => {

    // 
    const[count,dispatch] = useReducer(reducer,initialState)
    


  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={()=> dispatch('Increment')}>Increase</button>
    <button onClick={()=>dispatch('Decrement')}>Deccrease</button>
    
    </>
  )
}

export default Compo