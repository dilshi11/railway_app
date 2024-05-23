import React from 'react'
import AdminLogin from './administrator/AdminLogin'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './administrator/AdminPanel';
import Main from './Main';
import About from './About';
import Reservation from './Reservation';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' index element={<Main />} />
        <Route path='login-admin' element={<AdminLogin />} />
        <Route path='/panel' element={<AdminPanel />} />
        <Route path='/aboutus-train' element={<About />} />
        <Route path='/book-train' element={<Reservation />} />


      </Routes>



    </>
  )
}
