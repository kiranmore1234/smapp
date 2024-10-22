import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {

  const { register, handleSubmit, setValue } = useForm()
  const { studentID } = useParams()
  const navigate = useNavigate()
  async function getData() {
    const result = await axios.get(`http://localhost:8000/students/${studentID}`)
    setValue('fname', result.data.fname)
    setValue('lname', result.data.lname)
    setValue('form', result.data.form)
    setValue('gender', result.data.gender)
    setValue('email', result.data.email)
    setValue('phone', result.data.phone)
    setValue('option', result.data.option)
  }


  useEffect(() => {
    getData()
  }, [])


  const updateData = (data) => {
    axios.put(`http://localhost:8000/update/students/${studentID}`, data)
    alert('Data Updated !!!')
    navigate('/show')
  }
  return (
    <div>
      <h2>Update</h2>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration ">
                <div className="card-body p-4 p-md-5 bg-info rounded-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                  <form onSubmit={handleSubmit(updateData)}>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="firstName" className="form-control form-control-lg" {...register("fname")} />
                          <label className="form-label" htmlFor="firstName">First Name</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <div data-mdb-input-init className="form-outline">
                          <input type="text" id="lastName" className="form-control form-control-lg" {...register("lname")} />
                          <label className="form-label" htmlFor="lastName">Last Name</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">

                        <div data-mdb-input-init className="form-outline datepicker w-100">
                          <input type="date" className="form-control form-control-lg" id="dob" {...register("dob")} />
                          <label htmlFor="birthdayDate" className="form-label">Birthday</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4">

                        <h6 className="mb-2 pb-1">Gender: </h6>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="female" checked {...register("gender")} />
                          <label className="form-check-label" htmlFor="gender">Female</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="male" {...register("gender")} />
                          <label className="form-check-label" htmlFor="gender">Male</label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="other" {...register("gender")} />
                          <label className="form-check-label" htmlFor="gender">Other</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">

                        <div data-mdb-input-init className="form-outline">
                          <input type="email" id="emailAddress" className="form-control form-control-lg" {...register("email")} />
                          <label className="form-label" htmlFor="email">Email</label>
                        </div>

                      </div>
                      <div className="col-md-6 mb-4 pb-2">

                        <div data-mdb-input-init className="form-outline">
                          <input type="password" id="password" className="form-control form-control-lg"{...register("password")} />
                          <label className="form-label" htmlFor="password">Password</label>
                        </div>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">

                        <select className="select form-control-lg" {...register("option")}>
                          <option value="" disabled>Choose option</option>
                          <option value="Software Engineering">Software Engineering</option>
                          <option value="msc computer science">MSC Computer Science</option>
                          <option value="mba">MBA</option>
                          <option value="pharmacy">Pharmacy</option>
                          <option value="BSC agriculture">BSC Agriculture</option>
                        </select>
                        <label className="form-label select-label">Choose option</label>

                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <input data-mdb-ripple-init className="btn btn-primary btn-lg" type="submit" value="Submit" {...register("submit")} />
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

export default Update