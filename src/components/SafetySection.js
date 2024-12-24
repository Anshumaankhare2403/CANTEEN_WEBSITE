import React from 'react';
import Img2 from '../assets/images/food/food home/rr.png';
import LazyLoad from 'react-lazyload';

function SafetySection() {
    return (
        <section className="container mt-5 ">
            <h1 className="fw-bold text-center">Putting Your Safety First: Our Top Priority</h1>
            <div className="row border-top border-3 pt-5 pb-4">
                <div className="col-md-5 mb-4">
                    <LazyLoad height={200} offset={100}>
                        <img src={Img2} className="img-fluid" alt="Ensuring Food Safety at Fusion Spice" loading="lazy" />
                    </LazyLoad>
                </div>
                <div className="col-md d-flex align-items-center">
                    <p className="safety-text">
                        At Fusion Spice, we ensure the highest standards of food safety and hygiene. Our
                        entire team follows guidelines set by the Food Safety Standards Authority of
                        India (FSSAI), guaranteeing that every dish we serve meets stringent safety
                        standards. We also adhere to the guidelines provided by Environment
                        Health and Safety (EHS), prioritizing the well-being of our customers and staff.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SafetySection;