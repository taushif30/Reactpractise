import React, { useContext } from 'react'
import {  useNavigate } from 'react-router-dom'
import Store from './Store'

const AddStudent = () => {

    const back = useNavigate()
    const stuData = useContext(Store)
    console.log(stuData)


    const newStu= {
      Name :'',
      Age: '',
      Batch:'',
      Course:''
    }


    const changeHandle=(e)=>{
      newStu[e.target.name] = e.target.value
    }

    function handleAddUpdate() {
      stuData.data.push(newStu)
      back('/student')

    }





  return (
    <>
       <h1>EditStudent</h1> 
       <label>Name</label>
       <input name='Name' placeholder='Enter Name' type='text' onChange={changeHandle}/>

       <label>Age</label>
       <input name='Age' placeholder='Enter Name' type='Number' onChange={changeHandle}/>

       <label>Course</label>
       <input name='Course' placeholder='Enter Name' type='text' onChange={changeHandle}/>

       <label>Batch</label>
       <input name='Batch' placeholder='Enter Name' type='text' onChange={changeHandle}/><br/>

       <button onClick={handleAddUpdate}>Add Student</button>

    <button onClick={()=>back('/student')}>Back</button>
    </>
  )
}

export default AddStudent