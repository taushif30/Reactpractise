import React, { useCallback, useMemo, useState } from 'react'
import Display from './Display'

const CallbackHook = () => {
    const[count,setCount] = useState(0)
    const[data,setData] = useState(1)

    const callBackFunction = useCallback(()=>{
        console.log('DATA FROM CHILD');
        setData(data + 10)

    },[data])

   
  return (
    <>
    <Display session={callBackFunction}/>
    <h2>Count value : {count}</h2>
    <h2>Data value  : {data}</h2>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    {/* <button onClick={()=> setData(data * 5)}>Multiply</button> */}
    </>
  )
}

export default CallbackHook