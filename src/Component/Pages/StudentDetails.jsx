import React from 'react'

const StudentDetails = ({onLogout, student}) => {
  return (
    <div>
      <h2 className='mb-4 mt-4 w-50 mx-auto bg-dark text-light rounded-4 p-3'>Student Details - {student.fname} {student.lname}</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Password</th>
            <th>Choose option</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{student._id}</td>
            <td>{student.fname}</td>
            <td>{student.lname}</td>
            <td>{student.dob}</td>
            <td>{student.gender}</td>
            <td>{student.email}</td>
            <td>{student.password}</td>
            <td>{student.option}</td>
          </tr>
        </tbody>
      </table>
      <button className='btn btn-danger' onClick={onLogout}>LogOut</button>
      </div>
  )
}

export default StudentDetails