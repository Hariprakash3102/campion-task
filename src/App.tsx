import React from 'react'; 
import Dashboard from './Components/Dashboard/Dashboard';
import Management from './Components/Management/Management';
import UserList from './Components/UserList/UserList.tsx';
import UserDetails from './Components/UserDetails/UserDetails';
import EditApi from './Components/ApiCall/EditApi.jsx';
import Login from './Components/Login/Login.tsx';
import CreateApi from './Components/ApiCall/CreateApi.jsx';
import '../src/App.css'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute, {  ReturnRouter } from './Components/PrivateRouter/PrivateRouter';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />  */}
          <Route element={<ReturnRouter /> } >
            <Route path="/" element={<Login />} />
          </Route> 
          <Route element={<PrivateRoute />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Dashboard/UserList" element={<UserList />} />
            <Route path="/Dashboard/UserList/:Id" element={<UserDetails />} />
            <Route path="/Dashboard/UserList/Edit/:EditId" element={<EditApi />} />
            <Route path="/Dashboard/UserList/Create" element={<CreateApi />} />
            <Route path="/management" element={<Management />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}



export default App;  
