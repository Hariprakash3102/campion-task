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

const UserList = () => { 
    const [data, SetData] = useState([]);
    const [loading, SetLoading] = useState(true);
    const [error, SetError] = useState(null); 
    const [show, SetShow] = useState(false);
    const [deleteId, SetdeleteId] = useState(null);
    const [Addshow, setAddshow] = useState(false); 
    const initialValues = { title: '', price: 0, description: '', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzxjfMjne_J9GwgLaaU-NMgD2D0CWPKzVlg&s'],   categoryId: 0,  } ;
    const [values, setValues] = useState( initialValues);
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
        Swal.fire ({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", timer: 500})
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
    const handleAdd = () => {
        axios.post('https://api.escuelajs.co/api/v1/products', values)
            .then(response => {
                SetData([...data, response.data]);
                Swal.fire({ position: "top-center", icon: "success", title: "saved", showConfirmButton: false, timer: 1500 });
                setAddshow(false);
                setValues(initialValues)
            })
            .catch(e => {
                console.error(e);
                alert('try again');
                setValues(initialValues)
                setAddshow(false);
            })
    };
    const TableHeader= {

    }
    const handleChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value,
        }) 
    }
    const handleAddcancel = () => {
        setValues(initialValues)
        setAddshow(false); 
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
                            <Button  className="my-3 justify-content-evenly fs-6 text-white fw-semibold border border-0" animation="true" style={{backgroundColor : '#8f958c'}} onClick={() =>  setAddshow(true)}>+ Create</Button>
                        </div>
                    </div>
                    {/* Dispaly table data */}
                    {loading ?  
                    ( <div className="text-center mt-5">
                        <Spinner animation="border" role="status" variant="info">
                        </Spinner>
                        <span className="text-info visibility-hidden">Loading</span>
                    </div>):
                    (<div className="mx-2 overflow-auto">
                        <Table hover border border-0 className="overflow-auto mx-1">
                            <thead>
                                <tr>
                                    <th>S.no</th>  
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                {data.map(item => (
                                    <tr key={item.id}>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.id} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.title} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> ${item.price} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/${item.id}`} className=" text-decoration-none text-dark"> {item.creationAt} </Link></td>
                                        <td> <Link to={`/Dashboard/UserList/Edit/${item.id}`} className="text-decoration-none mx-2"> <Icon icon="mdi:edit" style={{ color: ' #8f958c' }} width={'25px'} /> </Link>
                                        <Button className=" border border-0" variant="link"><Icon icon="ic:baseline-delete" style={{ color: ' #ff0000' }} onClick={() => handleShow(item.id)} width={'25px'} /></Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                       
                    </div> )}
                </div>
            </div>
            {/* Delete Modal */}
            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button className=" text-white " variant="info" onClick={handleDelete}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Add operation */}
             <Modal show={Addshow} onHide={handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title>Confirm Add Items</Modal.Title>
                </Modal.Header>
                 <Modal.Body>
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
                     </Form>
                 </Modal.Body>
                 <Modal.Footer>
                    <Button variant="success" className="mx-2" onClick={handleAdd} >Add</Button>
                    <Button onClick={handleAddcancel}>cancel</Button>
                </Modal.Footer>
             </Modal> 
        </div>
    );
}
export default UserList;