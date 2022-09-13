import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src="" alt="SCL" />
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> SuperiorCodeLabs </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /> </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/"> Home </Link>
                        <Link className="nav-link" to="/about"> About </Link>
                        <Link className="nav-link" to="/contactus"> Contact Us </Link>
                        <Link className="nav-link" to="/studentregisteration"> Student Registeration </Link>
                    </div>
                    <div>
                        <Link to='/login'><button type="button" className="btn btn-info">Login</button></Link>
                        <Link to='/signup'><button type="button" className="btn btn-info mx-3">Sign up</button></Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;