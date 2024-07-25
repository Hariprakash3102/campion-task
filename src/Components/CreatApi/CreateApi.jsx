import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { postApi } from "../ApiCall/Apicall";
import { Formik } from "formik";
import * as Yup from 'yup';

const CreateApi = () => {
    const initialValues = { title: '', price: 0, description: '', images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzxjfMjne_J9GwgLaaU-NMgD2D0CWPKzVlg&s'], categoryId: 0, };
    const [data, SetData] = useState([]);
    const nav = useNavigate();


    const handleCreate = (value) => {
        postApi(value)
            .then(response => {
                SetData([...data, response.data]);
                Swal.fire({ position: "top-center", icon: "success", title: "saved", showConfirmButton: false, timer: 1500 });
                nav('/Dashboard/UserList');
            })
            .catch(e => {
                console.error(e);
                alert('try again');

            })
    };

    const handleCancel = () => {
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
        nav('/Dashboard/UserList')
    }
    return (
        <div>
            <Row className=" m-0">
                {/* Side bar start */}
                <Col xs={3} xl={2} className="shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block bg-white "   >
                    <Sidebar />
                </Col>
                {/* Side bar end */}

                <Col xs={12} lg={9} xl={10} className='m-0 p-0 '>
                    {/* nav bar start */}
                    <Navbar />
                    {/* navbar end */}
                    <div className="text-center align-items-center mt-5" >
                        <h2 className=""> Create Items</h2>
                    </div>

                    <Row className="m-0 ">
                        <Col xs={0} md={2} lg={3} xl={4}>
                        </Col>
                        <Col xs={12} md={8} lg={6} xl={4} className="px-2">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={Yup.object({
                                    title: Yup.string().required('Required'),
                                    price: Yup.number().required('Required'),
                                    description: Yup.string().required('Required'),
                                    categoryId: Yup.number().required('Required')
                                })}
                                onSubmit={handleCreate} >

                                {({ errors, touched, values, handleChange, handleSubmit }) => (
                                    <Form className="mt-5" onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="title">Title :</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="title"
                                                id="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                isInvalid={!!errors.title && touched.title}
                                                className="shadow-none"
                                            />
                                            {/* <Form.Control.Feedback type="invalid">{errors.title}</Form.Control.Feedback> */}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label htmlFor="price">Price :</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="price"
                                                id="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                isInvalid={!!errors.price && touched.price}
                                                className="shadow-none"
                                            />
                                            {/* <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback> */}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicDescription">
                                            <Form.Label htmlFor="description">Description :</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="description"
                                                id="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                isInvalid={!!errors.description && touched.description}
                                                className="shadow-none"
                                            />
                                            {/* <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback> */}
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCategoryId">
                                            <Form.Label htmlFor="categoryId">CategoryId :</Form.Label>
                                            <Form.Control
                                                type="number"
                                                name="categoryId"
                                                id='categoryId'
                                                value={values.categoryId}
                                                onChange={handleChange}
                                                isInvalid={!!errors.categoryId && touched.categoryId}
                                                className="shadow-none"
                                            />
                                            {/* <Form.Control.Feedback type="invalid">{errors.categoryId}</Form.Control.Feedback> */}
                                        </Form.Group>
                                        <div className="d-flex justify-content-center">
                                            <Button className="mx-2 border-0 bg-dark" type="submit">Create</Button>
                                            <Button variant='none' style={{ border: '2px solid #8f958c', color: '#8f958c' }} onClick={handleCancel}>Cancel</Button>
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

export default CreateApi;