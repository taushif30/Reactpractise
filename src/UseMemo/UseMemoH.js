import React, { useMemo, useState } from 'react'

const UseMemoH = () => {
    const[count,setCount] = useState(0)
    const[data,setData] = useState(1)


    const callCount = useMemo( () =>{
         console.log('call Count function ')
         return count * 5;
    },[count])


    //USE-MEMO : -
    //stop re rendering : like srf count jb state change krega tb hi re render hoga      callCount, jbdata hit hog BUTTON  tb re-render nhi hoga.

    //MEMOIZED : to cache a calculation between re-render. -|| when we are no changing 



  return (
    <>
    <h1>{callCount}</h1>

    <h2>Count value : {count}</h2>
    <h2>Data value  : {data}</h2>
    <button onClick={()=> setCount(count+1)}>Increase</button>
    <button onClick={()=> setData(data * 5)}>Multiply</button>
    
    </>
  )
}

export default UseMemoH