import Home from './Home'
import Registrar from './registro'
import Login from './login'
import HotelDetail from './hotelDetail/HotelDetail'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import React  from 'react'; 


function Public() {
  return (
      <Routes>
        <Route path='/login' element={<Login  />} />
        <Route path='/registrar' element={<Registrar />} />
        <Route path='/' element={<Home />} />
        <Route path='/Detail' /*'/Detail/:id'*/ element={<HotelDetail />} />
      </Routes>
  );
}

export default Public;