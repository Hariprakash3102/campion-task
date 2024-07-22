const input = [
    { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter the Email' },
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter the Password' }
];

export default input;

// import { ErrorMessage, Field } from "formik";
// import React from "react";


// const Input = (values,handleChange, handleBlur,showpassword) => {
//   const inputObject = [
//     { label: "email", name: "email", type: "email" },
//     { label: "password", name: "password", type: "password" },
//   ];
//   return (
//     inputObject.map((inputField, i) => {
//         <div key={i}>
//             <label className="form-label fs-6 fw-semibold" htmlFor={inputField.name}> {inputField.label} </label>
//             <span className="text-danger">*</span>
//             <Field type={inputField.name === 'password' && !showpassword ? "text" : inputField.type} 
//             id={inputField.name} name={inputField.name} className="form-control w-100 mb-2 p-2 ps-4 pb-3" placeholder="Enter the Email"
//              onChange={handleChange} onBlur={handleBlur} />
//              <ErrorMessage name={inputField.name} component='div' className="error-message text-danger" />
//         </div>
//     })
// );
// };

// export default Input;