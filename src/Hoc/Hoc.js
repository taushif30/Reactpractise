import React from 'react'

const Hoc = (props) => {
  return (
    <>
    <h1 style={{background:'red' ,width:'700px'} }>{<props.value/>}</h1>
    <h2 style={{background:'green' , width:'700px'} }>{<props.value/>}</h2>
    <h2>Data</h2>
    </>
  )
}

export default Hoc