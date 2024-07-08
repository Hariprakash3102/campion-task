import React, { useState } from 'react';
import '../Css/ActivityCreate.css';
import Toast from 'react-bootstrap/Toast';  
import ToastContainer from 'react-bootstrap/ToastContainer'
import Form from 'react-bootstrap/Form';

const ActivityCreate = () => { 
    const [showCancel, setShowCancel] = useState(false);
    const [showSave, setShowSave] = useState(false);
  
    const handleCancel = () => {
      setShowCancel(true);
    };
  
    const handleSave = () => {
      setShowSave(true);
    };
    
  return (
    <div> 
        <div className="row m-1 "  style={{ backgroundColor: '#ffffff' }} >
            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="ActivityName " className='my-3 '>Activity Name <span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3" id="ActivityName" placeholder="Enter Activity Name" />  
                </form>  
            </div>
                
            <div className="col-12 col-md-6">
                <form className="form-group">
                    <label htmlFor="ActivityType" className="my-3">
                        Activity Type <span className="text-danger">*</span>
                    </label>  
                    <Form.Select aria-label="Default select example" >
                        <option value="Enter Activity Type">Enter Activity Type</option>          
                        <option value="Family">Family</option>
                        <option value="Hunting">Hunting</option>
                        <option value="Excursion">Excursion</option> 
                    </Form.Select> 
                </form>
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="PricingType" className='mb-3' >Pricing Type</label>
                    <input type="text" className="form-control mb-3  p-2 " id="PricingType" placeholder="select Individual/Hour" />  
                </form>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="Price" className='mb-3' >Price<span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3  p-2 " id="Price" placeholder="$" />  
                </form>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="Image " className='mb-3 '>Image</label>
                    <input type="file " className="form-control p-4 p-md-5 text-center mb-3 Image" id="PricingType" placeholder=" + upload file"  />  
                </form>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="Info " className='mb-3' >Info</label>
                    <input type="text" className="form-control  p-4 pb-md-5 pt-md-0  mb-3 " id="Info" placeholder="Enter Info" style={{height :'124px'}} />  
                </form>  
            </div> 

            <div className='col-12 col-md-6 d-flex flex-row flex wrap'>
                <form className=' pt-4 pe-1'>
                    <input type="checkbox" className="form-check-input mt-4" id="checklist" />
                </form>
                <form className='w-100'>
                    <div className="form-group">
                        <label htmlFor="OverrideCount" className='mb-3' >Override Individual Count<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3 p-2" id="OverrideCount" placeholder="10" />  
                    </div>  
                </form>
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="Price" className='mb-3'>Price<span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3 p-2" id="Price" placeholder="$" />  
                </form>  
            </div>

            <div className='col-12 col-md-6 d-flex flex-row flex-nowrap'>
                <form className=' pt-4 pe-1'>
                    <input type="checkbox" className="form-check-input mt-4 " id="checklist" />
                </form>
                <form className='w-100'>
                    <div className="form-group">
                        <label htmlFor="OverrideCount" className='mb-3 '> Custome Field<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3 p-2" id="OverrideCount" placeholder="Enter Customer text" />  
                    </div>  
                </form> 
        </div>
            <form className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="Price" className='mb-3'>Price<span className='text-danger'>*</span></label>
                    <input type="text" className="form-control p-2" id="Price" placeholder="$" />  
                </div>  
            </form>
            <div className='text-primary flex-wrap ps-5 pt-2'>  + Add </div> 

            
            <div className='col-12 d-flex justify-content-end mt-3'>
                <button className=' btn me-3 CancelBtn border bg-white' onClick={handleCancel}>Cancel</button>
                <button  className='btn me-3 SaveBtn' onClick={handleSave}>Save</button>
            </div>

            <ToastContainer className="p-3 me-5 mt-5 Toast">
                <Toast  show={showCancel}  delay={3000} autohide onClose={ () => setShowCancel(false)}>
                    <Toast.Body className='bg-warning text-white rounded'>
                        Cancelled the Activity :( 
                    </Toast.Body>
                </Toast>
                <Toast onClose={() => setShowSave(false)} show={showSave} delay={3000} autohide>
                    <Toast.Body className='bg-success text-white rounded'>
                        Successfully saved the Activity :)
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div> 
    </div>
  );
}

export default ActivityCreate;



