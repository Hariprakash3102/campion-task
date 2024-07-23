import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { Icon } from '@iconify/react';
import '../Css/UserList.css';
import Swal from "sweetalert2";
import { TableHeader } from "../constant/data";  
import moment from "moment";

const UserList = () => { 
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null); 
    const [show, SetShow] = useState(false);
    const [deleteId, SetdeleteId] = useState(null); 

    useEffect(() => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => {
                SetData(response.data);
                SetLoading(false);
            })
            .catch(e => {
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
        Swal.fire ({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", timer: 1000})
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
 
    if (error)
        return <h2>Page Not Found : 404 ERROR</h2>

    return (
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
                        <h2 className=""> User List</h2>
                    </div >
                    <div className="row m-0 d-flex flex-row ">

                        <div className="col-12 col-md-8 col-lg-6 col-xl-4 ms-auto position-relative">
                            <input type="search" className="form-control rounded py-2 my-3 " />
                            <span className="position-absolute top-50 end-0  translate-middle-y me-3">
                            <Icon icon="ic:round-search"  style={{color: '#8f958c', cursor: 'pointer'}} width={'35px'} />
                            </span>
                        </div>
                        <div className="col-1 d-flex ms-auto ms-md-0" style={{ width: '130px' }}>
                           <Link to='/Dashboard/UserList/Create'>  <Button  className="my-3 justify-content-evenly fs-6 text-white fw-semibold border border-0" animation="true"
                             style={{backgroundColor : '#8f958c'}}>+ Create</Button></Link>
                        </div>
                    </div>
                    {/* Dispaly table data */}
                    <div className="mx-2 overflow-auto">
                        <Table hover border border-0 className="overflow-auto mx-1">
                            <thead>
                                <tr>
                                    {TableHeader.map((item,index) =>(
                                        <th>{item.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            {loading ?  
                            ( <tbody>
                                <tr>
                                    <td colSpan="5">
                                        <div className="d-flex justify-content-center align-items-center" style={{ height: '800px' }}>
                                            <Spinner animation="border" role="status" variant="info">
                                                <span className="visually-hidden">Loading...</span>
                                            </Spinner>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>):
                            (<tbody >
                                {data.map(item => (
                                    <tr key={item.id}>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.id} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.title} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> ${item.price} </Link></td>
                                        <td><Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark">{moment(item.creationAt).subtract(10, 'days').calendar()}</Link></td>                                  
                                        <td> <Link to={`/Dashboard/UserList/Edit/${item.id}`} className="text-decoration-none mx-2"> <Icon icon="mdi:edit" style={{ color: ' #8f958c' }} width={'25px'} /> </Link>
                                        <Button className=" border border-0" variant="link"><Icon icon="ic:baseline-delete" style={{ color: ' #ff0000' }} onClick={() => handleShow(item.id)} width={'25px'} /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            )}
                        </Table> 
                    </div> 
                </div>
            </div>
            {/* Delete Modal */}
            <Modal show={show} onHide={handleClose} animation={false} timer={500}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="none" style={{border:'2px solid #8f958c', color: '#8f958c'}} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="text-white" style={{backgroundColor:'#8f958c'}} variant="none" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>     
        </div>
    );
}
export default UserList;