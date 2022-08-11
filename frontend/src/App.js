import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom"
import Public from "./Components/routes"

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
