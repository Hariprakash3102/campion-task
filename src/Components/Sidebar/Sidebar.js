import React from 'react';
import logo from '../Assets/logo.png';
import Dashboard from '../Assets/Dashboard.png';
import Reservation from '../Assets/reservation.png';
import Deer from '../Assets/deer.png';
import Guest from '../Assets/Guest.png';
import Management from '../Assets/Management.png';
import Report from '../Assets/Report.png';
import Store from '../Assets/store.png';
import RightArrow from '../Assets/rightArrow.png';
import DownArrow from '../Assets/arrow-down.png';
import '../Css/Sidebar.css'; 
import {Link} from 'react-router-dom';



const Sidebar = () =>{
    return(
        <div> 
            <div className='SideColor text-start'>
              <img src={logo} className='img-fluid p-4 ms-1' alt="Logo" width={'220px'} />
              <div className=' ps-4 my-3 justify-content-star'>
                <img src={Dashboard} width={'20px'} alt="Dashboard" /> <Link to='/Dashboard'  className='text-decoration-none SideColor' >Dashboard</Link>
              </div>
              <div className=' ps-4 mb-3 '>
                <img src={Reservation} width={'20px'} alt="Reservations" /> Reservations
              </div>
              <div className='ps-4 mb-3'>
                <img src={Deer} width={'20px'} alt="Animal Harvest" /> Animal Harvest
              </div> 
              <div className='ps-4 mb-3'>
                <img src={Guest} width={'20px'} alt="Guest Management" /> Guest Management
              </div>
              <div className='ps-4 mb-3'>
                <img src={Store} width={'20px'} alt="General Store" /> General store 
                <span className='float-end me-5'>
                  <img src={RightArrow} width={'20px'} alt="Right Arrow" />
                </span>
              </div> 
              <div className='ps-4 mb-3 Management rounded p-1'>
                <img src={Management} width={'20px'} alt="Management" /> Management 
                <span className='float-end me-5'>
                  <img src={DownArrow} width={'17px'} alt="Down Arrow" />
                </span>
              </div> 
              <div className='ps-4 mb-3'>
                <ul>
                  <li className='mb-3'>Room Management</li>
                  <li className='mb-3 '><Link to='/Management' className='text-decoration-none SideColor'>Activity Management</Link></li>
                  <li className='mb-3'>Event Management</li>
                  <li className='mb-3'>Guide Management</li>
                  <li className='mb-3'>Subscription/Amenities</li>
                </ul>
              </div>
              <div className='ps-4 mb-3'>
                <img src={Report} alt="Report" width={'20px'} /> Report
              </div> 
            </div>
        </div>
      
    );
}


export default Sidebar;