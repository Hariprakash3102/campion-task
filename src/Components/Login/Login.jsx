import React from "react";
import "../Css/Login.css";
import logo from "../Assets/logo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

const input = ({field,form, ...props}) =><input {...field} {...props} />

const validSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
        .min(6, "password must at least 6 characters")
        .max(20, "Password must at most 20 character")
        .required("password is Required"),
});

const Login = () => {

    const {values,handleChange,handleBlur,handleSubmit} =useFormik({
        initialValues: {email:"",password:""},
        validationSchema: validSchema,
        onSubmit:( values) => {console.log(values);},
    });
    return (
        <div>
            <div className="vh-100 d-flex justify-content-center align-items-center  bgimg">
                <div className="col-11 col-md-6 col-lg-4 col-xl-3 align-items-center d-flex justify-content-center shadow-lg loginBox bg-white">
                    <div className="col-11  py-5 pt-md-0 pb-md-3">
                        <div className="d-flex justify-content-center my-2 pt-3">
                            <img src={logo} alt="Logo_Img" width={"230px"} />
                        </div>
                        <hr />
                        <p className="mb-4 text-center fs-5 fw-semibold">Login</p>
                        <Form className="position-relative" onSubmit={handleSubmit}>
                            <label className="form-label  fs-6 fw-semibold" htmlFor="email">
                                Email
                            </label>
                            <span className="text-danger">*</span>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="form-control w-100 mb-2 p-2 ps-4 pb-3 "
                                placeholder="Enter the Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <ErrorMessage name='email'  component="div" className="error-message" />
                            <label
                                className="form-label  fs-6 fw-semibold "
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <span className="text-danger position-relative">*</span>
                            <Field
                                type="password"
                                id="password"
                                name="password"
                                className="form-control w-100  mb-2 p-2 ps-4 pb-3 "
                                placeholder="Enter the Password"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                            />
                            <div className="position-absolute eyeIcon">
                                <Icon
                                    icon="clarity:eye-hide-line"
                                    style={{ color: "#6f7f78" }}
                                    width={"25px"}
                                />
                            </div>
                            <ErrorMessage name='password' component="div"  className="error-message" />
                        </Form>
                        <div className="row py-3">
                            <div className="col-12 col-md-6 pe-0 ">
                                <input type="checkbox" className=" me-2" />
                                <span className="fontSize">Keep me logged in</span>
                            </div>
                            <div className="col-12 col-md-6 text-start text-md-end pt-3 pt-md-0 fontSize">
                                <button
                                    className=" w-auto btn p-0 rounded border border-0 "
                                    type="button"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        </div>
                        <div className="btn w-100 text-center fs-6  fw-semibold text-light bgColor mb-3 p-2 " onSubmit={handleSubmit}>
                            Login
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
