import './App.css';
import ActivityCreate from './Conponenets/ActivityCreate/ActivityCreate';
import Navbar from './Conponenets/Navbar/Navbar';
import Sidebar from './Conponenets/Sidebar/Sidebar';
import { Icon } from '@iconify/react';


function App() {
  return(
      <div>
        <div className="row  m-0 vh-100"  style={{ backgroundColor: '#fafafa' }} >
          {/* Side bar start */}
          <div className="col-3 col-xl-2 shodow-md-none shadow-lg-sm vh-100 sticky-top d-none d-lg-block"  style={{ backgroundColor: '#ffffff' }} >
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


export default App;  
