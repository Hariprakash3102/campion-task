import './App.css';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Management from './Components/Management/Management';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return(
    <div className="App">
      <Router>
         <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route  path="/management" element={<Management />} />
        </Routes>
      </Router>
       
    </div>
  );
}


export default App;  
