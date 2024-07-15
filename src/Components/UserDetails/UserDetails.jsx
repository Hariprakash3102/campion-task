import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Table from 'react-bootstrap/Table';
import { Spinner } from "react-bootstrap";
import axios from "axios";
const UserDetails = () => {

    const {Id}= useParams();
   
    const [data,SetData] = useState("");
    
    const [loading,SetLoading] = useState(true);
    
    const [error,SetError] = useState("");

    
    useEffect(  () => {

        const ProductDetails = async () =>{
            try{
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${Id}`);
                SetData(response.data);
                SetLoading(false);
            }
            catch (e){
                SetError(e);
                SetLoading(false);
            }
        };
    
        ProductDetails();
    },[Id]) 

    if(loading){
        return(
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status" variant="info"> 
                </Spinner>
                <span className="text-info">Loading</span>
            </div>
        );
    }
    if(error) return <p>Error : {error.message}</p>

    return(


        <div >
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
                      
                    <div className="px-2" >
                        <h1>{data.title}</h1>
                        <p className="fw-bold fs-1 text-success">Price: ${data.price}</p>
                        <p>Description: {data.description}</p>
                        <p>Images:</p>
                        <ul className="list-unstyled d-flex">
                            {data.images.map((image, index) => (
                            <li key={index} className="mx-2">
                                <img src={image} alt={`Item image ${index + 1}`} width="200" />
                            </li>
                            ))}
                        </ul>
                        <p>Creation At: {new Date(data.creationAt).toLocaleString()}</p>
                        <p>Updated At: {new Date(data.updatedAt).toLocaleString()}</p>
                        <h3 className="py-3">Category</h3>
                        <table className="border w-100 overflow-auto">
                            <thead className="border">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Category Creation At</th>
                                    <th>Category Updated At</th> 
                                </tr>
                            </thead>
                            <tbody className="border">
                                <tr>
                                    <td>HPL{data.category.id}</td>
                                    <td>{data.category.name}</td>
                                    <td><img src={data.category.image} alt={data.category.name} width="200" /></td>
                                    <td> {new Date(data.category.creationAt).toLocaleString()}</td>
                                    <td>{new Date(data.category.updatedAt).toLocaleString()}</td> 
                                </tr> 
                            </tbody>
                        </table>  
                    </div>  
                </div> 
            </div> 
        </div>
    );
}


export default UserDetails;
