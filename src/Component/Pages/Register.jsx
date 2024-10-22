import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Register = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, reset } = useForm()

  const adddata = (data) => {
    axios.post("http://localhost:8000/students", data)
    alert('Data Added Successfully !!!')
    reset()
    navigate('/studentlogin')
  }
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration ">
                <div className="card-body p-4 p-md-5 bg-info rounded-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 fw-bold fs-2">Registration Form</h3>
                  <form onSubmit={handleSubmit(adddata)}>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="firstName" className="form-control form-control-lg" {...register("fname")} required />
                          <label className="form-label fw-bold fs-5" htmlFor="firstName">First Name</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" {...register("lname")} required />
                          <label className="form-label fw-bold fs-5" htmlFor="lastName">Last Name</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div data-mdb-input-init className="form-outline datepicker w-100">
                          <input type="date" className="form-control form-control-lg" id="dob" {...register("dob")} required />
                          <label htmlFor="birthdayDate" className="form fw-bold fs-5">Birthday</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <h6 className="mb-2 pb-1 fw-bold fs-5">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="female" checked {...register("gender")} required />
                          <label className="form-check-label fw-bold fs-5" htmlFor="gender">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="male" {...register("gender")} required />
                          <label className="form-check-label fw-bold fs-5" htmlFor="gender">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="other" {...register("gender")} required />
                          <label className="form-check-label fw-bold fs-5" htmlFor="gender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div data-mdb-input-init className="form-outline">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" {...register("email")} required />
                          <label className="form-label fw-bold fs-5" htmlFor="email">Email</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div data-mdb-input-init className="form-outline">
                          <input type="password" id="password"  className="form-control form-control-lg"{...register("password")} required />
                          <label className="form-label fw-bold fs-5" htmlFor="password">password</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <label className="form-label select-label fw-bold fs-5">Choose option</label><br />
                        <select className="select form-control-lg" {...register("option")} required>
                          <option value="" disabled>Choose option</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="msc computer science">MSC Computer Science</option>
                          <option value="mba">MBA</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="BSC agriculture">BSC Agriculture</option>
                        </select>


                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input data-mdb-ripple-init className="btn btn-primary btn-lg fw-bold fs-5" type="submit" value="Submit" {...register("submit")} />
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register