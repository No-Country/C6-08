import Home from './Home'
import Login from './login/Login'
import HotelDetail from './hotelDetail/HotelDetail'
import {
  Routes,
  Route,
} from "react-router-dom"
import React  from 'react'; 


function Public() {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/detail' /*'/Detail/:id'*/ element={<HotelDetail />} />
      </Routes>
  );
}

export default Public;