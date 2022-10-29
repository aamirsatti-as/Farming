import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Index from './component/index';
import { Navbar } from './component/Navbar/Navbar';
import { Grid } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/login'
import AboutPage from './Pages/AboutPage/aboutPage';
import React, { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { Cookie } from '@mui/icons-material';
import PrivateRoute from './component/PrivateRouter/PrivateRoute';


function App() {

  const [user, setUser] = useState(false);
  console.log(user);

  return (
    <Router>

      <div >
        <Navbar />
        <div className='bucket'>

          <Routes>

            <Route exact path="/" element={<Index />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/About' element={<AboutPage />} />


          </Routes>




        </div>
      </div>

    </Router>

  );
}

export default App;
