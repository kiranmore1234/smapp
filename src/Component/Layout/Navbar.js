import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-light fw-bold fs-3 me-4" to="#">School</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link me-3 text-light fw-bold" aria-current="page" to="/home">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3 text-light fw-bold" aria-current="page" to="/about">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3 text-light fw-bold" aria-current="page" to="/register">REGISTER</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link me-3 text-light fw-bold" aria-current="page" to="/admin">ADMIN</NavLink>
              </li>
             {/*  <li className="nav-item">
                <NavLink className="nav-link me-3  text-light fw-bold" aria-current="page" to="/show">SHOW</NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link me-3  text-light fw-bold" aria-current="page" to="/studentlogin">STUDENT LOGIN</NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar;