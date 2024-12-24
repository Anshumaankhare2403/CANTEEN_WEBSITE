import React, { useEffect } from 'react';
// import Zindex from '../components/Zindexingimage';
// import ED1 from '../assets/images/Eduction/ed1.png';
import ED2 from '../assets/images/Eduction/ed2.png';
import ED5 from '../assets/images/Eduction/E3.png';
import ED6 from '../assets/images/Eduction/E4.png';
import ED7 from '../assets/images/Eduction/E5.png';
import ED8 from '../assets/images/Work/Work2.png';
import WorkingHome from '../components/Working_Home';
// import WorkingWelcome from '../components/Working_Welcome';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Campus = () => (
  <div className='container pt-4 mt-4 px-5'>
    <div className='row px-lg-5 px-md-5'>
      <div className='col px-lg-5 px-md-5'>
        <h1 className='display-5 fw-bold'>Partnering With Schools and Colleges for Campus Care</h1>
        <p className='fs-5 pt-4'>
          Fusion Spice partners with schools and universities across India to provide healthy and trendy dining experiences, cutting-edge digital campus environments, and best-in-class facilities. We are committed to understanding what influences students’ decisions and behaviors, empowering educators with the right support and resources to enrich campus life every day.
        </p>
        <p className='fs-5 pt-1'>
          We extend our services beyond traditional dining, offering mobile ordering, delivery, next-generation vending, and exciting retail options. With advanced digital technology, like custom mobile dining apps, contactless payment systems, and real-time menu updates, campus dining has never been more seamless and efficient.
        </p>
        <p className='fs-5 pt-1'>
          Our goal is to create optimal campus environments where students can thrive academically and socially. Our proactive maintenance maximizes the longevity of campus infrastructure, ensuring that classrooms, dormitories, and recreational facilities are always in top condition.
        </p>
        <p className='fs-5 pt-1'>
          Wowing students, faculty, and staff is our greatest joy. We take pride in enhancing the quality of life for campus communities through comforting, safe, and healthy experiences every day.
        </p>
      </div>
    </div>
  </div>
);

const EducationCard = () => (
  <div className='container pt-5 mt-5'>
    <div className='row px-2'>
      <div className='col-md border border-3 rounded-5  me-lg-3 me-md-3 mb-3 zoom-in'>
        <img src={ED5} className="img-fluid  pt-2 pt-md-3 pt-lg-3 pb-md-4 pb-lg-4" alt="Dishing Diversity Through Our House of Brands" />
        <h2 className='display-6 fw-bold pt-4'>Dishing Diversity Through Our House of Brands</h2>
        <p className='fs-5'>Food & You is an exciting culinary destination, offering distinct brands in the school canteen, which embody unique culinary concepts. Each brand provides a diverse menu of mouth-watering options, from local comfort food to international cuisines.</p>
      </div>
      <div className='col-md border border-3 rounded-5 me-lg-3 me-md-3 mb-3 zoom-in'>
        <img src={ED7} className="img-fluid  pt-2 pt-md-3 pt-lg-3 pb-md-4 pb-lg-4" alt="Health & Wellbeing" />
        <h2 className='display-6 fw-bold pt-4'>Health & Wellbeing</h2>
        <p className='fs-5'>We work closely with nutritionists to design vibrant meals and snacks that fuel student-athletes with energy-boosting nutrients and flavors, helping them stay motivated.</p>
      </div>
      <div className='col-md border border-3 rounded-5 me-lg-3 me-md-3 mb-3 zoom-in'>
        <img src={ED6} className="img-fluid  pt-2 pt-md-3 pt-lg-3 pb-md-4 pb-lg-4" alt="Technology as an Enabler" />
        <h2 className='display-6 fw-bold pt-4'>Technology as an Enabler</h2>
        <p className='fs-5'>We leverage digital solutions to streamline processes such as ordering and payment, enhancing the student experience and adapting our services to their needs.</p>
      </div>
    </div>
  </div>
);

const Success = () => (
  <div className='container mt-4 mt-md-4 mt-lg-4 mb-lg-5 mb-md-5  px-4 '>
    <div className='row pt-lg-5 pt- '>
      <div className='col-lg-5 col-md align-self-center'>
        <img src={ED8} className="img-fluid" alt="Unlock the Key to Student Success" />
      </div>
      <div className='col-lg col-md ms-lg-5'>
        <h2 className='display-5 fw-bold pb-3'>Unlock the Key to Student <br /> Success</h2>
        <p className='fs-5'>There are campuses, and then there are Fusion Spice-managed campuses. What sets us apart is our deep understanding of what works best for students and faculty. Our global insights, extensive experience, and commitment to delighting our clients drive the difference.



        </p>
        <p className='fs-5'>
          Explore how Fusion Spice’s transformative services are reshaping campus experiences. From innovative dining solutions to dynamic student events, we ensure every aspect of campus life is safe, healthy, exciting, and productive.

        </p>
        <p className='fs-5'>
          Dive into behind-the-scenes stories of our chefs, discover new trends in campus dining, and see how our solutions make a tangible impact. Get a glimpse of our success stories and upcoming projects that are set to redefine campus life.
        </p>

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

function Education() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="2000">
        <WorkingHome img={<img src={ED2} className="img-fluid rounded" alt="Working Together to Support Every Student’s Journey" />} head="Nurturing Growth-Centric Educational Communities" Bname="Contact Us" />

      </div>

      <Campus />
      {/* <Zindex img={<img src={ED1} className="img-fluid rounded" alt="Working Together to Support Every Student’s Journey" />} head="Working Together to Support Every Student’s Journey" par="We create welcoming environments in schools, inspiring growth and safety." /> */}
      {/* <div className='mt-5 pt-5 pb-5 mb-5 Event_background1'>
        <WorkingWelcome head="Welcome. You Are in Good Company." par="Come be a part of something greater. It all starts with you." />
      </div> */}
      <EducationCard />

      <Success />

      <HappyUs />
    </>
  );
}

export default Education;
