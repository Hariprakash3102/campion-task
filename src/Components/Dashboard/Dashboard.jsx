import React from "react";
import '../Css/Dashboard.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"; 
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";


const Dashboard = () => {
    return(
        <div>
            <div className="row  m-0 "  style={{ backgroundColor: '#fafafa' }} >
                {/* Side bar start */}
                <div className="col-3 col-xl-2 shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block bg-white ">
                    <Sidebar />
                </div>
                {/* Side bar end */} 

                <div className='col-12 col-lg-9  shadow-lg col-xl-10 p-0'>
                    {/* nav bar start */}
                    <Navbar /> 
                    {/* navbar end */}

                    <div className=" align-items-center mt-5" >
                        <h2 className="text-center "> Welcome to the Campion Ranch</h2> 
                    </div>
                   
                    <div className="fs-4 bgColor py-3 px-3 px-md-5 my-5 fw-bold text-white mx-2 rounded-4 "> 
                        Welcome to the Campion Ranch Dashboard! This is your central hub for managing various aspects of the range, ensuring seamless operations and an enjoyable experience for all guests.
                    </div>
                    <div className="row m-0 px-2 d-flex gap-3 justify-content-evenly">
                        <div className="rounded-4 col-12 col-md-5 col-xl-4 d-flex   bgColor pe-2 py-2 m-0 my-2 ">
                            <div className="">
                                <h1 className="d-block text-center text-white">Dashboard</h1>
                                <div className=" d-flex justify-content-center fs-5 bg-white ps-4 pe-2 py-3 Color fw-semibold lh-lg">
                                    Access the main overview of ranch activities, reservations, and important updates.Get a quick summary of key metrics and recent activities.
                                </div>
                                <div className="float-end">
                                     <span className="fs-5 me-2 fw-semibold text-white">Learn more</span><Icon icon="material-symbols:arrow-circle-right-outline-rounded"  style={{color: 'white'}} width={'35px'} />
                                </div>
                            </div>
                            
                        </div>  
                            <div className="rounded-4 col-12 col-md-5 col-xl-4  bgColor  py-2 m-0 my-2">
                                <div className=" ">
                       
                                    <h1 className="d-block text-center text-white">User Details</h1>
                      
                                    <div className=" d-flex justify-content-center fs-5 bg-white ps-4 pe-2 py-3 Color fw-semibold lh-lg">
                                        Manage all guest reservations. View, modify, and confirm upcoming bookings with ease.It make good to plan the vacation to us.
                                    </div>
                                    <Link  to='/Dashboard/UserList' className="text-decoration-none">
                                    <div className="float-end">
                                    <span className="fs-5 me-2 fw-semibold text-white">Learn more</span><Icon icon="material-symbols:arrow-circle-right-outline-rounded"  style={{color: 'white'}} width={'35px'} />
                                    </div>
                                    </Link>
                                </div>
                            </div> 
                        <div className="rounded-4 col-12 col-md-5 col-xl-4  bgColor  py-2 m-0 my-2">
                            <div className=" ">
                                <h1 className="d-block text-center text-white">Management</h1>
                                <div className=" d-flex justify-content-center fs-5 bg-white ps-4 pe-2 py-3 Color fw-semibold lh-lg">
                                    Access detailed management options for various aspects of the ranch.Toggle to view and manage specific categories
                                </div>  
                                <div className="float-end">
                                    <span className="fs-5 me-2 fw-semibold text-white">Learn more</span><Icon icon="material-symbols:arrow-circle-right-outline-rounded"  style={{color: 'white'}} width={'35px'} />
                                </div>
                            </div>
                        </div>   
                        <div className="rounded-4 col-12 col-md-5 col-xl-4  bgColor  py-2 m-0 my-2">
                            <div className=" ">
                                <h1 className="d-block text-center text-white">Guest Management</h1>
                                <div className=" d-flex justify-content-center fs-5 bg-white ps-4 pe-2 py-3 Color fw-semibold lh-lg">
                                Oversee all guest-related activities and information. Maintain detailed records of guest preferences, special requests, and visit history.
                                </div>  
                                <div className="float-end">
                                    <span className="fs-5 me-2 fw-semibold text-white">Learn more</span><Icon icon="material-symbols:arrow-circle-right-outline-rounded"  style={{color: 'white'}} width={'35px'} />
                                </div>
                            </div>
                        </div>  
                    </div>
                    <div>
                        

                    </div>
            
                </div>

            </div>
        </div>
    );
}

export default Dashboard;