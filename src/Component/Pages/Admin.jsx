import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Admin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if(email === 'more39262@gmail.com' && password === 'More@123'){
      alert('Sing In Successfull !!!')
      navigate('/show');
    }else{
      alert('Wrong Email & Password !!!')
      setEmail('')
      setPassword('')
    }
  };

  const enterKeyhandel = (event)=>{
    if(event.key === 'Enter'){
      handleSignIn()
    }
  }

  return (
    <div className='bg-info w-50 mx-auto rounded-4 p-5 mt-5 text-light'>
      <form className="w-50 mx-auto mt-5" onSubmit={handleSignIn}>
        <div data-mdb-input-init className="form-outline mb-4 ">
          <input
            type="email"
            id="form2Example1"
            className="form-control p-2 fs-5"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label fs-4" htmlFor="form2Example1">Email address</label>
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            className="form-control p-2 fs-5"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={enterKeyhandel}
          />
          <label className="form-label fs-4" htmlFor="form2Example2">Password</label>
        </div>

        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            <div className="form-check fs-4">
              <input className="form-check-input fs-4" type="checkbox" value="submit" required />
              <label htmlFor="form2Example34"> Remember me </label>
            </div>
          </div>
        </div>

        <button
          data-mdb-ripple-init
          type="submit"
          className="btn btn-primary btn-block mb-4 fs-3"
        >
          Sign in
        </button>

        <div className="text-center fs-5">
          <p>Not a member? <NavLink to="/register">Register</NavLink></p>
          <p>or sign up with:</p>
          <NavLink to='https://www.facebook.com/fergussoncollege/'><button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
             <i className="fab fa-facebook-f fs-2"></i>
          </button></NavLink>
          <NavLink to='https://www.fergusson.edu/'><button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-google fs-2"></i>
          </button></NavLink>
          <NavLink to='https://x.com/i/flow/login?redirect_after_login=%2Ffergussonpune'><button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-twitter fs-2"></i>
          </button></NavLink>
          <NavLink to='https://github.com/topics/fergusson-college'><button data-mdb-ripple-init type="button" className="btn btn-secondary btn-floating mx-1">
            <i className="fab fa-github fs-2"></i>
          </button></NavLink>
        </div>
      </form>
    </div>
  );
};

export default Admin;
