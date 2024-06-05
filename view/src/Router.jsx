import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/LoginPage/Register';
import Landing from './Pages/LandingPage/Landing';
import Account from './Pages/dashBoard/Account';





function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element ={<Landing/>} />
        <Route path="/Home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Account" element={<Account />} />
        
        

        
        
      </Routes>
    </Router>
  );
}

export default MyRouter