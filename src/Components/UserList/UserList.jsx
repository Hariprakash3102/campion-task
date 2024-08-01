import Spinner from 'react-bootstrap/Spinner';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import moment from "moment";
import Swal from "sweetalert2";
import '../Css/UserList.css';
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { TableHeader } from "../constant/data";  
import { deleteApi } from "../ApiCall/Apicall";
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getRedux } from '../../slices/slices';

const UserList = () => { 
    // const [data, SetData] = useState([]);
    // const [loading, SetLoading] = useState(true);
    // const [error, SetError] = useState(null); 
    const {data,isLoading,error} = useSelector(state => state.getUserList);
    const [show, SetShow] = useState(false);
    const [deleteId, SetdeleteId] = useState(null); 
    const nav = useNavigate();      
    const [search, setSearch] = useState("");
    const [save, setSave] = useState("");
    const [item, setItem] = useState(0);
    const itemPerpage = 10;
    const dispatch = useDispatch();

    
    // getApi()
    //     .then(response => {
    //         SetData(response.data);
    //         SetLoading(false);
    //     })
    //     .catch(e => {
    //         SetError(e);
    //         SetLoading(false);
    //     });
    useEffect(() => {
        dispatch(getRedux())
    }, [dispatch]);

    const handlePageClick = (event) => {
        const nextPage = event.selected;
        setItem(nextPage);
    }

    const handleShow = (id) => {
        SetdeleteId(id);
        SetShow(true);
    };

    const handleClose = () => SetShow(false);

    const handleDelete = async () => {
        Swal.fire ({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", timer: 1000})
        try {
            await deleteApi(deleteId);
            data(data.filter(item => item.id !== deleteId));
            SetShow(false);
        } catch (e) {
            console.error(`Error:`, e);
            alert("Try Again");
            SetShow(false);
        }
    };

    if (error)
        return <h2>Page Not Found : 404 ERROR</h2>

    const filteredData = data.filter(item => 
        save.toLowerCase() === '' ? true : item.title.toLowerCase().includes(save.toLowerCase())
    );

    const firstOffset = item * itemPerpage;
    const LastOffset = firstOffset + itemPerpage;
    const perPage = filteredData.slice(firstOffset, LastOffset);
    const pageCount = Math.ceil(filteredData.length / itemPerpage);

    return (
        <div>
            <Row className="m-0">
                <Col xs={3} xl={2} className="shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block bg-white">
                    <Sidebar />
                </Col>
                <Col xs={12} lg={9} xl={10} className='m-0 p-0'>
                    <div className='sticky-top'>
                        <Navbar />
                    </div>
                    <div className="text-center align-items-center mt-5">
                        <h2>User List</h2>
                    </div>
                    <Row className="m-0 d-flex flex-row">
                        <Col></Col>
                        <Col xs={12} md={8} lg={6} xl={4} className="ms-auto position-relative">
                            <input
                                type="search"
                                className="form-control rounded py-2 my-3 shadow-none pe-5"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                                <Icon
                                    icon="ic:round-search"
                                    style={{ color: '#8f958c', cursor: 'pointer' }}
                                    width={'35px'}
                                    onClick={() => { setSave(search) }}
                                />
                            </span>
                        </Col>
                        <Col xs={1} className="d-flex ms-auto ms-md-0" style={{ width: '130px' }}>
                            <Link to='/Dashboard/UserList/Create'>
                                <Button
                                    className="my-3 justify-content-evenly fs-6 text-white fw-semibold border border-0 bg-dark"
                                    variant="none"
                                    animation="true"
                                >
                                    + Create
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className="mx-2 overflow-y-scroll overflow-x-auto tableHeight">
                        <Table hover border border-0 className="mx-1">
                            <thead className='sticky-top'>
                                <tr>
                                    {TableHeader.map((item, index) => (
                                        <th key={index}>{item.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            {isLoading ? (
                                <tbody>
                                    <tr>
                                        <td colSpan="6">
                                            <div className="d-flex justify-content-center align-items-center my-3">
                                                <Spinner animation="border" role="status" variant="info">
                                                    <span className="visually-hidden">Loading...</span>
                                                </Spinner>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ) : (
                                <tbody>
                                    {perPage.map((item, index) => (
                                        <tr key={item.id}>
                                            <td> <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark"> {firstOffset + index + 1} </Link> </td>
                                            <td> <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark">  {item.id}  </Link> </td>
                                            <td>  <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark">  {item.title} </Link> </td>
                                            <td>  <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark"> ${item.price}  </Link> </td>
                                            <td> <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark"> {moment(item.creationAt).subtract(10, 'days').calendar()}  </Link> </td>
                                            <td> <Link to={`/Dashboard/UserList/Edit/${item.id}`} className="text-decoration-none mx-2">  <Icon icon="mdi:edit" style={{ color: ' #8f958c' }} width={'25px'} /> </Link> 
                                                <Button className="border border-0" variant="link" type='submit'> <Icon icon="ic:baseline-delete" style={{ color: ' #ff0000' }} onClick={() => handleShow(item.id)} width={'25px'} /> </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </Table>
                    </div> 
                    <ReactPaginate
                        breakLabel="..." nextLabel="next >" previousLabel="< previous"
                        pageCount={pageCount} onPageChange={handlePageClick}
                        containerClassName={'pagination mt-3 justify-content-center'}
                        pageClassName='page-item text-dark px-2'
                        pageLinkClassName='page-link shadow-none text-dark border border-0 rounded'
                        previousClassName='page-item shadow-none'
                        previousLinkClassName='page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded'
                        nextClassName='page-item'
                        nextLinkClassName='page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded'
                        activeClassName='page-item active'
                        activeLinkClassName='page-link text-white bg-dark fw-semibold shadow-none border border-0 rounded'
                        breakClassName='page-item'
                        breakLinkClassName='page-link text-dark fw-semibold shadow-none bg-white border border-0 rounded'
                    />
                </Col>
            </Row> 

            {/* Delete Modal */}
            <Modal show={show} onHide={handleClose} animation={false} timer={500} className="shadow-none">
                <Modal.Header>
                    <Modal.Title>Confirm Delete</Modal.Title>
                    <Button variant='none' className="btn-close" aria-label="Close" onClick={handleClose} style={{ boxShadow: 'none', outline: 'none' }}></Button>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="none" style={{ border: '2px solid #8f958c', color: '#8f958c' }} onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="text-white bg-dark" variant="none" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserList;
        