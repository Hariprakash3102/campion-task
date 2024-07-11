import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Management from './Components/Management/Management';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UserDetails from './Components/UserDetails/UserDetails';

function App() {
  return(
    <div >
      <Router>
         <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/:UserId" element={<UserDetails/>}  /> 
          <Route  path="/management" element={<Management />} />
        </Routes>
      </Router>
       
    </div>
  );
}



export default App;  
