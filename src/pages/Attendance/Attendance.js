import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { database } from '../../config/FirebaseConfig';
import { toast } from 'react-toastify';
import './Attendance.css'

const Attendance = () => {
  const [val, setVal] = useState([]);
  const value = collection(database, 'student')

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    getData()
  });



  return (
    <div className='text-center'>
       <br></br>
      <h1 className='first'>Attendance</h1>
      <br></br>
      <Link to={'/'} className='btn btn-primary' >Go to Dashboard</Link>

      <br></br>
      <br></br>

      {
        val.map(values =>
          <div className='border py-1 d-flex'>
            <p className='p-0 m-0'><b>Student Id: </b>{values.studentId}</p>
            <p className='p-0 m-0'><b>Student Name: </b>{values.studentName}</p>
            <p className='p-0 m-0'><b>Student Contact: </b>{values.studentContact}</p>
            <div class="btn-group" role="group" data-bs-toggle="buttons">
              <input type="checkbox" class="me-2" name="" id="" autocomplete="off" />

            </div>
          </div>
        )
      }


    </div>
  )
}

export default Attendance