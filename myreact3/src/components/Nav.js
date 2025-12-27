import React from 'react'
import {Link, NavLink, Scripts } from "react-router-dom";


function Nav() {
  return (
    <div>

        {/* Topbar Start */}
        <div className="container-fluid py-2 border-bottom d-none d-lg-block">
        <div className="container">
            <div className="row">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                <a className="text-decoration-none text-body pe-3" href="#!"><i className="bi bi-telephone me-2" />+012
                    345 6789</a>
                <span className="text-body">|</span>
                <a className="text-decoration-none text-body px-3" href="#!"><i className="bi bi-envelope me-2" />info@example.com</a>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
                <div className="d-inline-flex align-items-center">
                <a className="text-body px-2" href="#!">
                    <i className="fab fa-facebook-f" />
                </a>
                <a className="text-body px-2" href="#!">
                    <i className="fab fa-twitter" />
                </a>
                <a className="text-body px-2" href="#!">
                    <i className="fab fa-linkedin-in" />
                </a>
                <a className="text-body px-2" href="#!">
                    <i className="fab fa-instagram" />
                </a>
                <a className="text-body ps-2" href="#!">
                    <i className="fab fa-youtube" />
                </a>
                </div>
            </div>
            </div>
        </div>
        </div>
        {/* Topbar End */}


        {/* Navbar Start */}
        <div className="container-fluid sticky-top bg-white shadow-sm">
        <div className="container">
            
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
             <Link to="/" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-clinic-medical me-2" />Medinova</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">

                 {/* <Link to="/" id='home' className="nav-item nav-link">Home</Link> */}
                <NavLink to="/" 
                className = {({ isActive }) => (
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    
                )}
                >
                Home
                </NavLink>



                 {/* <Link to="/about" className="nav-item nav-link">About</Link> */}
                <NavLink to="/about" 
                className = {({ isActive }) => (
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    
                )}
                >
                About
                </NavLink>

                 {/* <Link to="/service" className="nav-item nav-link">Service</Link> */}
                <NavLink to="/service" 
                className = {({ isActive }) => (
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    
                )}
                >
                Service
                </NavLink>

                 {/* <Link to="/price" className="nav-item nav-link">Pricing</Link> */}
                <NavLink to="/price" 
                className = {({ isActive }) => (
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    
                )}
                >
                Pricing
                </NavLink>

                <NavLink to="/blog" 
                className = {({ isActive }) => (
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    
                )}
                >
                Blog
                </NavLink>

                <NavLink to="/blog_entry" 
                className = {({ isActive }) => (
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                    
                )}
                >
                Blog Entry
                </NavLink>

                <div className="nav-item dropdown">
                     <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">My Pages</Link>
                    <div className="dropdown-menu m-0">
                        {/* <Link to="/team" className="dropdown-item">The Team</Link> */}
                        <NavLink to="/team" 
                            className = {({ isActive }) => (
                                isActive ? "dropdown-item active" : "nav-item nav-link"
                                
                            )}
                            >
                        Team
                        </NavLink>
                        <NavLink to="/testimonial" 
                            className = {({ isActive }) => (
                                isActive ? "dropdown-item active" : "nav-item nav-link"
                                
                            )}
                            >
                        Testimonial
                        </NavLink>
                    </div>
                </div>
                {/* <div className="nav-item dropdown">
                     <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu m-0">
                     <Link to="/blog" className="dropdown-item">Blog Grid</Link>
                     <Link to="/detail" className="dropdown-item">Blog Detail</Link>
                     <Link to="/team" className="dropdown-item">The Team</Link>
                     <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                     <Link to="/appointment" className="dropdown-item">Appointment</Link>
                     <Link to="/search" className="dropdown-item">Search</Link>
                    </div>
                </div> */}
                 <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
            </div>
            </nav>
            
        </div>
        </div>
        {/* Navbar End */}


    </div>
  )
}

export default Nav