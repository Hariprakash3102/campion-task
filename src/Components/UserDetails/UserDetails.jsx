import React from "react";
import { useParams } from "react-router-dom";
import UserInfo from "../User/User";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
const UserDetails = () => {

    const {UserId}= useParams();
   
     const User = UserInfo.find(User => User.id === parseInt(UserId)  );

    if (!User) return <p>The Page not Found 404 error</p>;

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

                    
                    <div className="text-center">
                        <h1>{User.userName}</h1>
                        <div>Phone-Number : {User.phoneNO}</div>
                        <div>Address : {User.Address}</div> 
                    </div>
                </div>

            </div> 
        </div>
    );
}


export default UserDetails;