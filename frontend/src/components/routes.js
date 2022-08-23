import Home from './Home/Home'
import Login from './forms/Login'
import HotelDetail from './hotelDetail/HotelDetail'
import HotelFav from './hotelFav/HotelFav'
import Propiedad from './forms/Propiedad'
import {
  Routes,
  Route,
} from "react-router-dom"
import React  from 'react'; 


function Public() {
  return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/favs' element={<HotelFav />} />
        <Route path='/propiedad' /*'/propiedad/:id'*/ element={<Propiedad />} />
        <Route path='/' element={<Home />} />
        <Route path='/detail' /*'/Detail/:id'*/ element={<HotelDetail />} />
      </Routes>
  );
}

export default Public;