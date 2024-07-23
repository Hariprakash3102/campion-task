import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ErrorMessage, Field, Form } from "formik"; 
 
const LoginForm = (props) => {
    return (
        <div>
            <Form onSubmit={props.handleSubmit}>
                <label className={`form-label fs-6 fw-semibold ${props.errors.email && props.touched.email ? 'text-danger' :''}`} htmlFor="email"> Email</label>
                <span className="text-danger">*</span>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={`form-control w-100 mb-2 p-2 ps-4 pb-3 shadow-none ${props.errors.email && props.touched.email ? 'border-danger' : ''} `}
                  placeholder="Enter the Email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                />
                <ErrorMessage name="email" component="div" className="error-message text-danger " />

                <label className={`form-label fs-6 fw-semibold position-relative" htmlFor="password ${props.errors.password && props.touched.password ? 'text-danger' :''}`} >
                  Password
                </label>
                <span className="text-danger ">*</span>
                <div className="position-relative">
                  <Field type={props.showpassword ? "password" : "text"} id="password"
                    name="password" className={`form-control w-100 mb-2 p-2 ps-4 pb-3 shadow-none ${props.errors.password && props.touched.password ? 'border-danger outline-danger' :''}`}
                    placeholder="Enter the Password" onChange={props.handleChange}
                    onBlur={props.handleBlur} value={props.values.password}
                  />
                  <div
                    className="eyeIcon position-absolute Color"
                    onClick={props.handlepasswordShow}
                  >
                    <Icon
                      icon={ props.showpassword ? "clarity:eye-hide-line" : "clarity:eye-line" }  width={"25px"} />{" "}
                  </div>
                </div>
                <ErrorMessage name="password" component="header" className="error-message text-danger mb-2" />

                
                  <button className="btn w-100 text-center fs-6 fw-semibold text-light bgColor mb-3 p-2" type="submit" >
                    Login{" "}
                  </button>
               
              </Form>
        </div>
    );
}

export default LoginForm;