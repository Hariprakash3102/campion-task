
import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';

const ToastFunction = (props) => {
    return (
        <ToastContainer className="p-3 me-5 my-5 Toast">
            {/* Toast For Cancel buttton */}
            <Toast show={props.showCancel} delay={3000} autohide onClose={() => props.setShowCancel(false)}>
                <Toast.Body className='bg-warning text-white rounded'>
                    Cancelled the Activity :(
                </Toast.Body>
            </Toast>
            {/* Toast For Save buttton */}
            <Toast show={props.showSave} delay={3000} autohide onClose={() => props.setShowSave(false)}>
                <Toast.Body className='bg-success text-white rounded'>
                    Successfully saved the Activity :)
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
};

export default ToastFunction;
