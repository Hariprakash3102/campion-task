import Spinner from 'react-bootstrap/Spinner';
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import moment from "moment";
import Swal from "sweetalert2";
import '../../Css/UserList.css';
import React, {ChangeEvent, useEffect, useState  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Icon } from '@iconify/react';
import { TableHeader } from "../../constant/data";  
// import { deleteApi } from "../ApiCall/Apicall"; //future refrence
import ReactPaginate from 'react-paginate';
// import { useDispatch, useSelector } from 'react-redux'; //future refrence
import {useDeleteRtkMutation, useGetRtkQuery,usePaginateRtkQuery } from '../../Redux/slices';

const UserList: React.FC = () => { 

    interface userList {
        id:number,
        title:string,
        price:number, 
        creationAt: Date
    }

//refrence for redux and axios CURD operation
    // const [data, SetData] = useState([]);
    // const [loading, SetLoading] = useState(true);
    // const [error, SetError] = useState(null); 
    // const dispatch = useDispatch();
    const {data,isLoading,error,refetch} = useGetRtkQuery({});
    
    const [deleteItem] =useDeleteRtkMutation();
    const [show, SetShow] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const [deleteId, SetdeleteId] = useState<number>(); 
    const nav = useNavigate();      
    const [search, setSearch] = useState<string>("");
    const [save, setSave] = useState<string>("");
    const [item, setItem] = useState<number>(0);
    const itemPerpage: number = 10;

// for reference by API call paginate 
    // const offset: number = item * itemPerpage;
    // const {data,isLoading,error,refetch} = usePaginateRtkQuery({ offset: offset, limit: itemPerpage });

    useEffect(() => {
        refetch();      
    }, []);

    const handlePageClick = (event: {selected: number}) => { 
        setItem(event.selected);
    }

    const handleShow = (id: number) => {
        SetdeleteId(id);
        SetShow(true);
    };

    const handleClose = () => SetShow(false);

    const handleDelete = async () => {
        setSubmit(true);
        Swal.fire ({ title: "Deleted!", text: "Your file has been deleted.", icon: "success", timer: 1000})
        try {
            await deleteItem(deleteId);
            refetch();
            SetShow(false);
        } catch (e) {
            console.error(`Error:`, e);
            alert("Try Again");
            SetShow(false);
        }
        finally{
            setSubmit(false);
        }
    };

    const filteredData: userList[] = data ? data.filter((item: { title: string; }) => 
        search.toLowerCase() === '' ? true : item.title.toLowerCase().includes(search.toLowerCase())     
    ) : [];

    const firstOffset: number = item * itemPerpage;
    const LastOffset: number = firstOffset + itemPerpage;
    const perPage: userList[]  = filteredData.slice(firstOffset, LastOffset);
    const pageCount: number = Math.ceil(filteredData.length / itemPerpage);

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
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                            />
                            <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                                <Icon  icon="ic:round-search"  className='searchStyle' width={'35px'} onClick={() => { setSave(search) }}  />
                            </span>
                        </Col>
                        <Col xs={1} className="d-flex ms-auto ms-md-0 createButton">
                            <Link to='/Dashboard/UserList/Create'>
                                <Button  className="my-3 justify-content-evenly fs-6 text-white fw-semibold border border-0 bg-dark"
                                    variant="none"> + Create </Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className="mx-2 overflow-y-scroll overflow-x-auto tableHeight">
                        <Table hover border-0 className="mx-1">
                            <thead className='sticky-top'>
                                <tr>
                                    {TableHeader.map((item, index:number) => (
                                        <th key={index}>{item.name}</th>
                                    ))}
                                </tr>
                            </thead>
                            {isLoading ? (
                                <tbody>
                                    <tr>
                                        <td colSpan={6} className='text-center'> 
                                                <Spinner animation="border" variant="info" />   
                                        </td>
                                    </tr>
                                </tbody>
                            ) : (
                                <tbody>
                                    {perPage.map((item: userList, index: number) => (
                                        <tr key={item.id}>
                                            <td> <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark"> {firstOffset + index + 1} </Link> </td>
                                            <td> <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark">  {item.id}  </Link> </td>
                                            <td>  <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark">  {item.title} </Link> </td>
                                            <td>  <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark"> ${item.price}  </Link> </td>
                                            <td> <Link to={`/Dashboard/UserList/${item.id}`} className="text-decoration-none text-dark"> {moment(item.creationAt).subtract(10, 'days').calendar()}  </Link> </td>
                                            <td> <Link to={`/Dashboard/UserList/Edit/${item.id}`} className="text-decoration-none mx-2">  <Icon icon="mdi:edit" className='editStyle' width={'25px'} /> </Link> 
                                                <Button className="border border-0" variant="link" type='submit'> <Icon icon="ic:baseline-delete" className='deleteStyle' onClick={() => handleShow(item.id)} width={'25px'} /> </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            )}
                        </Table>
                    </div> 
                    <ReactPaginate
                        breakLabel="..." nextLabel="Next >" previousLabel="< Previous"
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
                {error && 'Page Not Found : 404 ERROR'}
            </Row> 

            {/* Delete Modal */}
            <Modal show={show} onHide={handleClose} animation={false} timer={500} className="shadow-none">
                <Modal.Header>
                    <Modal.Title>Confirm Delete</Modal.Title>
                    <Button variant='none' className="btn-close close-Button" aria-label="Close" onClick={handleClose} ></Button>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="none" className='cancelButtonStyle' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className="text-white bg-dark" variant="none" onClick={handleDelete} disabled={submit}> Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserList;
        