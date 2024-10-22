import React from 'react'
import Errors from './AboutPages/download.png' 
const ErrorPage = () => {
  return (
    <div className='mt-5 mx-auto'>
      <h1 className='text-danger'>Error This Page</h1>
      <img src={Errors} alt='Errors' width={500} height={400}/>
    </div>
  )
}

export default ErrorPage