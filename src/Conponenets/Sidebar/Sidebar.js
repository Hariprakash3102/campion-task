import React from 'react';
import logo from '../Assets/logo.png';
import Dashboard from '../Assets/Dashboard.png';
import Reservation from '../Assets/reservation.png';
import Deer from '../Assets/deer.png';
import Guest from '../Assets/Guest.png';
import Management from '../Assets/Management.png';
import Report from '../Assets/Report.png';
import Store from '../Assets/store.png';
import RightArrow from '../Assets/rightArrow.png'
import DownArrow from '../Assets/arrow-down.png';
import { Icon } from '@iconify/react';
import '../Css/Sidebar.css';

const Sidebar = () =>{
    return(
        <div> 
            <div className='SideColor'>
              <img src={logo}  className='img-fluid p-4 ms-1 ' width={'220px'} />
              <div className='ps-4 my-3 '  ><img src={Dashboard} width={'20px'}></img>   Dashboard </div>
              <div className='ps-4 mb-3'  ><img src={Reservation} width={'20px'}></img> Reservations </div>
              <div className='ps-4 mb-3'  ><img src={Deer} width={'20px'}></img> Animal Harvest </div> 
              <div className='ps-4 mb-3' > <img src={Guest} width={'20px'}></img> Guest Management </div>
              
              <div className='ps-4 mb-3' > <img src={Store} width={'20px'} />  General store <span className='float-end me-5'> <img src={RightArrow} width={'20px'} /></span> </div> 
              <div className='ps-4 mb-3' > <img src={Management} width={'20px'} /> Management <span className='float-end me-5'> <img src={DownArrow} width={'17px'} /></span> </div> 
              <div className='ps-4 mb-3' > 
                {/* <ul> */}
                  <li className=' mb-3 ' >Room Mangement</li>
                  <li className=' mb-3' >Activity Management</li>
                  <li className=' mb-3 ' >Event Mangement</li>
                  <li className=' mb-3 ' >Guide Mangement</li>
                  <li className=' mb-3 ' >Subscription/ Amentics</li>
                {/* </ul> */}
              </div>
              <div className='ps-4 mb-3'> <img src={Report} width={'20px'} /> Report </div> 
            </div>
        </div>
      
    );
}
export default Sidebar;