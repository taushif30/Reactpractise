import React, { useContext } from 'react'
import Store from './Store'
import {  NavLink, useNavigate } from 'react-router-dom';

const Student = () => {
    const displayData = useContext(Store);
    const Navi = useNavigate();
    
    // console.log(displayData.data);
  return (
<>
<h1>Student</h1>
<button onClick={()=>Navi('/addStudent')}>Add new student</button>

<table border='1px'>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
        </tr>
    </thead>

    <tbody>
        {displayData.data.map((item,index)=>{
            return(
                <tr key={index}>
                    
                    <NavLink to={`/detail/${item.id}`}>
                    <td>{item.id}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    </NavLink>
                    <td><NavLink to='/editStudent' state={{index}}>Edit</NavLink></td>
                </tr>
            )
        })}
    </tbody>
</table>


</>
    )
}

export default Student