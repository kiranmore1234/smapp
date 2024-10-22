import axios from 'axios'
import React, { useState } from 'react'
import StudentDatails from './StudentDetails'
const StudentLogin = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loggedIn,setloggedIn] = useState()

    async function handleLogin () {
        const response = await axios.get('http://localhost:8080/students')
        const result = response.data
        const student = result.find((stu)=>stu.email === email && stu.password === password)

        if(student) {
            setloggedIn(student)
            alert('Login Successfull !!!')
        }else{
            alert('Wrong Username and Password !!!')
            setEmail('')
            setPassword('')
        }
    }

    const handleLogOut = () =>{
        setloggedIn()
        setEmail('')
        setPassword('')
    }
    if(loggedIn) {
        return <StudentDatails student={loggedIn} onLogout={handleLogOut}/>
    }
  return (
    <div className='bg-dark w-50 mx-auto p-4 mt-5 rounded-4'>
        <h2>Student Login</h2>
        <input
        type='email'
        className='form-control mb-4 p-2'
        placeholder='Enter Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type='password'
        className='form-control mb-4 p-2'
        placeholder='Enter Password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button className='btn btn-success w-25 p-3' onClick={handleLogin}>Login</button>
        </div>
  )
}

export default StudentLogin