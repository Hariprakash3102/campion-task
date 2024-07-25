import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import '../Css/EditApi.css'
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getidApi, putApi } from "../ApiCall/Apicall";
import { Formik } from "formik";
import * as Yup from 'yup';

const EditApi = () => {

    const InitialValue = { id: 0, title: '', price: 0, description: '', } 
    const { EditId } = useParams(); 
    const Nav = useNavigate(); 
    const [data, SetData] = useState("") 
    const [loading, SetLoading] = useState(true); 
    const [error, SetError] = useState(""); 
    const [info, SetInfo] = useState(InitialValue);

    useEffect(() => {
        const ProductDetails = async () => {
            try {
                const response = await getidApi(EditId);
                SetData(response.data);
                SetInfo({
                    id: response.data.id,
                    title: response.data.title,
                    price: response.data.price,
                    description: response.data.description,
                });
                SetLoading(false);
            }
            catch (e) {
                SetError(e);
                SetLoading(false);
            }
        };
        ProductDetails();
    }, [EditId]);

    const handleUpdate = async (value) => {
        try {
            const response = await putApi(EditId, value);
            console.log(response.data);
            SetData(response);
            Swal.fire({ title: "Updated!", text: "Data updated successfully!", icon: "success", timer: 500 });
            Nav('/Dashboard/UserList');
        }
        catch (e) {
            console.error('Error ', e);
            SetLoading(false);
        };
    }

    const handleCancel = async () => {
        try {
            Swal.fire({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                },
                icon: "error",
                title: "Canceled !!"
            });

            Nav('/Dashboard/UserList');
        }
        catch (e) {
            console.error('Error: ', e);
        }
    } 

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status" variant="info">
                </Spinner>
                <span className="text-info">Loading</span>
            </div>
        );
    }

    return (

        <div>
            <Row className="m-0">
                {/* Side bar start */}
                <Col xs={3} xl={2} className="shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block bg-white "   >
                    <Sidebar />
                </Col>
                {/* Side bar end */}

                <Col xs={12} lg={9} xl={10} className=' m-0 p-0 '>
                    {/* nav bar start */}
                    <Navbar />
                    {/* navbar end */}
                    <div className="text-center align-items-center mt-5" >
                        <h2 className="">Update Items</h2>
                    </div>

                    <Row className="m-0">
                        <Col xs={0} md={2} lg={3} xl={4}>
                        </Col>
                        <Col xs={12} md={8} lg={6} xl={4} className="px-2">
                            <Formik
                                initialValues={data}
                                validationSchema={Yup.object({
                                    title: Yup.string().required('Required'),
                                    price: Yup.number().required('Required'),
                                    description: Yup.string().required('Required')
                                })}
                                onSubmit={handleUpdate} >

                                {({ errors, touched, values, handleChange, handleSubmit }) => (
                                    <Form className="mt-5" onSubmit={handleSubmit} >
                                        <Form.Group className="mb-3 " controlId="formBasicId">
                                            <Form.Label className="" htmlF="id"> Id :  </Form.Label>
                                            <Form.Control type="text" name="id" id="id" value={data.id} readOnly />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicTitle" >
                                            <Form.Label htmlF="title"> Title : </Form.Label>
                                            <Form.Control type="text" name="title" id="title" value={values.title} isInvalid={!!errors.title && touched.title} onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label htmlF="price"> Price : </Form.Label>
                                            <Form.Control type="text" name="price" id="price" value={values.price} isInvalid={!!errors.price && touched.price} onChange={handleChange} />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicDescription">
                                            <Form.Label htmlF="description"> Description : </Form.Label>
                                            <Form.Control type="text" name="description" id="description" value={values.description} isInvalid={!!errors.description && touched.description} onChange={handleChange} />
                                        </Form.Group>
                                        <div className="d-flex justify-content-center">
                                            <Button variant='none' className="mx-2 bg-dark text-white updateBtn" type="submit">Update</Button>
                                            <Button variant='none' className="cancelBtn" onClick={handleCancel}>Cancel</Button>
                                        </div>
                                    </Form>
                                )}

                            </Formik>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default EditApi;