import Home from './Home/Home'
import Login from './forms/Login'
import HotelDetail from './hotelDetail/HotelDetail'
import HotelFav from './hotel/HotelFav'
import Hotel from './hotel/Hotel'
import Propiedad from './forms/Propiedad'
import Page404 from '../components/404/page404'
import {
  Routes,
  Route,
} from "react-router-dom"
import React  from 'react'; 

function Public() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/favs" element={<HotelFav />} />
      <Route path="/propiedad" element={<Propiedad />} />
      <Route path="/hotel" /*'/propiedad/:busqueda'*/ element={<Hotel />} />
      <Route path="/" element={<Home />} />
      <Route path=/*"/detail"*/'/Detail/:id' element={<HotelDetail />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Public;