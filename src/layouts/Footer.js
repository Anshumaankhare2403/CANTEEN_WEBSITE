import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 rounded">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">

                    {/* About Section */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Fusion Spice</h5>
                        <p>
                            Fusion Spice offers a wide variety of meals, snacks, and beverages made with locally sourced, fresh ingredients. We ensure the highest food safety and hygiene standards, welcoming everyone to a fulfilling dining experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Quick Links</h5>
                        <p><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Home</a></p>
                        <p><a href="/#" className="text-white" style={{ textDecoration: 'none' }}>Menu</a></p>
                        <p><a href="/about" className="text-white" style={{ textDecoration: 'none' }}>About Us</a></p>
                        <p><a href="/contact" className="text-white" style={{ textDecoration: 'none' }}>Contact</a></p>
                    </div>

                    {/* Contact Section */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                        <p><i className="fas fa-home mr-3"></i> 205, Second floor, Winners Court, Lullanagar, Pune, Maharashtra (411040)</p>
                        <p><i className="fas fa-envelope mr-3"></i> <a href="mailto:info@fusionspice.com" className="text-white">info@fusionspice.com</a></p>
                        <p><i className="fas fa-phone mr-3"></i> +919371012120, +917089577790</p>
                    </div>

                    {/* Social Media */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow Us</h5>
                        <a href="/#" className="text-white me-4" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/#" className="text-white me-4" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/#" className="text-white me-4" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/#" className="text-white me-4" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <hr className="my-3" />
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-8">
                        <p className="text-center">© 2024 Fusion Spice. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}



export default Footer;