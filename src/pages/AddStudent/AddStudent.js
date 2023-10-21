import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { database } from '../../config/FirebaseConfig';
import { toast } from 'react-toastify';
import './AddStudent.css'

const AddStudent = () => {

  const [drop, setDrop] = useState('');
  const value = collection(database, 'student')

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [courseId, setCourseId] = useState('');



  const [val, setVal] = useState([]);
  const zoom = collection(database, 'course')

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(zoom);
      // console.log(dbVal.docs[0]._document.data.value.mapValue.fields.courseName)
      console.log(dbVal)
        var course = (JSON.stringify(dbVal.docs[0]._document.data.value.mapValue.fields.courseName.stringValue))

      let stringCourse = eval(course.length - 1)
      // console.log(stringCourse)
      let abc = course.slice(1, stringCourse);
      // console.log(abc)
      setVal(abc)

      // setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    (getData())
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDoc(value, { studentId: id, studentName: name, studentContact: contact, studentCourseId: courseId });
    setId('')
    setName('')
    setContact('')
    setCourseId('')
    console.log(drop)
    setDrop('')

    toast.success('Student added successfully');


  }


  return (
    <div className='text-center'>
      <br></br>
      <h1 className='first'>Add Student</h1>
      <br></br><br></br>
      <Link to={'/'} className='btn btn-outline-primary' >Go to Dashboard</Link>

      <form onSubmit={handleSubmit} action="" className='my-4'>
        <label htmlFor="studentId">Enter Student Id: </label>
        <input onChange={(e) => setId(e.target.value)} value={id} type="number" name="studentId" id="studentId" /><br /><br />

        <label htmlFor="studentName">Enter Student Name:</label>
        <input onChange={(e) => setName(e.target.value)} value={name} type="name" name="studentName" id="studentName" /><br /><br />

        <label htmlFor="studentContact">Enter Student Contact:</label>
        <input onChange={(e) => setContact(e.target.value)} value={contact} type="number" name="studentContact" id="studentContact" /><br /><br />


        <select onChange={(e) => setDrop(e.target.value)} value={drop} id="select1">
          <option value="free"></option>
          <option value="free">{val}</option>
          <option value="basic">Python</option>
          <option value="premium">HTML</option>
        </select>


        <br />
        <br></br>
        <br></br>
        <button type='submit' className="btn btn-warning btn-sm">Submit</button>
      </form>
    </div>
  )
}

export default AddStudent