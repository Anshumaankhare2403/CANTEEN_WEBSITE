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
        <p className='fs-3 pt-4 pt-lg-0 pt-md-0'>We are delighted to announce a transformative collaboration with Fusion Spice, redefining our educational landscape while offering the perfect space for all your special occasions. Together, we are creating innovative solutions that combine learning, celebration, and memorable experiences.</p>
        {/* <div className='border-start border-primary border-2 mt-lg-5 mt-md-5'>
          <p className='ps-4'><span className='fs-5 fw-bold'>Prof. Deepak Kumar Srivastava</span><br />
            <span>Director, IIM Ranchi</span>
          </p>
        </div> */}
      </div>
    </div>
  </div>
);

function Corporate() {
  return (
    <>
      <WorkingHome img={<img src="https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZHVzdHJ5JTIwbHVuY2h8ZW58MHx8MHx8fDA%3D" className="img-fluid rounded w-100" alt="Special occasions at Fusion Spice" />} head="Your People, Our Priority" Bname="Contact Us" link="/contact" />
      <div className='container '>
        <div className='row'>
          <h1 className='display-3 pb-5 pt-5'>Creating People-Centric and Sustainable Workplace Environments</h1>
          <p className='fs-5'>People are at the heart of everything we do.</p>
          <p className='fs-5'>In today’s work environment, creating an exceptional workplace experience is essential for enhancing employee productivity. With a deep understanding of consumer behavior and expectations, Fusion Spice integrates innovative food, hospitality, and facility services to empower employees to reach their full potential.</p>
          <p className='fs-5'>We focus on aligning space design and services with employee expectations, boosting talent attraction and retention, while optimizing resource utilization, managing costs, and achieving sustainability goals. Our services span various industries, from remote manufacturing environments to bustling urban corporate offices. Our food offerings, tailored by expert dieticians, food handlers, and culinary specialists, are customized to meet every need, whether through onsite or offsite kitchens.</p>
          <p className='fs-5'>As specialists in workplace experience, we prioritize improving quality of life, ensuring that your teams stay engaged, healthy, and ready to excel.</p>
        </div>

      </div>
      <div className="container mt-5 pt-lg-5 mb-5 pb-5">
                <div className="row d-flex align-items-center ">
                    <div className=" col ">
                        <h1 className="display-2">Environments We Serve</h1>
                    </div>
                    <div className="col-md ">
                        <div className="row">
                            <div className="col-md pt-2">
                            <i class="fa-solid fa-industry display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Industries and Manufacturing Facilities</h3>
                            </div>
                            <div className="col-md pt-2">
                            <i class="fa-solid fa-gears display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Automotive and Auto Components</h3>
                            </div>

                        </div>
                        <div className="row pt-lg-5 ">
                            <div className="col-md pt-2">
                            <i class="fa-solid fa-laptop display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">IT/ITES & Global Delivery Centers</h3>
                            </div>
                            <div className="col-md pt-2">
                                <i className="fa-solid fa-briefcase display-1"></i>
                                <h3 className="fs-3 fw-bold mt-4">Large Corporate Conglomerates</h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
      <Success />
      <div className='Event_background2'>
        <HappyUs />
      </div>
    </>
  );
}

export default Corporate;
