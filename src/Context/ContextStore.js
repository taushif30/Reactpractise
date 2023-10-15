import React, { createContext, useState } from 'react'
import A from './A';
import C from './C';
import E from './E';
export const Store = createContext();


const ContextStore = (props) => {
    const [data,setData] = useState({
        name:'Ea24',
        Year :2023
    })

    
  return (
    <Store.Provider value={{data,setData}}>
        {/* <A/>
        <C/>
        <E/> */}
        {props.children}

    </Store.Provider>

    
  )
}

export default ContextStore