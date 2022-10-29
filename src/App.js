import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Index from './component/index';
import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login/login'
import AboutPage from './Pages/AboutPage/aboutPage';
import React from 'react';


function App() {


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
