import React, { useState } from 'react';
import '../../Css/ActivityCreate.css'
import Form from 'react-bootstrap/Form';
import ToastFunction from './ToastFunction';

const ActivityCreate = () => { 
    const [showCancel, setShowCancel] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const [ActivityName,setActivityName] =useState('');
    const [active, setActive] = useState(true);
    const [activeCustome,setactiveCustome] = useState(true); 
    
    const handleAcitivityName = (event) => {
        setActivityName(event.target.value);
    }; 
    const handleOverrideCount = () => {
        setActive(prevActive => !prevActive);
    }; 
    const handlecustomeField = () => {
        setactiveCustome(prevActive => !prevActive);
    }; 
    const handleCancel = () => {
      setShowCancel(true);
    }; 
    const handleSave = () => {
      setShowSave(true);
    };
  return (
    <div> 
        {/* Form Started */}
        <Form onSubmit={event => event.preventDefault()} >
            <div className="row m-1 bg-white "  >  
                {/* Activity Name Started */}
                <div className='col-12 col-md-6 col-lg-6'>
                    <Form.Group>
                        <label htmlFor="ActivityName " className='my-3 ' >Activity Name <span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3" id="ActivityName" placeholder="Enter Activity Name" value={ActivityName} onChange={handleAcitivityName}  />  
                    </Form.Group> 
                </div> 
                {/* Activity Name ended */}
                {/* Activity Type Started */}
                <div className="col-12 col-md-6">
                    <Form.Group>
                        <label htmlFor="ActivityType" className="my-3"> Activity Type <span className="text-danger">*</span> </label>  
                        <Form.Select aria-label="Default select example" >
                            <option value="Enter Activity Type">Select Activity Type</option>          
                            <option value="Family">Family</option>
                            <option value="Hunting">Hunting</option>
                            <option value="Excursion">Excursion</option> 
                        </Form.Select> 
                    </Form.Group>
                </div>
                {/* Activity Type ended */}
                {/* Pricing type started */}
                <div className='col-12 col-md-6 col-lg-6'>
                    <Form.Group>
                        <label htmlFor="PricingType" className='mb-3' >Pricing Type</label>
                        <Form.Select>
                        <option value="Select Individual/Hour">Select Individual/Hour</option> 
                        </Form.Select>
                    </Form.Group>  
                </div>
                {/* Pricing type ended */}
                {/* 1st price col started */}
                <div className='col-12 col-md-6 col-lg-6'>
                    <Form.Group>
                        <label htmlFor="Price" className='mb-3' >Price<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3  p-2 " id="Price" placeholder="$10" />  
                    </Form.Group>
                </div>
                {/* 1st price col ended */}
                {/* Image Started */}
                <div className='col-12 col-md-6 col-lg-6'>
                    <Form.Group>
                        <label htmlFor="Image " className='mb-3 '>Image</label>
                        <input type="file " className="form-control  ps-md-5 text-center mb-3 Image" id="Image" placeholder=" + upload file"  />  
                    </Form.Group>  
                </div>
                {/* Image ended */}
                {/* Info Started */}
                <div className='col-12 col-md-6 col-lg-6'>
                    <Form.Group> 
                        <label htmlFor="Info " className='mb-3' >Info</label>
                        <input type="text" className="form-control    mb-3 " id="Info" placeholder="Enter Info"/>                  
                    </Form.Group> 
                </div> 
                {/* Info ended */}
                {/* Override count with checklist Started */}
                <div className='col-12 col-md-6 d-flex flex-row flex wrap'>
                    <Form.Group className='pt-4 pe-1'>
                        <input type="checkbox" className="form-check-input mt-4" id="checklist" onChange={handleOverrideCount} />
                    </Form.Group>
                    <Form.Group className='w-100'>
                        <label htmlFor="OverrideCount" className='mb-3'> Override Individual Count <span className='text-danger'>*</span> </label> 
                        <input type="text" className="form-control mb-3 p-2" id="OverrideCount" disabled={active} />
                    </Form.Group>
                </div>  
                {/* Override count with checklist ended */}
                {/* 2nd price col started */}
                <div className='col-12 col-md-6 col-lg-6'>
                    <Form.Group>
                        <label htmlFor="Price" className='mb-3'>Price<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3 p-2" id="Price" disabled={active} />  
                    </Form.Group>  
                </div>
                {/* 2nd price col ended */}
                {/* Customer Field with checklist Started */}
                <div className='col-12 col-md-6 d-flex flex-row flex-nowrap'>
                    <Form.Group className=' pt-4 pe-1'>
                        <input type="checkbox" className="form-check-input mt-4 " id="checklist" onChange={handlecustomeField} />
                    </Form.Group>
                    <Form.Group className='w-100'> 
                        <label htmlFor="customeField" className='mb-3 '> Custome Field<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3 p-2" id="customeField" disabled={activeCustome}  />   
                    </Form.Group> 
                </div>
                {/* Customer Field with checklist Ended */}
                {/* 3rd price col Started */}
                <Form.Group className='col-12 col-md-6 col-lg-6'>
                        <label htmlFor="Price" className='mb-3'>Price<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control p-2" id="Price" disabled={activeCustome} />  
                </Form.Group>
                {/* 3rd price col ended */}
                <div className=' col-2 border border-0 btn text-primary flex-wrap ps-5 pt-2' aria-disabled >  + Add </div>  
                {/* Buttons for Save and Cancel */}
                <div className='col-12 d-flex justify-content-end my-3'>
                    <button className=' btn me-3 CancelBtn border bg-white' onClick={handleCancel}>Cancel</button>
                    <button  className='btn me-3 SaveBtn' onClick={handleSave}>Save</button>       
                </div>
                {/* Toaster */}
                <ToastFunction showCancel={showCancel} setShowCancel={setShowCancel} showSave={showSave} setShowSave={setShowSave} /> 
            </div>
        </Form> 
        {/* Form ended */}
        
    </div>
  );
} 
export default ActivityCreate;



