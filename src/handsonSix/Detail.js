import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
    const id = useParams()
    const back =  useNavigate();
    console.log(id);
  return (
    <>
    <h1>id number : {id.id}</h1>
    <button onClick={()=>back('/student')}>Back</button>
    </>
  )
}

export default Detail