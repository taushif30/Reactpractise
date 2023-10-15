import { useState } from "react"
import Child from "./Child"
import ClasssCompo from "./ClasssCompo";
import Func from './Func'

const Parent =() =>{

  const [arr ,setArr] =  useState({
    Name : 'Taushif',
    age:24,
    course:'MERN'
  
  });

 

  return(
    <div>
      
      <Child data={{arr}}/>
      <ClasssCompo value= {{arr,setArr}}/>
      <Func send={{arr}}/>

    
    </div>
  )
}

export default Parent