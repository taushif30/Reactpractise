import React, { useState } from 'react'
import { BrowserRouter, NavLink, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import Store from './Store'
import EditStudent from './EditStudent'
import AddStudent from './AddStudent'
import Detail from './Detail'

const RouteCompo = () => {
  const[stuData,setStuData] = useState([
    {id:1,Name:'John' ,Age:25, Course:'MERN' , Batch:'Oct'},
    {id:2,Name:'Doe' ,Age:25, Course:'MERN' , Batch:'Nov'},
    {id:3,Name:'Biden' ,Age:25, Course:'MERN' , Batch:'Sep'},
    {id:4,Name:'Barar' ,Age:25, Course:'MERN' , Batch:'Dec'},
    {id:5,Name:'Christ' ,Age:25, Course:'MERN' , Batch:'Nov'},
  ])
  // console.log(studata);
  return (
  <>

    

    <BrowserRouter>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/student'>Student</NavLink>
    <NavLink to='/contact'>Contact Us</NavLink>



    <Routes>
        <Route path='/' element={<Home/>}/>


        <Route path='/student' element={
          <Store.Provider value={{ data: stuData,  dataFunc: setStuData}}> 
            <Student/>
          </Store.Provider>
        }/>



        <Route path='/contact' element={<Contact/>}/>
        <Route path='/editStudent' element={
        <Store.Provider value={{ data: stuData,  dataFunc: setStuData}}> 
            <EditStudent/>
          </Store.Provider>}
          />
        <Route path='/addStudent' element={<Store.Provider value={{ data: stuData,  dataFunc: setStuData}}> 
            <AddStudent/>
          </Store.Provider>}
          />
          <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteCompo