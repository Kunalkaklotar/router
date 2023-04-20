import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Help from './Help';
import Service from './Service';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/help' element={<Help />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/service' element={<Service />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
