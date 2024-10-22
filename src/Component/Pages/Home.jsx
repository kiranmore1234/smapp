import React from 'react';
import { NavLink } from 'react-router-dom';
import Error from './AboutPages/image.png'
import Page from './AboutPages/22769_nirf_2024_header_nirf_2024_header.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className="Main">
      <h1 className="my-4 fw-bold">Welcome to Our College</h1>
      <div className="row">

        <div className="col-md-6">
          <img
            src={Error}
            alt="School Campus"
            className="img-fluid mb-3 w-75 mt-5"
          />
        </div>
        <div className="col-md-6 mt-5 ">
          <h2 className='text-primary'>Our Campus</h2>
          <p className='text-dark fs-3 '>
            Our school offers a beautiful and vibrant campus with state-of-the-art facilities
            for students to explore their passions and excel academically.
          </p>
          <NavLink to="/about" className="btn btn-primary fs-5">
            Learn More
          </NavLink>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-6 order-md-2">
          <img
            src={Page}
            alt="Student"
            className="img-fluid mb-3 w-75 h-100"
          />
        </div>
        <div className="col-md-6 order-md-1 mt-5">
          <h2 className='text-primary'>Student Life</h2>
          <p className='text-dark fs-3'>
            Our students engage in various extracurricular activities that develop
            leadership, teamwork, and creativity. Explore the many clubs and organizations available.
          </p>
          <NavLink to="/home" className="btn btn-primary fs-5">
            Discover More
          </NavLink>
        </div>
      </div>
      <div>
        <footer className='bg-primary text-light p-5 '>
          <div className='d-flex text-start sm-evenly '>
            <div className='col-md-4 col-sm-4 w-25'>
              <ul className='fw-bold text-start fs-3'>
                <li>Home</li>
                <li>About Us</li>
                <li>IQAC</li>
                <li>Academics</li>
                <li>Examinations</li><br />
              </ul>
              <img src="https://smallseotools.com/counterDisplay?code=42114c5651455f52270744d8eae6e3e4&amp;style=0010&amp;pad=9&amp;type=page&amp;initCount=65000" alt="hit counter" width='150px' height='30px' border="0" />
            </div>
            <div className='col-md-4 col-sm-4 fw-bold fs-3 w-25'>
              <ul>
                <li>College <br /> Publications</li>
                <li>UGC-CPE</li>
                <li>Photo Gallery</li>

              </ul>
            </div>
            <div className='w-25 fw-bold fs-5'>
              <h4 className='fs-3 fw-bold'>Contact Us</h4>
              <p>Fergusson College, <br />F.C Road, Pune 411004</p>
              <h4 className='fs-3 fw-bold'>Phone Number</h4>
              <p>020-67656000</p>
              <h4 className='fs-3 fw-bold'>E-mail Id</h4>
              <p>principal@fergusson.edu</p>
            </div>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.136165430188!2d73.83686501482808!3d18.522747887407725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf311360fb6d%3A0x1ac1118451ce8646!2sFergusson%20College%20Main%20Building!5e0!3m2!1sen!2sin!4v1566812867991!5m2!1sen!2sin" width="100%" height="280" />
            </div>
          </div>


        </footer>
      </div>
    </div>
  );
};

export default Home;