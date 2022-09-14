import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>

            <footer className="text-center text-lg-start bg-light text-muted">
                {/* Section: Social media */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* Left */}
                    <div className="me-5 d-none d-lg-block"> <span>Get connected with us on social networks:</span> </div>
                    {/* Right */}
                    <div>
                        {/* Facebook */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#3b5998", "borderRadius": "30%" }} href="https://www.facebook.com/superiorcodelabs/" rel="noreferrer" target="_blank"  role="button" > <i className="fab fa-facebook-f" />
                        </a>
                        {/* Twitter */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#55acee", "borderRadius": "30%" }} href="#!" rel="noreferrer" target="_blank"  role="button" > <i className="fab fa-twitter" />
                        </a>
                        {/* Google */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#dd4b39", "borderRadius": "30%" }} href="#!" rel="noreferrer" target="_blank" role="button" > <i className="fab fa-google" />
                        </a>
                        {/* Instagram */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac", "borderRadius": "30%" }} href="https://www.instagram.com/superiorcodelabs/" rel="noreferrer" target="_blank" role="button" > <i className="fab fa-instagram" />
                        </a>
                        {/* Linkedin */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#0082ca", "borderRadius": "30%" }} href="https://www.linkedin.com/company/superiorcodelabs/?originalSubdomain=au" rel="noreferrer" target="_blank" role="button" > <i className="fab fa-linkedin-in" />
                        </a>
                        {/* Github */}
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#333333", "borderRadius": "30%" }} href="#!" rel="noreferrer" target="_blank" role="button"> <i className="fab fa-github " />
                        </a>
                    </div>
                </section>
                {/* Section: Links  */}
                <section>
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold mb-4"> <i className="fas fa-gem me-3" /> Superior CodeLabs </h6>
                                <p> #25/3, #3rd floor, Leela Bhavan <br /> Musnishwarappa Road <br />J.C. Nagar Post<br /> Bengaluru 560006</p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p> <a href="#!" className="text-reset text-decoration-none"> Angular </a> </p>
                                <p> <a href="#!" className="text-reset text-decoration-none"> React </a> </p>
                                <p> <a href="#!" className="text-reset text-decoration-none"> Vue </a> </p>
                                <p> <a href="#!" className="text-reset text-decoration-none"> Laravel </a> </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">We Works on!</h6>
                                <p> <a href="https://www.opencart.com/" className="text-reset text-decoration-none"> Opencart </a> </p>
                                <p> <a href="http://www.codeigniter.com/" className="text-reset text-decoration-none"> Codeigniter </a> </p>
                                <p>
                                    <a href="http://php.net/" className="text-reset text-decoration-none"> Php </a> |
                                    <a href="https://www.mysql.com/" className="text-reset text-decoration-none"> Mysql </a>
                                </p>
                                <p>
                                    <a href="https://html.com/" className="text-reset text-decoration-none"> HTML   </a> |
                                    <a href="https://devdocs.io/css/" className="text-reset text-decoration-none"> CSS  </a> |
                                    <a href="https://api.jquery.com/" className="text-reset text-decoration-none"> Jquery </a> |
                                    <a href="https://api.jquery.com/category/ajax/" className="text-reset text-decoration-none"> Ajax </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p> <i className="fas fa-home me-3" /> Near Fun World </p>
                                <p> <i className="fas fa-envelope me-3" /> contact@superiorcodelabs.com </p>
                                <p> <i className="fas fa-phone me-3" /> +91 8431381009 </p>
                                <p> <i className="fas fa-print me-3" /> Bengaluru 560006 </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }} > Copyright © 2015. Designed by
                    <a className="fw-bold" style={{ "color": "#e4b119" }} rel="noreferrer" target="_blank" href="https://superiorcodelabs.com/"> Superior CodeLabs </a>  Team!
                </div>
                {/* Copyright */}
            </footer>

        </div>
    )
}

export default Footer;