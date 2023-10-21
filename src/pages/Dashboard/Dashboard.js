import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';
import { link, Navigate } from 'react-router-dom'


const Dashboard = () => {

  const Navigate = useNavigate()
  
const signoff = () => {
  localStorage.clear();
  signOut(auth).then(val =>{
Navigate('/registration')
  });
}

  return (
    <div className='text-center'>
      <br></br>
      <div className='bb'> 
      <br></br>
      <h1 className='first'>Dashboard</h1></div>
   
    <br></br>
    <br></br>
    <br></br>

      <div className ='second'>

      
       <h5>Click For Add New Student</h5> 
        <Link to={'/addstudent'} className="btn btn-success btn-sm mx-2">Add student</Link>
        <br></br>
        <br></br>
      
   
       
        <h5>Click For Add New Course</h5> 
        <Link to={'/addcourse'} className="btn btn-success btn-sm mx-2">Add Course</Link>
        <br></br>
        <br></br>

        <h5>Click For Today Attendance</h5> 
        <Link to={'/attendance'} className="btn btn-success btn-sm mx-2">Attendance</Link>
        <br></br>
        <br></br> 

<button onClick={ signoff } className='btn btn-danger btn-sm mx-2'> Sign Out</button>

      </div>
    </div>
  )
}

export default Dashboard