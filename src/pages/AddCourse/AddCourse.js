import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { database } from '../../config/FirebaseConfig';
import { toast } from 'react-toastify';
import './AddCourse.css'

const AddCourse = () => {


  const value = collection(database, 'course')

  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [CourseCode, setCourseCode] = useState('');
  const [courseDesc, setCourseDesc] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(value, { courseId: courseId, courseName: courseName, CourseCode: CourseCode, courseDesc: courseDesc });
    setCourseId('')
    setCourseName('')
    setCourseCode('')
    setCourseDesc('')
    toast.success('Course added successfully');


  }

  return (
    <div className='text-center'>
      <h1 className='first'>Add Course</h1>
      <br></br>
      <Link to={'/'} className='btn btn-outline-primary' >Go to Dashboard</Link>

      <form onSubmit={handleSubmit} action="" className='my-4'>
        <label htmlFor="studentId">Enter Course Id:</label>
        <input className='sec' onChange={(e) => setCourseId(e.target.value)} value={courseId} type="number" name="courseId" id="courseId" /><br /><br />

        <label htmlFor="studentName">Enter Course Name:</label>
        <input className='sec' onChange={(e) => setCourseName(e.target.value)} value={courseName} type="name" name="courseName" id="courseName" /><br /><br />

        <label htmlFor="studentContact">Enter Course Code:</label>
        <input className='sec' onChange={(e) => setCourseCode(e.target.value)} value={CourseCode} type="number" name="courseCode" id="courseCode" /><br /><br />

        <label htmlFor="studentContact">Enter Course Description:</label>
        {/* <input onChange={(e) => setCourseDesc(e.target.value)} value={courseDesc} type="textarea" name="courseDesc" id="courseDesc" /> */}
        <textarea  onChange={(e) => setCourseDesc(e.target.value)} value={courseDesc} name="courseDesc" id="" cols="30" rows="10"></textarea>

        <br />
        <button type='submit' className="btn btn-warning btn-sm">Submit</button>
      </form>
    </div>
  )
}

export default AddCourse;