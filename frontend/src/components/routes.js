import Home from './Home'
import Login from './login/Login'
import HotelDetail from './hotelDetail/HotelDetail'
import HotelFav from './HotelFav'
import Propiedad from './propiedad'
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