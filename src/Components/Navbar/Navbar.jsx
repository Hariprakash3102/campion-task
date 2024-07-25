import { Icon } from '@iconify/react';
import { useState } from 'react';
import user from '../Assets/user.png';
import ToggleButton from '../Assets/Toggle.png'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Sidebar from '../Sidebar/Sidebar';
import '../Css/Navbar.css'

const Navbar = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
            <div className="pt-1 bg-white height">
                <div className=" ms-3 d-flex flex-row sticky-top ">
                    <div className='mt-1  d-none d-md-block'>
                        <div className='btn btn-sm border me-2 px-3'>+ Reservation</div>
                    </div>
                    <div className='mt-1'> 
                    <div className='btn btn-sm border px-3'>+ Bag</div>
                    </div>
                    <div className='me-2 mt-1 ms-auto' ><img src={user} alt='account' height={'20px'} width={'20px'} /></div> 
                    <div className='me-2 list-unstyled'  >
                        <p className='m-0 fsName '>MichaelKnight</p>
                        <p className='m-0 fsSideName '>super Admin</p>  
                    </div>
                    <div className=" me-3" ><Icon icon="material-symbols:keyboard-arrow-down" /></div>
                    <div  className= " d-block d-lg-none">
                        <Button variant="white" onClick={handleShow}> <img src={ToggleButton} width={'34px'} height={'34px'} alt="Toggle Button" /> </Button>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton> 
                            </Offcanvas.Header>
                            <Offcanvas.Body >
                            <Sidebar />
                            </Offcanvas.Body>                        
                        </Offcanvas>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default Navbar;

