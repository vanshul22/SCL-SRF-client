import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/IMG/Superiorcodelabs.png"

const Navbar = () => {
    // Getting URL path here
    const location = useLocation().pathname;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <img src={logo} height="35rem" className='rounded ms-2' alt="SCL" />
            <div className="container-fluid">
                <Link className={`navbar-brand ${location === "/" ? "active" : ""}`} to="/"> Superior CodeLabs </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /> </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className={`nav-link ${location === "/" ? "active" : ""}`} aria-current="page" to="/"> Home </Link>
                        <Link className={`nav-link ${location === "/aboutus" ? "active" : ""}`} to="/aboutus"> About Us </Link>
                        <Link className={`nav-link ${location === "/contactus" ? "active" : ""}`} to="/contactus"> Contact Us </Link>
                        <Link className={`nav-link ${location === "/studentregistration" ? "active" : ""}`} to="/studentregistration"> Student Registration </Link>
                    </div>
                    <div>
                        <Link to='/login'><button type="button" className={`btn btn-outline-primary ${location === "/login" ? "active" : ""}`}>Login</button></Link>
                        <Link to='/signup'><button type="button" className={`btn btn-outline-primary mx-3 ${location === "/signup" ? "active" : ""}`}>Sign up</button></Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;