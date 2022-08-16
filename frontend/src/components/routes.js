import Home from './Home'
import Forms from './formularios'
import HotelDetail from './hotelDetail/HotelDetail'
import HotelFav from './hotelFav'
import Propiedad from './propiedad'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import React  from 'react'; 


function Public() {
  return (
      <Routes>
        <Route path='/forms' element={<Forms />} />
        <Route path='/favs' element={<HotelFav />} />
        <Route path='/propiedad' /*'/propiedad/:id'*/ element={<Propiedad />} />
        <Route path='/' element={<Home />} />
        <Route path='/Detail' /*'/Detail/:id'*/ element={<HotelDetail />} />
      </Routes>
  );
}

export default Public;