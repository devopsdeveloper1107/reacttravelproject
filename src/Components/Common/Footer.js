import React from 'react';




function Footer()
{

    return(

        <React.Fragment>
            <footer className='footer  bg-info'>
                <div className='container'>
                <div className='row pt-5 pb-5'>
                    <div className='col-md-3'>
                      <h5>About Travel</h5>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='col-md-3'>
                    <h5>Navigation</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>Contact us</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>Terms and Condition</a>
                        </li>
                    </ul>
                    </div>
                    <div className='col-md-3'>
                    <h5>Services</h5>
                    <ul className='nav flex-column'>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>Online Booking</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>Travel Package</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>International Tour</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/' className='nav-link'>India Package</a>
                        </li>
                    </ul>
                    </div>
                    <div className='col-md-3'>
                    <h5>Contact Address</h5>
                    <p>India , 110092</p> 
                    <p>Phone No:+91-xxxxxxxx90</p>
                    <p>Social Media Link</p>
                    </div>
                </div>
                
                </div>
            </footer>
            
        </React.Fragment>
    );
}

export default Footer;