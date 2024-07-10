import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"; 
import { Link } from "react-router-dom";


const Dashboard = () => {
    return(
        <div>
            <div className="row  m-0 vh-100"  style={{ backgroundColor: '#fafafa' }} >
                {/* Side bar start */}
                <div className="col-3 col-xl-2 shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block bg-white "   >
                    <Sidebar />
                </div>
                {/* Side bar end */} 

                <div className='col-12 col-lg-9  shadow-lg col-xl-10 p-0'>
                    {/* nav bar start */}
                    <Navbar /> 
                    {/* navbar end */}

                    <div className="text-center align-items-center mt-5" >
                        <h2 className=""> Welcome to the Campion Ranch</h2> 
                    </div>

                    <div className="text-start ps-3">
                        <p className="ps-5 pt-3 h5 ">User Details </p>
                        {/* <div><Link to='/DashBoard/$'></Link></div> */}
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Dashboard;