import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Delete = () => {

  const [student, setStudent] = useState('')
  const { studentID } = useParams()
  const navigate = useNavigate()

  async function getData() {
    const response = await axios.get(`http://localhost:8000/students/${studentID}`)
    // console.log(response)

    const result = response.data
    setStudent(result)
    // console.log(result)
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteData = () => {
    axios.delete(`http://localhost:8000/delete/students/${studentID}`)
    alert('Data Deleted !!!')
    navigate('/show')
  }
  return (
    <div className='bg-warning w-50 mx-auto mt-5 text-light p-3 rounded-5'>
      <h2>Student Managment</h2>
      <h2>student ID -{student.id}</h2>
      <h2>First Name -{student.fname} {student.lname}</h2>
      <h2>Email -{student.email}</h2>
      <div className='text-light p-3'>
        <button onClick={deleteData} type='submit' className='btn btn-danger w-25 me-3'>YES</button>
        <NavLink to='/show'><button className='btn btn-success w-25'>NO</button></NavLink>
      </div>
    </div>
  )
}

export default Delete;