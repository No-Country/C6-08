import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Public from "./components/routes"
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Public />
      </Router>
    </div>
  );
}

export default App;
