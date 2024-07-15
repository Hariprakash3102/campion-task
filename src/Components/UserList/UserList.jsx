import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'; 
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Button, Modal, Table } from "react-bootstrap";
import { Icon } from '@iconify/react'; 


const UserList= () => { 
    const [data,SetData] = useState([]);
    const [loading,SetLoading] = useState( true);
    const [error,SetError] = useState(null);
    const [show,SetShow] = useState(false)
    const [deleteId ,SetdeleteId] =useState(null);


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

    const handleShow = (id) => {
        SetdeleteId(id);
        SetShow(true);
    };

    const handleClose = () => SetShow(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://api.escuelajs.co/api/v1/products/${deleteId}`);
            SetData(data.filter(item => item.id !== deleteId));
            SetShow(false);
        } catch (e) {
            console.error(`Error:`, e);
            alert("Try Again");
            SetShow(false);
        }
    }; 

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status" variant="info"> 
                </Spinner>
                <span className="text-info">Loading</span>
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
                    </div >
                    
                    <div className="mx-2">
                        <Table hover border border-0  className="overflow-auto mx-1">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Edit</th>
                                    <th>Delete</th>  
                                </tr>
                            </thead>
                            <tbody >
                                {data.map(item => (  
                                    <tr>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.id} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.title} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> ${item.price} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.creationAt} </Link></td> 
                                        <td> <Link to={`/Dashboard/UserList/Edit/${item.id}`} className=""> <Icon icon="mdi:edit" style={{color: ' #8f958c' }} width={'25px'}/> </Link></td> 
                                        <td>  <Button className=" border border-0" variant="limk"><Icon icon="ic:baseline-delete"  style={{color: ' #ff0000' }} onClick={() => handleShow(item.id) }  width={'25px'}/></Button></td> 

                                    </tr>
                                ))}
                            </tbody>
                        </Table> 
                    </div>                   
                </div>
            </div>
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserList;