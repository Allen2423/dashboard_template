import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className='landingContainer'>
            <div className='fluid'>
                <div className='header'>
                    <div className='navbar BoxShadow py-4'>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
                    {/* <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav> */}
                        {/* <div className='avatarContainer'>
                            <div className='brandContainer'>
                                {/* <img src='../assets/chatIcon2.png' alt='A' /> 
                                <span className='brandname'>AmoTech</span>
                            </div>
                            <nav className='navItems '>
                                <ul className='list'>
                                    <li className='listItems'>Home</li>
                                    <li className='listItems'>About</li>
                                    <li className='listItems'>Contacts</li>
                                    <li className='listItems'>Login</li>
                                </ul>
                            </nav>
                        </div> */}
                    </div>
                    <div className='content'>
                    <h1> This is Description section</h1>
                    </div>
                </div>
                <div className='Description'>
                    <h1> This is Description section</h1>
                    <h1>Example heading <span class="badge bg-secondary">New</span></h1>
                    <h2>Example heading <span class="badge bg-secondary">New</span></h2>
                    <h3>Example heading <span class="badge bg-secondary">New</span></h3>
                    <h4>Example heading <span class="badge bg-secondary">New</span></h4>
                    <h5>Example heading <span class="badge bg-secondary">New</span></h5>
                    <h6>Example heading <span class="badge bg-secondary">New</span></h6>
                </div>
                <div className='About'>
                    <h1>This is About section</h1>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
                <div className='Contacts'>
                    <h1>This is contact section</h1>
                </div>
                <div className='footer'>
                    <h1>This is footer section</h1>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;