import React, { useContext } from 'react'
import { Store } from './ContextStore'

const A = () => {
    const contextData = useContext(Store)
    console.log(contextData)
  return (
    <>
    <h1>{contextData.data.name}</h1>
    
    </>
  )
}

export default A






































// import React, { useState } from 'react'
// import B from './B'

// const A = () => {
//     const [data]= useState('Taushif') 
//   return (
//     <>
//     <B text={data}/>
//     </>
//   )
// }

// export default A