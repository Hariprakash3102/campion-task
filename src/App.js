import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Management from './Components/Management/Management';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UserList from './Components/UserList/UserList';
import UserDetails from './Components/UserDetails/UserDetails';
import EditApi from './Components/EditApi/EditApi';

function App() {
  return(
    <div >
      <Router>
         <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/UserList" element={<UserList/>}  /> 
          <Route exact path="/Dashboard/UserList/:Id" element={<UserDetails />} />
          <Route path="/Dashboard/UserList/Edit/:EditId" element={<EditApi />} />
          <Route  path="/management" element={<Management />} />
        </Routes>
      </Router>
       
    </div>
  );
}



export default App;  
