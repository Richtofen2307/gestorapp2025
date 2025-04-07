import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home/Home'
import Booking from '../components/pages/Booking/Booking'
import Dashboard from '../components/pages/Dashboard/Dashboard'
import Header from '../components/commons/Header/Header'
import Footer from '../components/commons/Footer/Footer'
import NotFound from '../components/pages/NotFound/NotFound'
import Calendar from "../components/commons/Calendar/Calendar";
import Form from "../components/commons/Form/Form";
import Room from '../components/pages/Room/Room'

const Router = () => {
  return (
  <>
  <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>}/>
    <Route path='/booking' element= {<Booking/>}/>
    <Route path='/dashboard'element={<Dashboard/>} />
    <Route path='/room'element={<Room/>} />
    <Route path="/calendar" element={<Calendar lugar={{ nombre: "The Dragon Bar" }} />} />
    <Route path="/form" element={<Form />} />
    <Route path='*' element={<NotFound/>} />
   </Routes>
   <Footer/>
   </>
  )
}

export default Router

