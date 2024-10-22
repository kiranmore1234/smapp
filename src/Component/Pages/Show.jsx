import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Show = () => {

    const [searchName, setsearchName] = useState('')
    const [students, setStudents] = useState([])

    async function getdata() {
        const response = await axios.get('http://localhost:8000/students')
        console.log(response)

        const result = response.data
        console.log(result)
        setStudents(result)
    }

    useEffect(() => {
        getdata()
    }, [])

    const searchStudentname = students.filter((stu) => {
        return stu.fname.toLowerCase().includes(searchName.toLowerCase()) ||
            stu.lname.toLowerCase().includes(searchName.toLowerCase())
    })

    return (
        <div>
            <h2>Students Details - </h2>
            <div className='w-25 mx-auto mt-4 mb-4'>
                <input
                    type='text'
                    className='form-control'
                    onChange={(e) => setsearchName(e.target.value)}
                />
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>password</th>
                        <th>Choose Option</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchStudentname.map((stu, index) => {
                            return (
                                <tr key={index + 1}>
                                    <td>{stu.id}</td>
                                    <td>{stu.fname}</td>
                                    <td>{stu.lname}</td>
                                    <td>{stu.form}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.password}</td>
                                    <td>{stu.option}</td>
                                    <td>
                                        <NavLink to={`/update/student/${stu._id}`}><button className='btn btn-danger me-3'>Edit</button></NavLink>
                                        <NavLink to={`/delete/student/${stu._id}`}><button className='btn btn-warning'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div>
                <NavLink to='/register'><button className='btn btn-success'>Add Data</button></NavLink>
            </div>
        </div>
    )
}

export default Show;