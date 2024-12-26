import React, { Suspense, useEffect } from 'react';
import About_Image from "../assets/images/Logo/Logo.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
        <Suspense fallback={<p>loading..</p>}>
            <div className="container mt-5 pt-3 " >
                <h1 className="text-center display-5 fw-bold pb-3 pt-5 animate__bounceIn">About Us</h1>

                <div className="row justify-content-center align-items-center g-2 border-top border-bottom border-3">
                    {/* Text Section */}
                    <div className="col-md-6 col-12" data-aos="fade-up" data-aos-duration="1000" >
                        <p className="fs-5">
                            Fusion Spice has been setting the bar for unmatched hospitality and
                            culinary expertise for more than 25 years. Our unwavering commitment to
                            excellence has made us a highly regarded eating destination all around
                            the country. Fusion Spice has a magnetic pull on visitors, who are
                            attracted in by our delicious food as well as the promise of faultless
                            service and unforgettable experiences. With unwavering commitment,
                            we've built strong relationships with our clients, who come back time and
                            time again to indulge in our culinary delights and create new chapters in
                            their treasured memories with every visit.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="col-md-4 col-12 mt-4 mt-md-0" data-aos="fade-down" data-aos-duration="1000">

                        <LazyLoadImage src={About_Image}
                            alt="Fusion Spice Company Logo"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
            </Suspense>
        </>
    );
}

export default About;
