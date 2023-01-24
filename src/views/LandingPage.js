import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import homeImage from '../assets/webLoan.webp';
import logo from '../assets/chatIcon2.webp';


const LandingPage = () => {

    return (
        <div className='landingContainer'>
            <div className='fluid'>
                <div className='header'id='home' >
                    <div className=' navbarr p-lg-4'>
                        <nav className="navbar navbar-expand-lg navbar-light text-dark   ">
                            <div className="container-fluid ">
                                <span className="navbar-brand">
                            <img className='logo mr-5' src={logo} height="35" />
                                    <span className='brandname  ml-4'>AmoTech</span>
                                </span>
                                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarCollapse">
                                    <div class="navbar-nav ms-auto  ">
                                        <a href="#home" className="nav-item nav-link">Home</a>
                                        <a href="#about" className="nav-item nav-link">About</a>
                                        <a href="#services" className="nav-item nav-link">Services</a>
                                        <a href="#contact" className="nav-item nav-link">Contacts</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='content row  p-lg-5' >
                        <div className='description col-lg-6 px-2'>
                                <div class="container">
                                    <div class="row ">
                                        <h1 className='head'>Manage Loan <p className='text-secondary' >Services with us.</p></h1>
                                        <p className=' text text-*-center'>A financial instrument in which one party borrow money from another.
                                            Such as mortage, credit card, debt card and person line of credit.</p>
                                        <div className='btnG'>
                                            {/* <button className="btn   btn-lg  ">Login</button> */}
                                            <button className='btn btn-lg '> <Link className='link' to='/dashboard'>Dashboard</Link></button>
                                        </div>
                                    </div>
                            </div>
                        </div>


                        {/* <!-- Feature Start --> */}
                        <div className='pic col-lg-6 py-5'>
                            {/* <div class="container-xxl py-6">
                                <div class="container">
                                    <div class="row g-4">
                                        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="feature-item bg-light rounded text-center p-5">
                                                <i class="fa fa-4x fa-edit text-primary mb-4"></i>
                                                <h5 class="mb-3">Fully Customizable</h5>
                                                <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                                            <div class="feature-item bg-light rounded text-center p-5">
                                                <i class="fa fa-4x fa-sync text-primary mb-4"></i>
                                                <h5 class="mb-3">App Integration</h5>
                                                <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                                            <div class="feature-item bg-light rounded text-center p-5">
                                                <i class="fa fa-4x fa-draw-polygon text-primary mb-4"></i>
                                                <h5 class="mb-3">Drag And Drop</h5>
                                                <p class="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <img  className='image' src={homeImage} alt='IM' />
                        </div>
                    </div>
                </div>
                {/* <!-- Feature End --> */}



                {/* <!-- About Start --> */}
                <div className='Description p-lg-5'>
                    <div className="px-2 " id="about">
                        <div className="container py-5">
                            <div className="row g-5 flex-column-reverse flex-lg-row">
                                <div className="col-lg-6" >
                                    <h1 className="mb-4">Manage & Push Your Business To The Next Level</h1>
                                    <p className="mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo eirmod magna dolore erat amet</p>
                                    <div className="d-flex mb-4">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="ms-4">
                                            <h5>First Working Process</h5>
                                            <p className="mb-0">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna</p>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-check"></i>
                                        </div>
                                        <div className="ms-4">
                                            <h5>24/7 Hours Support</h5>
                                            <p className="mb-0">Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo magna</p>
                                        </div>
                                    </div>
                                  <a href="" > <button className='btn  py-sm-3 px-sm-5 rounded-pill mt-3'> Read More</button></a>
                                </div>
                                <div class="col-lg-6">
                                    {/* <img class="img-fluid rounded wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg"> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}


                {/* <!-- Feature Start --> */}
                <div className='About py-5' id='services'>
                    {/* <h1>This is About section</h1> */}
                    <div className=" py-6">
                        <div className="container">
                            <div className="row g-5">
                            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="feature-item bg-light rounded text-center p-5">
                                        {/* <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i> */}
                                        <h5 className="mb-3">Drag And Drop</h5>
                                        <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="feature-item bg-light rounded text-center p-5">
                                        {/* <i className="fa fa-4x fa-sync text-primary mb-4"></i> */}
                                        <h5 className="mb-3">App Integration</h5>
                                        <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="feature-item bg-light rounded text-center p-5">
                                        {/* <i className="fa fa-4x fa-draw-polygon text-primary mb-4"></i> */}
                                        <h5 className="mb-3">Drag And Drop</h5>
                                        <p className="m-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Feature End --> */}


                {/* <!-- Contact Start --> */}
                <div classNameName='Contacts py-5' id='contact'>
                    {/* <h1>This is contact section</h1> */}
                    <div className="container-xxl py-5" id="contact">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <h1 className="mb-3">Get In Touch</h1>
                                    <p className="mb-4">The contact form is currently inactive.</p>
                                    <div className="d-flex mb-4">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-phone-alt"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-2">Call Us</p>
                                            <h5 className="mb-0">0621063731</h5>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-envelope"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-2">Mail Us</p>
                                            <h5 className="mb-0">amotech@gmail.com</h5>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-0">
                                        <div className="flex-shrink-0 btn-square rounded-circle bg-primary text-white">
                                            <i className="fa fa-map-marker-alt"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-2">Our Office</p>
                                            <h5 className="mb-0">123 Street, New York, USA</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                    <label for="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                    <label for="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                    <label for="subject">Subject</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Leave a message here" id="message"></textarea>
                                                    <label for="message">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="btn  rounded-pill py-3 px-5" type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}

                 {/* <!-- footer start --> */}  
                <div className='footer'>
                    <p>Copyright &copy; 2022  AmoTech All Right Reserved</p>
                   
            </div>
              {/* <!-- footer End --> */}
            </div>
        </div>
    );
}

export default LandingPage;