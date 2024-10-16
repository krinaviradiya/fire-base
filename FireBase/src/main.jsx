import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import SignUp from './Component/SignUp.jsx';
import Login from './Component/Login.jsx';
import Dashboard from './Component/Dashboard.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path='/' element = {<SignUp/>}></Route>
        <Route path = "login" element = {<Login/>}></Route>
        <Route path='deshboard' element = {<Dashboard/>}></Route>
          
      </Routes>l
    </BrowserRouter>
  </StrictMode>
);