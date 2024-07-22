import React, { useState } from "react";
import "../Css/Login.css";
import logo from "../Assets/logo.png";
import { Icon } from "@iconify/react";
import { ErrorMessage,Formik,Field,Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; 
const gmailRegExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const password = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,20}$/;

const validSchema = Yup.object().shape({
    email: Yup.string() 
    .matches(gmailRegExp, "Email is Invalid")
    .required("Email is Required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(20, "Password must be at most 20 characters")
        .required("Password is Required")
        .matches(password, "Email is Invalid"),
});
const Login = () => {
    const [showpassword,SetShowpasword] = useState(true);
    const handlepasswordShow = () =>  SetShowpasword(!showpassword);
    return (
        <Formik initialValues={{ email: "", password: "" }} validationSchema={validSchema} onSubmit={(values) => { console.log(values); }} >
            {({ values, handleChange, handleBlur, handleSubmit }) => (
                <div className="vh-100 d-flex justify-content-center align-items-center bgimg">
                    <div className="col-11 col-md-6 col-lg-4 col-xl-3 align-items-center d-flex justify-content-center shadow-lg loginBox bg-white">
                        <div className="col-11 py-5 pt-md-0 pb-md-3">
                            <div className="d-flex justify-content-center my-2 pt-3"> <img src={logo} alt="Logo_Img" width={"230px"} /> </div> <hr />
                            <p className="mb-4 text-center fs-5 fw-semibold">Login</p>
                            <Form onSubmit={handleSubmit}> 
                                <label className="form-label fs-6 fw-semibold" htmlFor="email"> Email </label>
                                <span className="text-danger">*</span>
                                <Field type="email" id="email" name="email" className="form-control w-100 mb-2 p-2 ps-4 pb-3 shadow-none" placeholder="Enter the Email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
                                <ErrorMessage name="email" component="div" className="error-message text-danger" /> 
                                <label className="form-label fs-6 fw-semibold position-relative" htmlFor="password">
                                    Password
                                </label>
                                <span className="text-danger ">*</span>
                                <div className="position-relative">
                                    <Field type={showpassword ? "password" :"text"} id="password" name="password" className="form-control w-100 mb-2 p-2 ps-4 pb-3 shadow-none" placeholder="Enter the Password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                                    <div className="eyeIcon position-absolute Color" onClick={handlepasswordShow}> 
                                        <Icon icon= {showpassword ?"clarity:eye-hide-line" : "clarity:eye-line" } width={"25px"} /> </div>
                                </div>
                                <ErrorMessage name="password" component="header" className="error-message text-danger mb-2" /> 
                                <Link  to='/Dashboard' className="text-decoration-none text-white"> <button className="btn w-100 text-center fs-6 fw-semibold text-light bgColor mb-3 p-2" type="submit">
                                 Login  </button></Link>
                            </Form>
                            <div className="row py-3">
                                <div className="col-12 col-md-6 pe-0">
                                    <input type="checkbox" className="me-2" />
                                    <span className="fontSize">Keep me logged in</span>
                                </div>
                                <div className="col-12 col-md-6 text-start text-md-end pt-3 pt-md-0 fontSize">
                                    <button className="w-auto btn p-0 rounded border border-0"  type="button" > Forgot Password? </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    );
};
export default Login;
