import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar"; 

const CreateApi = () => {
    const initialValues = { title: '', price: 0, description: '', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzxjfMjne_J9GwgLaaU-NMgD2D0CWPKzVlg&s'],   categoryId: 0,  } ;
    const [values, setValues] = useState( initialValues);
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null); 
    const nav =useNavigate();


    
    const handleCreate = () => {
        axios.post('https://api.escuelajs.co/api/v1/products', values)
            .then(response => {
                SetData([...data, response.data]);
                Swal.fire({ position: "top-center", icon: "success", title: "saved", showConfirmButton: false, timer: 1500 }); 
                setValues(initialValues)
            })
            .catch(e => {
                console.error(e);
                alert('try again');
                setValues(initialValues)
              
            })
    };

    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value,
        }) 
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
                        <h2 className=""> Create Items</h2> 
                    </div> 
                    
                    <div className="row ">
                        <div className="col-4"> 
                        </div>
                        <div className="col-4">
                        <Form className="mt-5" onSubmit={(e) => {e.preventDefault()}} >
                         <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label>Title :</Form.Label>
                             <Form.Control type="text" name="title" value={values.title} onChange={handleChange} />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label>Price :</Form.Label>
                             <Form.Control type="text" name="price" value={values.price} onChange={handleChange} />
                         </Form.Group>
                         <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label>Description :</Form.Label>
                             <Form.Control type="text" name="description" value={values.description} onChange={handleChange} />
                         </Form.Group> 
                         <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label> categoryId:</Form.Label>
                             <Form.Control type="text" name="categoryId" value={values.categoryId} onChange={handleChange} />
                         </Form.Group>
                         <div className="d-flex justify-content-center">
                            <Button style={{backgroundColor:'#8f958c'}} className="mx-2 border-0" onClick={handleCreate} >Create</Button>
                            <Button variant='none' style={{border:'2px solid #8f958c', color: '#8f958c'}} className="" onClick={()=> nav('/Dashboard/UserList') }>cancel</Button>
                         </div> 
                     </Form>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CreateApi;