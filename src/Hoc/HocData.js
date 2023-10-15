import React, { useState } from 'react'

const HocData = () => {
    const [count,setCount] = useState(0);
  return (
    <>
    <h1>Higher order Components</h1>
    <h3>Value of Count : {count}</h3>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <button onClick={()=> setCount(count-1)}>Decrement</button>
    </>
  )
}

export default HocData