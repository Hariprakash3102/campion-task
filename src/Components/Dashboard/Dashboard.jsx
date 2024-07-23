import React from "react";
import '../Css/Dashboard.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"; 
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Breadcrumb } from "react-bootstrap";
import { DashboardContent, input } from "../constant/data";

const Dashboard = () => {
    return(
        <div> 
            <div className="row  m-0 " >
                {/* Side bar start */}
                <div className="col-3 col-xl-2 shadow-lg vh-100 sticky-top d-none d-lg-block bg-white ">
                    <Sidebar />
                </div>
                {/* Side bar end */} 

                <div className='col-12 col-lg-9  shadow-lg col-xl-10 p-0'>
                    {/* nav bar start */}
                    <Navbar /> 
                    {/* navbar end */}

                    <div className=" align-items-center mt-5 Color" >
                        {input.map(item => (
                        <h2 className="text-center">
                            {item.title}
                        </h2> ))}
                    </div> 
                    <div className="fs-4 bgColor py-3 px-3 px-md-5 my-5 fw-bold text-white mx-2 rounded-4 "> 
                    {input.map(item => (
                    <h2 className="text-center">
                        {item.body}
                    </h2> ))}
                    </div>
                    <div className="row m-0 px-2 d-flex gap-3 justify-content-evenly">
                        {DashboardContent.map((item,index) => (
                            <div className="rounded-4 col-12 col-md-5 col-xl-4 d-flex   bgColor pe-2 py-2 m-0 my-2 " key={index}>
                              
                                <div className="">
                                    <h1 className="d-block text-center text-white">{item.title}</h1>
                                    <div className=" d-flex justify-content-center fs-5 bg-white ps-4 pe-2 py-3 Color fw-semibold lh-lg">
                                    {item.body}                                    </div>
                                    {index !==1 ? (
                                    <div className="float-end">
                                        <span className="fs-5 me-2 fw-semibold text-white">{item.learn}</span><Icon icon="material-symbols:arrow-circle-right-outline-rounded"  className="text-white" width={'35px'} />
                                    </div>) :
                                    (<Link  to='/Dashboard/UserList' className="text-decoration-none">
                                        <div className="float-end">
                                        <span className="fs-5 me-2 fw-semibold text-white">{item.learn}</span><Icon icon="material-symbols:arrow-circle-right-outline-rounded"  className="text-white" width={'35px'} />
                                        </div>
                                     </Link>
                                    )}
                                </div> 
                            </div> 
                        ))}   
                    </div>  
                </div> 
            </div>
        </div>
    );
}

export default Dashboard;