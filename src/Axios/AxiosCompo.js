import axios from 'axios'
import React, { useEffect, useState } from 'react'



const AxiosCompo = () => {
    const APIkey = 'a79c655ed5062db4d695925b1d0a01c1'

    const[name,setName] = useState('')
    const[values,setValues] = useState('')
    const [cityName,setCityName] = useState('')

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
    .then((response) => setValues(response.data))
    .catch((err)=> console.log(err))

    },[cityName])
    console.log(values);

    const handleClick =()=>{
        setCityName(name)

    }

    

  return (
    <>
    <h1>Axios</h1>
    <h1>City name  {name}</h1>
    <label>City Name : </label>
    <input type='text' placeholder='c n' onChange={(e)=>setName(e.target.value)}/><br/>
    <button onClick={handleClick}>Search</button>

    <h1>City Name : {name && values.name} </h1>
    <h1>City temp : {values && values.main.temp - 273} deg</h1>
    <h1>Sky Type : {values && values.weather[0].main}</h1>
    
    </>
  )
}

export default AxiosCompo


















// a79c655ed5062db4d695925b1d0a01c1
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}