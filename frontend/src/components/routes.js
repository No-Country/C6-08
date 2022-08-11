import Home from './Home'
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
        <Route path='/' element={<Home />} />
        
      </Routes>
  );
}

export default Public;