import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import '../Css/EditApi.css'



const EditApi = () => {




const {EditId}= useParams();

const Nav = useNavigate();

const [data,SetData] = useState("")

const [loading,SetLoading] =useState(true);

const [error,SetError] = useState("");

const [info, SetInfo] = useState({
    id : 0 ,
    title: '',
    price: 0,
    description: '',
}); 

useEffect(  () => { 
    const ProductDetails = async () =>{
        try{
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${EditId}`);
            SetData(response.data);
            SetInfo({
                id : response.data.id,
                title: response.data.title,
                price: response.data.price,
                description: response.data.description,
            });
            SetLoading(false);
        } 
        catch (e){
            SetError(e);
            SetLoading(false);
        }
    }; 
    ProductDetails();
},[EditId]) ;

const handleUpdate = async () => {
    try{
        const response = await axios.put(`https://api.escuelajs.co/api/v1/products/${EditId}` , info);
        SetData(response.data);
        Swal.fire ({ title: "Updated!", text: "Data updated successfully!", icon: "success", timer: 500})  
        Nav('/Dashboard/UserList')
    }
    catch(e){
       console.error('Error ', e);
        SetLoading(false);
    };
}
const handleCancel = async () => {
    try{
        Nav('/Dashboard/UserList');
    }
    catch (e){
        console.error('Error: ',e);
    }
}
const handleChange = (e) => {
    SetInfo({
        ...info,
        [e.target.name] : e.target.value,
    })
};   

if(loading){
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Spinner animation="border" role="status" variant="info"> 
            </Spinner>
            <span className="text-info">Loading</span>
        </div>
    );
}
    return(
        <div>
             <div className="row  m-0 vh-200">
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
                        <h2 className="">Update Items</h2> 
                    </div> 
                    
                    <div className="row ">
                        <div className="col-4"> 
                        </div>
                        <div className="col-4">
                            <Form className="mt-5" >
                                <Form.Group className="mb-3 " controlId="formBasicText">
                                    <Form.Label className=""> Id :  </Form.Label>
                                    <Form.Control type="text" name="id" value={data.id} readOnly />
                                </Form.Group>                                   
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label> Title : </Form.Label>
                                    <Form.Control type="text"  name="title" value={info.title} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label> Price : </Form.Label>
                                    <Form.Control type="text"  name="price" value={info.price} onChange={handleChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicText">
                                    <Form.Label> Description : </Form.Label>
                                    <Form.Control type="text"  name="description" value={info.description} onChange={handleChange} />
                                </Form.Group>                                    
                                <div className="d-flex justify-content-center">
                                    <Button variant='none' className="mx-2 bgColor text-white updateBtn" onClick={handleUpdate}>Update</Button> 
                                    <Button variant='none' className="cancelBtn" onClick={  handleCancel}>Cancel</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default EditApi;