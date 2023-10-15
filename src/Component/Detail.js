import React from 'react'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
    const Back = useNavigate()
  return (
    <>
    <h1>This is detail Page.</h1>
    <button onClick={()=>Back(-1)}>Back</button>
    </>
  )
}

export default Detail