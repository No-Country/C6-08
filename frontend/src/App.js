
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Public from "./components/routes"

function App() {
  return (
    <div className="App">
      <Router>
        <Public />
      </Router>
    </div>
  );
}

export default App;
