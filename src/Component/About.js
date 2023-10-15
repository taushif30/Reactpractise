import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const[data,setData] = useState([

    {name : 'Ea24', id:1},
    {name : 'Ea25', id:2},
    {name : 'Ea26', id:3},
    {name : 'Ea27', id:4}
    
  ])
  return (
    <div>

    <h1>This is About Page</h1>
      {data.map((item,index)=>{
      return(
        <div key={index}>
          <Link to={'/user/'+item.id}><h4>{item.name}</h4></Link>
        </div>
      )
     })}

    </div>
  )
}

export default About