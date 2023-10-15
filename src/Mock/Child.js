import React,{ useReducer} from 'react'

const initialState = {count :0};
function reducer (state,action){
    switch(action.type){
        case "increment":
            return {count : state.count+1};
        case "reset":
            return{count: 0}
        default:
            throw new Error();
    }
}

function Counter(){
    const [state,dispatch] = useReducer(reducer,initialState);
    return(
        <>
        count: {state.count}
        <button onClick={()=>dispatch({type : "increment"})}>Increment</button>
        <button onClick={()=>dispatch({type : "reset"})}>reset</button>
        
        </>
    )
}

export default Counter