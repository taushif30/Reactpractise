import React, { useState } from 'react'

const Control = () => {
    const[data,setData] = useState('')



  return (
    <>
    <div>Control</div>
    <input type='text'  onChange={(e)=>setData(e.target.value)}/>
    {data}
    </>
  )
}

export default Control