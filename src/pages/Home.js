import React, { Suspense } from 'react';
import HomeImage from '../assets/images/home/Image.png';
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
<div className='col'>
    <h1 className='display-5'>We Transform Ordinary Moments into Exceptional Experiences</h1>
    <p className='mt-4'style={{fontSize:'1.0rem'}}>Our goal is to elevate everyday moments and turn them into extraordinary experiences. Whether it's for corporate professionals, students, healthcare providers, or employees working in remote energy sectors, we are committed to improving daily life and contributing to a brighter future for all. We offer a wide range of solutions, including food & catering, facilities management, technical services, workplace experience, and energy management. Our aim is to create an environment where every meal delights, every workspace motivates, and every service exceeds expectations.</p>
    <p className='' style={{fontSize:'1.0rem'}}>We take pride in cultivating an inclusive, diverse, fair, and supportive workplace that enhances the well-being of everyone we interact with.</p>
</div>

            <div className='col-md'>
            <img src={HomeImage} class="img-fluid" alt="..."/>
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
                <div className='mt-5'>
                    <section id="testimonial" class="testimonial-section img-bg pt-150 pb-40">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-6 pb-5">
                                    <div class="section-title mb-60 text-center">
                                        <span class="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
                                        <h1 class="wow fadeInUp" data-wow-delay=".4s">What Our Users Says</h1>
                                    </div>
                                </div>
                            </div>

                            <div class="row testimonial-wrapper">
                                <div class="col-lg-4 col-md-6 -mt-30">
                                    <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                                        <div class="rating" style={{ color: '#E96A20' }}>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="content">
                                            <p>google servers</p>
                                        </div>
                                        <div class="info">
                                            <div class="image">
                                                <img src="assets/img/testimonial/testimonial-1.png" alt="" />
                                            </div>
                                            <div class="text">
                                                <h5>Ena Shah</h5>
                                                <p>Teacher at Abc School</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 mt-60">
                                    <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                                        <div class="rating" style={{ color: '#E96A20' }}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="content">
                                            <p>google servers</p>
                                        </div>
                                        <div class="info">
                                            <div class="image">
                                                <img src="assets/img/testimonial/testimonial-2.png" alt="" />
                                            </div>
                                            <div class="text">
                                                <h5>Mrs. Gosh</h5>
                                                <p>Actor</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                                        <div class="rating" style={{ color: '#E96A20' }}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="content">
                                            <p>google servers</p>
                                        </div>
                                        <div class="info">
                                            <div class="image">
                                                <img src="assets/img/testimonial/testimonial-3.png" alt="" />
                                            </div>
                                            <div class="text">
                                                <h5>John Doe</h5>
                                                <p>Model</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 -mt-30">
                                    <div class="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                                        <div class="rating" style={{ color: '#E96A20' }}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="content">
                                            <p>google servers</p>
                                        </div>
                                        <div class="info">
                                            <div class="image">
                                                <img src="assets/img/testimonial/testimonial-4.png" alt="" />
                                            </div>
                                            <div class="text">
                                                <h5>Jonathan Smith</h5>
                                                <p>Creative Designer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 -mt-60">
                                    <div class="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                                        <div class="rating" style={{ color: '#E96A20' }}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="content">
                                            <p>google servers</p>
                                        </div>
                                        <div class="info">
                                            <div class="image">
                                                <img src="assets/img/testimonial/testimonial-5.png" alt="" />
                                            </div>
                                            <div class="text">
                                                <h5>Sara A. K.</h5>
                                                <p>Heroine</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                                        <div class="rating" style={{ color: '#E96A20' }}>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div class="content">
                                            <p>google servers</p>
                                        </div>
                                        <div class="info">
                                            <div class="image">
                                                <img src="assets/img/testimonial/testimonial-6.png" alt="" />
                                            </div>
                                            <div class="text">
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
