import React, { Suspense } from 'react';
import HomeImage from '../assets/images/Addon/1.png';
const VideoSection = React.lazy(() => import('../components/VideoSection'));
const MissionValues = React.lazy(() => import('../components/MissionValues'));
const TeamSection = React.lazy(() => import('../components/TeamSection'));
const SuccessStories = React.lazy(() => import('../components/SuccessStories'));
const SafetySection = React.lazy(() => import('../components/SafetySection'));
const ExpertiseSection = React.lazy(() => import('../components/ExpertiseSection'));
const Client = React.lazy(() => import('../components/Client'));
// const Testimonials = React.lazy(()=> import( '../components/Testimonials'));
function Home() {
    return (
        <>
            <Suspense fallback={<p>loading...</p>}>
                <VideoSection />
            </Suspense>
            <div className='container'>
                <div className='row mt-5 pt-5'>
                    <div className='col-md pt-lg-5'>
                    <h1  className='display-5 d-none d-lg-block '>Transforming the Mundane into Memorable Experiences</h1>
                    <h1  className='display-1 d-lg-none '>Transforming the Mundane into Memorable Experiences</h1>
                    <p className='mt-4' style={{ fontSize: '1.3rem' }}>Our mission is to transform everyday experiences into extraordinary moments. We are dedicated to enriching the lives of corporate professionals, students, healthcare workers, and employees in remote energy sectors by providing solutions that improve daily life and shape a brighter future. Our comprehensive offerings include food and catering services, facilities management, technical support, workplace enhancement, and energy optimization.</p>
                        <p className='' style={{ fontSize: '1.3rem' }}>We strive to create environments where every meal brings joy, every workspace inspires productivity, and every service exceeds expectations. At the heart of our approach is a commitment to fostering an inclusive, diverse, and equitable workplace that prioritizes the well-being and satisfaction of everyone we serve.</p>
                    </div>

                    <div className='col-md'>
                        <img src={HomeImage} className="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
            <Suspense fallback={<p>loading...</p>}>
                <Client />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <MissionValues />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <TeamSection />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <SuccessStories />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <SafetySection />
            </Suspense >
            <Suspense fallback={<p>loading...</p>}>
                <ExpertiseSection />
            </Suspense>
            <Suspense fallback={<p>loading...</p>}>
                <div className='mt-5 pt-5'>
                    <section id="testimonial" className="testimonial-section img-bg pt-150 pb-40">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 pb-5">
                                    <div className="section-title mb-60 text-center">
                                        <span className="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
                                        <h1 className="wow display-3" data-wow-delay=".4s">What Our Users Says</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="row testimonial-wrapper">
                                <div className="col-lg-4 col-md-6 -mt-30">
                                    <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                                        <div className="rating" style={{ color: '#E96A20' }}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <p>google servers</p>
                                        </div>
                                        <div className="info">
                                            <div className="image">
                                                <img src="assets/img/testimonial/testimonial-1.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h5>Ena Shah</h5>
                                                <p>Teacher at Abc School</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 mt-60">
                                    <div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                                        <div className="rating" style={{ color: '#E96A20' }}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <p>google servers</p>
                                        </div>
                                        <div className="info">
                                            <div className="image">
                                                <img src="assets/img/testimonial/testimonial-2.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h5>Mrs. Gosh</h5>
                                                <p>Actor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                                        <div className="rating" style={{ color: '#E96A20' }}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <p>google servers</p>
                                        </div>
                                        <div className="info">
                                            <div className="image">
                                                <img src="assets/img/testimonial/testimonial-3.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h5>John Doe</h5>
                                                <p>Model</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 -mt-30">
                                    <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                                        <div className="rating" style={{ color: '#E96A20' }}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <p>google servers</p>
                                        </div>
                                        <div className="info">
                                            <div className="image">
                                                <img src="assets/img/testimonial/testimonial-4.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h5>Jonathan Smith</h5>
                                                <p>Creative Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 -mt-60">
                                    <div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                                        <div className="rating" style={{ color: '#E96A20' }}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <p>google servers</p>
                                        </div>
                                        <div className="info">
                                            <div className="image">
                                                <img src="assets/img/testimonial/testimonial-5.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h5>Sara A. K.</h5>
                                                <p>Heroine</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                                        <div className="rating" style={{ color: '#E96A20' }}>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="content">
                                            <p>google servers</p>
                                        </div>
                                        <div className="info">
                                            <div className="image">
                                                <img src="assets/img/testimonial/testimonial-6.png" alt="" />
                                            </div>
                                            <div className="text">
                                                <h5>David Smith</h5>
                                                <p>Businessman</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Suspense>
        </>
    );
}

export default Home;
