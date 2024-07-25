import Dashboard from './Components/Dashboard/Dashboard';
import Management from './Components/Management/Management';
import UserList from './Components/UserList/UserList';
import UserDetails from './Components/UserDetails/UserDetails';
import EditApi from './Components/EditApi/EditApi';
import Login from './Components/Login/Login';
import CreateApi from './Components/CreatApi/CreateApi';
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
            <Route exact path="/Dashboard/UserList/:Id" element={<UserDetails />} />
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
