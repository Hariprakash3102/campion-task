import React from "react";
import '../Css/Dashboard.css';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"; 
import { Link } from "react-router-dom";
import UserInfo from "../User/User";


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

                    <div className=" align-items-center mt-5" >
                        <h2 className="text-center "> Welcome to the Campion Ranch</h2> 
                    </div>
                    <h1 className="ps-5 pt-3 ">User Details </h1>
                    {/* <div className="row m-0"> 
                        <ul className=" list-unstyled d-flex flex-wrap align-items-center " >
                            {UserInfo.map(User =>(<li className=" col-4 pt-3 px-2 ">
                                <Link to={`/Dashboard/${User.id}`} className="btn text-decoration-none text-info bg-dark bg-opacity-10 rounded w-100 userList d-flex align-items-center justify-content-center" > <h3>{User.userName}</h3> </Link>          
                            </li>))}
                        </ul>
                    </div>  */}

                    <div>
                        <Link className="text-decoration-none Color" to='/Dashboard/UserList'>UserList</Link>
                    </div>

            
                </div>

            </div>
        </div>
    );
}

export default Dashboard;