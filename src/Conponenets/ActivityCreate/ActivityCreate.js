import React, { useState } from 'react';
import '../Css/ActivityCreate.css';
import { Icon } from '@iconify/react';


const ActivityCreate = () => {

  return (
    <div> 
        <div className="row m-1 "  style={{ backgroundColor: '#ffffff' }} >
            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="ActivityName " className='mb-3'>Activity Name <span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3 " id="ActivityName" placeholder="Enter Activity Name" />  
                </div>  
            </div>
                
            <div className="col-12 col-md-6">
                <div className="form-group">
                <label htmlFor="ActivityType" className=" mb-3 ">
                    Activity Type <span className="text-danger">*</span>
                </label>
                <select  className="form-control mb-3" id="ActivityType"  >
                    <option value="disabled" > Select Activity Type   </option>
                    <option value="Family">Family </option>
                    <option value="Hunting">Hunting  </option>
                    <option value="Excursion">Excursion </option>
                </select>
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="PricingType" className='mb-3' >Pricing Type</label>
                    <input type="text" className="form-control mb-3 " id="PricingType" placeholder="select Individual/Hour" />  
                </div>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="Price" className='mb-3' >Price<span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3 " id="Price" placeholder="$" />  
                </div>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="Image " className='mb-3'>Image</label>
                    <input type="text " className="form-control p-lg-4 p-xl-5 text-center border border-dotted mb-3" id="PricingType" placeholder="" value={'+ Upload Image'} />  
                </div>  
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="Info " className='mb-3' >Info</label>
                    <input type="text" className="form-control pt-xl-2 p-lg-4 pb-xl-5 mb-3 " id="Info" placeholder="Enter Info" />  
                </div>  
            </div> 
            
            <div className='col-12 col-md-6 d-flex flex-row flex wrap'>
                <div className=' pt-4 pe-3'>
                <input type="checkbox" className="form-check-input mt-4" id="checklist" />
                </div>
                <div className='w-100'>
                    <div className="form-group">
                        <label htmlFor="OverrideCount" className='mb-3' >Override Individual Count<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3" id="OverrideCount" placeholder="10" />  
                    </div>  
                </div>
            </div>

            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="Price" className='mb-3'>Price<span className='text-danger'>*</span></label>
                    <input type="text" className="form-control mb-3" id="Price" placeholder="$" />  
                </div>  
            </div>

            <div className='col-12 col-md-6 d-flex flex-row flex-nowrap'>
                <div className=' pt-4 pe-3'>
                <input type="checkbox" className="form-check-input mt-4" id="checklist" />
                </div>
                <div className='w-100'>
                    <div className="form-group">
                        <label htmlFor="OverrideCount" className='mb-3'> Custome Field<span className='text-danger'>*</span></label>
                        <input type="text" className="form-control mb-3" id="OverrideCount" placeholder="Enter Customer text" />  
                    </div>  
                </div>
                
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
                <div className="form-group">
                    <label htmlFor="Price" className='mb-3'>Price<span className='text-danger'>*</span></label>
                    <input type="text" className="form-control" id="Price" placeholder="$" />  
                </div>  
            </div>
            <div className='text-primary flex-wrap ps-5 pt-2'>  + Add </div> 
            <div className='col d-flex flex-row justify-content-end  mt-5  mb-4 me-5'>
                <div className='btn border me-3 CancelBtn' style={{ color: '#3f493b', border: '1px solid #3f493b' }}>Cancel</div> 
                <div className=' btn border SaveBtn text-light'  style={{ backgroundColor: ' #3f493b' }} >Save</div> 
            </div> 
        </div> 
    </div>
  );
}

export default ActivityCreate;



