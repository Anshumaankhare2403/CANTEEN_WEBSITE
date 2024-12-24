import React from 'react';
import backgroundVideo from "../assets/videos/vide.mp4";
import Logo1 from '../assets/images/Logo/Logo.png';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from "react-lazy-load-image-component";
function VideoSection() {
  return (
    <section className="container-fluid video-container" id="home">
      <div className="row">
        <div className="col-12">
          {/* SEO improvement: Use aria-label for accessibility */}
          <div className="video-shadow" aria-label="Background video of Fusion Spice services">
            {/* Video optimization */}
            <LazyLoad height={360} offset={100}>
            <video autoPlay muted loop className="w-100" playsInline preload="metadata">
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            </LazyLoad>
            {/* Text fallback for SEO */}
            <div className="d-none">
              <p>Background video showcasing Fusion Spice services in various settings.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="glass-overlay text-center">
        <div className="animate__bounceIn">
          {/* Lazy load logo with SEO-optimized alt text */}
         
          <LazyLoadImage src={Logo1}
            width={106} height={81}
            alt="Fusion Spice Company Logo"
            className="img-fluid w-25"
          />
          {/* Semantic h1 tag for SEO */}
          <h1 className="display-4 fw-bold">Creating a Better Day for Everyone</h1>
          <br />
          <div className='d-flex justify-content-center'>
            {/* Button for call-to-action with internal link */}
            <Homebutton name="Get in Touch" link="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
