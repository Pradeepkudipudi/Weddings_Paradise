import React from 'react'
import Login from './pages/login'
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllBookings from './pages/Admin/AllBookings';
import AddVenue from './pages/Admin/AddVenue';
import Venuelist from './pages/Admin/Venuelist';

const App = () => {
  const {aToken} = useContext(AdminContext)
  return aToken ? (
    <div  className='bg-[#F8F9FD]'>
     
     <ToastContainer/>
     <Navbar/>
     <div className='flex items-start'>
      <Sidebar/>
      <Routes>
        <Route path='/' element = {<></>} />
        <Route path='/admin-dashboard' element = {<Dashboard/>} />
        <Route path='/all-bookings' element = {<AllBookings/>} />
        <Route path='/add-venue' element = {<AddVenue/>} />
        <Route path='/venue-list' element = {<Venuelist/>} />
      </Routes>
     </div>
    </div>
  ):(
    <>
     <Login/>
     
     <ToastContainer 
   position="top-center" autoClose={3000}
      />

    </>
  )
}

export default App