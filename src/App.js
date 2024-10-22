import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Component/Layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home.jsx'
import About from './Component/Pages/About.jsx'
import Register from './Component/Pages/Register.jsx'
import Admin from './Component/Pages/Admin.jsx'
import Show from './Component/Pages/Show.jsx'
import Update from './Component/Pages/AboutPages/Update.jsx';
import Delete from './Component/Pages/AboutPages/Delete.jsx';
import StudentLogin from './Component/Pages/StudentLogin.jsx';
import StudentDetails from './Component/Pages/StudentDetails.jsx';
import ErrorPage from './Component/Pages/ErrorPage.jsx';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/show' element={<Show />}></Route>
          <Route path='/update/student/:studentID' element={<Update/>}></Route>
          <Route path='/delete/student/:studentID' element={<Delete/>}></Route>
          <Route path='/studentlogin' element={<StudentLogin/>}></Route>
          <Route path='/studentdetails' element={<StudentDetails/>}></Route>
          <Route path='*' element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
