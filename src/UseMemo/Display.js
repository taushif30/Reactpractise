import React,{memo} from 'react'

const Display = ({session}) => {
    console.log('callback components...')
    // console.log(session);
  return (
    <>
    <h1>Heloo</h1>
    <button onClick={session}>Inc from child</button>
    </>
  )
}

export default memo(Display)