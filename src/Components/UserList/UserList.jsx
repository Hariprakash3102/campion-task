import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'; 
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

const UserList= () => {

    const [data,SetData] = useState([]);
    const [loading,SetLoading] = useState( true);
    const [error,SetError] = useState(null)
    useEffect ( () => {
        
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then(response => {
            SetData(response.data);
            SetLoading(false);
        })
        .catch( e => {
            SetError(e);
            SetLoading(false);
        });
    }, []);



    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center ">
                <Spinner animation="border" role="status"  > 
                </Spinner>
                <span >Loading...</span> 
            </div>
        );
    }


    if(error)
        return <h2>Page Not Found : 404 ERROR</h2>   
    return(
        <div>
            <div className="row  m-0 vh-200"  style={{ backgroundColor: '#fafafa' }} >
                {/* Side bar start */}
                <div className="col-3 col-xl-2 shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block bg-white "   >
                    <Sidebar />
                </div>
                {/* Side bar end */} 

                <div className='col-12 col-lg-9 col-xl-10   m-0 p-0 '>
                    {/* nav bar start */}
                    <Navbar /> 
                    {/* navbar end */} 
                    <div className="text-center align-items-center mt-5" >
                        <h2 className=""> Welcome to the Campion Ranch</h2> 
                    </div>
                    
                    <ul >
                        {data.map(item => (
                            <li key={item.id} className="list-unstyled" >
                                <Link to={`/Dashboard/UserList/${item.id}`} className="list-unstyled">
                                {item.title}
                               
                                </Link>
                            </li> 
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserList;