import { Icon } from '@iconify/react';
import { useState } from 'react';
import user from '../Assets/user.png';
import logo from '../Assets/logo.png';
import Dashboard from '../Assets/Dashboard.png';
import Reservation from '../Assets/reservation.png';
import Deer from '../Assets/deer.png';
import Guest from '../Assets/Guest.png';
import Store from '../Assets/store.png';
import Management from '../Assets/Management.png';
import Report from '../Assets/Report.png';
import ToggleButton from '../Assets/Toggle.png'

const Navbar = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div className="pt-1 sticky-top"  style={{ backgroundColor: '#ffffff', height: '50px',   }}>
                <div className=" ms-3 d-flex flex-row">
                    <div className='mt-1  d-none d-md-block'>
                        <div className='btn btn-sm border me-2 px-3'>+ Reservation</div>
                    </div>
                    <div className='mt-1'> 
                    <div className='btn btn-sm border px-3'>+ Bag</div>
                    </div>
                    <div className='me-2 mt-1'  style={{marginLeft: 'auto'  }} ><img src={user} alt='account' height={'20px'} width={'20px'} /></div> 
                    <div className='me-2 list-unstyled'  >
                        <p className='m-0' style={{fontSize: '14px'}}>MichaelKnight</p>
                        <p className='m-0 ' style={{fontSize: '12px'}} >super Admin</p>  
                    </div>
                    <div className=" me-3" ><Icon icon="material-symbols:keyboard-arrow-down" /></div>
                    {/* <div className="d-block d-lg-none bg-light">
                        <button className="btn" data-bs-toggle="Offcanvas" data-bs-target="#collapseOne" aria-controls="collapseOne" type="button" onClick={handleShow}>
                            <img src={ToggleButton} width={'34px'} height={'34px'} alt="Toggle Button" />
                        </button>
                        <div className="Offcanvas Offcanvas-end w-75" id="collapseOne" aria-labelledby="collapseOne" tabIndex="-1"  show={show} onHide={handleClose}>
                            <div className="Offcanvas-header text-center d-flex justify-content-between">
                                <div className="p-4 ps-xl-5">
                                    <a href="#"><img src={logo} width={'100px'} className="" alt="Logo" /></a>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="Offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="mt-3 Offcanvas-body p-0">
                                <a href="#" className="col-12 w-auto text-start side_bar text-decoration-none nav-link">
                                    <img className="me-2 ms-3" src={Dashboard} width={'24px'} height={'24px'} alt="Dashboard Icon" />
                                    <p className="d-inline-block text-center ps-0 p-3 mb-0">Dashboard</p>
                                </a>
                                <div className="col-12 w-auto text-start side_bar">
                                    <img className="me-2 ms-3" src={Reservation} width={'24px'} height={'24px'} alt="Reservation Icon" />
                                    <p className="d-inline-block text-center ps-0 p-3 mb-0">Reservation</p>
                                </div>
                                <a href="#" className="col-12 w-auto text-start side_bar text-decoration-none nav-link">
                                    <img className="me-2 ms-3" src={Deer} width={'24px'} height={'24px'} alt="Animal Harvest Icon" />
                                    <p className="d-inline-block text-center ps-0 p-3 mb-0">Animal Harvest</p>
                                </a>
                                <div className="col-12 w-auto text-start side_bar">
                                    <img className="me-2 ms-3" src={Guest} width={'24px'} height={'24px'} alt="Guest Management Icon" />
                                    <p className="d-inline-block text-center ps-0 p-3 mb-0">Guest Management</p>
                                </div>
                                <div className="col-12 w-auto text-start side_bar">
                                    <img className="me-2 ms-3" src={Store} width={'24px'} height={'24px'} alt="General Store Icon" />
                                    <p className="d-inline-block ps-0 p-3 mb-0">General Store</p>
                                </div>
                                <div className="col-12 w-auto text-start side_bar">
                                    <img className="me-2 ms-3" src={Management} width={'24px'} height={'24px'} alt="Management Icon" />
                                    <p className="d-inline-block text-center ps-0 p-3 mb-0">Management</p>
                                </div>
                                <ul className="col-12 w-auto text-start side_bar">
                                    <li className="d-inline-block text-center ps-0 p-3 mb-0">Room Management</li>
                                    <li className="d-inline-block text-center ps-0 p-3 mb-0">Activity Management</li>
                                    <li className="d-inline-block text-center ps-0 p-3 mb-0">Event Management</li>
                                    <li className="d-inline-block text-center ps-0 p-3 mb-0">Guide Management</li>
                                    <li className="d-inline-block text-center ps-0 p-3 mb-0">Subscription/Amenities</li>
                                </ul>
                                <div className="col-12 w-auto text-start side_bar">
                                    <img className="me-2 ms-3" src={Report} width={'24px'} height={'24px'} alt="Report Icon" />
                                    <p className="d-inline-block text-center ps-0 p-3 mb-0">Report</p>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                </div> 
                
            </div>
        </div>
    );
}

export default Navbar;