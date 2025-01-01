import React from 'react';
import ED1 from '../assets/images/Eduction/ed1.png';
// import ED2 from '../assets/images/Eduction/ed2.png';
// import WorkingHome from '../components/Working_Home';
// import Homebutton from '../components/Homebutton';




const Success = () => (
  <div className='container mt-4 mt-md-5 mt-lg-5 mb-lg-5 mb-md-5 rounded px-4'>
    <div className='row p-lg-5 p-md-5 border border-2'>
      <div className='col-lg col-md align-self-center'>
        <img src={ED1} className='img-fluid' alt='A beautifully set event space managed by Fusion Spice' />
      </div>
      <div className='col-lg col-md ms-lg-5'>
        <h2 className='display-6 fw-bold'>Unlock the Key to Event Space Success</h2>
        <p className='fs-5'>
          There are venues, and then there are Fusion Spice-managed event spaces. What sets us apart is our deep understanding of what works best for event organizers and guests.
        </p>
        <p className='fs-5'>
          Our extensive experience and commitment to creating unforgettable experiences drive the difference. Explore how Fusion Spice’s transformative services are reshaping event experiences. From innovative catering solutions to dynamic event management, we ensure every aspect of your event is seamless, exciting, and memorable.
        </p>
        <p className='fs-5'>
          Dive into behind-the-scenes stories of our chefs, discover new trends in event catering, and see how our solutions make a tangible impact. Get a glimpse of our success stories and upcoming projects that are set to redefine event hosting.
        </p>
      </div>
    </div>
  </div>
);

const HappyUs = () => (
  <div className='container my-5 px-lg-5'>
    <div className='row'>
      <div className='col'>
        <h2 className='display-4 fw-bold py-md-4 py-lg-4'>Happy Clients, Happy Us</h2>
        <p className='display-6 pt-4 pt-lg-0 pt-md-0'>
          We are delighted to unveil a transformative collaboration with Fusion Spice that will reshape our educational landscape. This collaboration aligns seamlessly with our strategic priorities, aiming to provide a world-class campus experience for our students.
        </p>
        <div className='border-start border-primary border-2 mt-lg-5 mt-md-5'>
          <p className='ps-4'>
            <span className='fs-5 fw-bold'>Prof. Deepak Kumar Srivastava</span><br />
            <span>Director, IIM Ranchi</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

function EventSpaces() {
  return (
    <>
      <div className='Event_background'>
        <div className="container-fluid px-3 px-lg-5 pt-5 mt-5 pb-5 rounded-bottom rounded position-relative">
          {/* Wave animation as background */}


          {/* Content */}
          <div className="row pt-3  px-3 p-5 border border-3  ">
            <div className="col-lg p-3  align-self-center mt-4 mt-md-4 mt-lg textbg    shadow-lg">


              <p className="display-2 px-lg-5 px-md-5 fw-bold  text-capitalize" style={{ color: "black" }}>A perfect space for all your special occasions</p>
              {/* <div className="pt-2 px-lg-5 px-md-5">
                <Homebutton name='Contact Us' link="/#" />

              </div> */}
            </div>
         
          </div>
        </div>

      </div>
      <Success />

      <HappyUs />
    </>
  );
}

export default EventSpaces;
