import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Store from './Store';

const EditStudent = () => {
    const Navigate = useNavigate()
    const indexData = useLocation().state.index;
    const contextData = useContext(Store)
    // console.log(indexData);


    const updateData ={
      Name : contextData.data[indexData].Name,
      Age : contextData.data[indexData].Age ,
      Course : contextData.data[indexData].Course ,
      Batch : contextData.data[indexData].Batch
    }


    function handleChange(e){
      updateData[e.target.name] = e.target.value;

    }

    const handleUpdate=()=>{
      // console.log('handleUpdate');
      // console.log(contextData.data[indexData]);
      contextData.data[indexData] = updateData;
      Navigate('/student')
    }
  return (
    <div>
       <h1>EditStudent</h1> 
       <label>Name</label>
       <input name='Name' placeholder={contextData.data[indexData].Name } type='text' onChange={handleChange}/>

       <label>Age</label>
       <input name='Age' placeholder={contextData.data[indexData].Age } type='Number' onChange={handleChange}/>

       <label>Course</label>
       <input name='Course' placeholder={contextData.data[indexData].Course } type='text' onChange={handleChange}/>

       <label>Batch</label>
       <input name='Batch' placeholder={contextData.data[indexData].Batch } type='text' onChange={handleChange}/><br/>

       <button onClick={handleUpdate}>Update Student</button>

       <button name='Batch' onClick={()=>Navigate('/student')}>Go back</button>
    </div>
  )
}

export default EditStudent