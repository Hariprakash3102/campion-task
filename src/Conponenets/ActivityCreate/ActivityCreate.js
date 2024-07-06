import React, { useState } from 'react';
import '../Css/ActivityCreate.css';
import Dropdown from 'react-bootstrap/Dropdown';
// import Button from 'react-bootstrap/Button';
import { Icon } from '@iconify/react';


const ActivityCreate = () => {

   
  return (
    <div> 
        <div className="row m-1 "  style={{ backgroundColor: '#ffffff' }} >
            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="ActivityName " className='mb-3'>Activity Name <span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3 p-2" id="ActivityName" placeholder="Enter Activity Name" />  
                </form>  
            </div>
                
            <div className="col-12 col-md-6">
                <form className="form-group">
                    <label htmlFor="ActivityType" className="mb-3">
                        Activity Type <span className="text-danger">*</span>
                    </label>
                    <Dropdown  className="mb-3">
                        <Dropdown.Toggle className="form-control bg-white w-100 p-2 border border-none rounded text-start text-dark"  id="ActivityTypeDropdown"  >
                           {/* <span className='text-start pe-5 '> Enter Activity Type </span> */}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100">
                            <Dropdown.Item eventKey="Family">Family</Dropdown.Item>
                            <Dropdown.Item eventKey="Hunting">Hunting</Dropdown.Item>
                            <Dropdown.Item eventKey="Excursion">Excursion</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown> 
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
                    <label htmlFor="Image " className='mb-3'>Image</label>
                    <input type="text " className="form-control p-4 p-md-5 text-center border border-dotted mb-3" id="PricingType" placeholder="" value={'+ Upload Image'} />  
                </form>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <form className="form-group">
                    <label htmlFor="Info " className='mb-3' >Info</label>
                    <input type="text" className="form-control  p-4 p-md-5  mb-3 " id="Info" placeholder="Enter Info" />  
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
            <div className='col d-flex flex-row justify-content-end  mt-5  mb-4 me-5'>
                <button className=' btn border me-3 CancelBtn bg-light' style={{ color: '#3f493b'}}>Cancel</button> 
                <button className=' btn border SaveBtn text-light '  style={{ backgroundColor: '#3f493b'}}>Save</button> 
            </div> 
        </div> 
    </div>
  );
}

export default ActivityCreate;



