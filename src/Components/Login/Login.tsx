import React, { useEffect, useState } from "react";
import "../../Css/Login.css";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import logo from "../Assets/logo.png" assert { type: "image/png" };
import axios from "axios";
import LoginForm from "./LoginForm.tsx";
import { server } from "typescript";

const gmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const password = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,20}$/;

const validSchema = Yup.object().shape({
  email: Yup.string()
    .matches(gmail, "Email is Invalid")
    .required("Email is Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is Required")
  // for future use
  // .test('has-uppercase', 'Password must have at least one uppercase letter', value => /[A-Z]/.test(value))
  // .test('has-digit', 'Password must have at least one digit', value => /\d/.test(value))
  // .test('has-special-char', 'Password must have at least one special character', value => /[!@#$%^&*]/.test(value))
});
interface formInput{
     email: string ;
     password: string;

}

const logo = require("../../Assets/logo.png") as string;

const Login: React.FC = () => {
  const [showpassword, SetShowpasword] = useState(true);
  const handlepasswordShow = () => SetShowpasword(!showpassword);
   const [serverError, setServerError] = useState<string>("");
  const nav = useNavigate();

  // useEffect(() => {
  //   localStorage.removeItem('1st_token');
  // }, []);

  const initialValues: formInput = { email: "", password: "" }

  const onSubmit =async (
    values: formInput,
    {setErrors} : FormikHelpers<formInput>
  ) => {
    try {
      setServerError("");
      //token generate
      const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", {
        email: values.email,
        password: values.password
      })
      if (response.data.access_token) {
        sessionStorage.setItem('1st_token', response.data.access_token);
        nav('/Dashboard');
      }
      else setServerError(  'Invalid credentials' )
    }
    catch (e) {
      setServerError('Error in logging in: please try again' )
    }
  }
  
  return (
    <Formik
      initialValues ={initialValues}
      validationSchema={validSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
        <div className="vh-100 d-flex justify-content-center align-items-center bgimg">
          <div className="col-11 col-md-6 col-lg-4 col-xl-3 align-items-center d-flex justify-content-center shadow-lg loginBox bg-white">
            <div className="col-11 py-5 pt-md-0 pb-md-3">
              <div className="d-flex justify-content-center my-2 pt-3">
                <img src={logo} alt="Logo" width={"230px"} />
              </div>
              <hr />
              <p className="mb-4 text-center fs-5 fw-semibold">Login</p>
              <LoginForm
                errors={errors}
                touched={touched}
                handlePasswordShow={handlepasswordShow}
                showPassword={showpassword}
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
              />
              {serverError && <div className="error-message text-danger text-center">{serverError}</div>}
              <div className="row py-3">
                <div className="col-12 col-md-6 pe-0">
                  <input type="checkbox" className="me-2" />
                  <span className="fontSize">Keep me logged in</span>
                </div>
                <div className="col-12 col-md-6 text-start text-md-end pt-3 pt-md-0 fontSize">
                  <button className="w-auto btn p-0 rounded border border-0" type="button">
                    Forgot Password?
                  </button>
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
