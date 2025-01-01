import React from 'react';
import ED1 from '../assets/images/Eduction/ed1.png';
import ED2 from '../assets/images/Eduction/ed2.png';
import WorkingHome from '../components/Working_Home';

const Success = () => (
    <div className='container mt-4 mt-md-5 mt-lg-5 mb-lg-5 mb-md-5 rounded px-4'>
        <div className='row p-lg-5 p-md-5 border border-2'>
            <div className='col-lg col-md align-self-center'>
                <img src={ED1} srcSet={`${ED1} 1x, ${ED2} 2x`} className="img-fluid" alt="Event space success with Fusion Spice" />
            </div>
            <div className='col-lg col-md ms-lg-5'>
                <h1 className='display-6 fw-bold'>Unlock the Key to Event Space Success</h1>
                <p className='fs-5'>Fusion Spice-managed event spaces offer exceptional venues tailored for success.</p>
                <p className='fs-5'>Our extensive experience in event management ensures a seamless and memorable experience for every guest.</p>
                <p className='fs-5'>Explore behind-the-scenes stories, new trends in event catering, and our impactful solutions.</p>
            </div>
        </div>
    </div>
);

const HappyUs = () => (
    <div className="container my-5 px-lg-5">
    <div className='row'>
      <div className='col'>
        <h2 className='display-4 fw-bold py-md-4 py-lg-4'>Happy Clients, Happy Us</h2>
        <p className='display-6 pt-4 pt-lg-0 pt-md-0'>We are delighted to unveil a transformative collaboration with Fusion Spice that will reshape our educational landscape.</p>
        <div className='border-start border-primary border-2 mt-lg-5 mt-md-5'>
          <p className='ps-4'><span className='fs-5 fw-bold'>Prof. Deepak Kumar Srivastava</span><br />
            <span>Director, IIM Ranchi</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

function Corporate() {
    return (
        <>
                <WorkingHome img={<img src={ED2} className="img-fluid rounded" alt="Special occasions at Fusion Spice" />} head="A perfect space for all your special occasions" Bname="Contact Us" />
            <Success />
            <div className='Event_background2'>
                <HappyUs />
            </div>
        </>
    );
}

export default Corporate;
