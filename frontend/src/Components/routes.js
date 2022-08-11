import Home from './home'
import Registrar from './registro'
import Login from './login'
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"


function Public() {
  return (
      <Routes>
        <Route path='/login' element={<Login  />} />
        <Route path='/registrar' element={<Registrar />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to="/home" />} />
      </Routes>
  );
}

export default Public;