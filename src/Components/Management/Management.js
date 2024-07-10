import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import ActivityCreate from '../ActivityCreate/ActivityCreate';
import { Icon } from '@iconify/react';


const Management= () => {
    return(
        <div>
            <div className="row  m-0 vh-100"  style={{ backgroundColor: '#fafafa' }} >
                {/* Side bar start */}
                <div className="col-3 col-xl-2 shadow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block"  style={{ backgroundColor: '#ffffff' }} >
                    <Sidebar />
                </div>
                {/* Side bar end */} 

                <div className='col-12 col-lg-9 shadow-lg col-xl-10 p-0'>
                    {/* nav bar start */}
                    <Navbar /> 
                    {/* navbar end */}

                    {/* Create start*/}
                    <div className='col p-4'>
                        <div className='col'>
                                <div className='mb-3'><Icon icon="material-symbols:arrow-left-alt" /> Create</div>
                        </div>  
                        
                        <div className=''>
                                <ActivityCreate />
                        </div>
                    </div>
                    {/* Create end */}
                </div>

            </div>
        </div>
    );
}

export default Management;