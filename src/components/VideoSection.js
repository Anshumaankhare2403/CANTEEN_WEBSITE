import React from 'react';
import backgroundVideo from "../assets/videos/vide.mp4";
import fallbackImage from "../assets/images/home/image1.jpg"; // Add your fallback image here
import Logo1 from '../assets/images/Logo/Logo.png';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';
import { LazyLoadImage } from "react-lazy-load-image-component";

function VideoSection() {
  return (
    <section 
      className="container-fluid video-container position-relative" 
      id="home" 
      style={{
        backgroundImage: `url(${fallbackImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="row d-none d-sm-block"> {/* Hide on small screens */}
        <div className="col-12">
          <div className="video-shadow" aria-label="Background video of Fusion Spice services">
            <LazyLoad height={360} offset={100}>
              <video 
                autoPlay 
                muted 
                loop 
                className="w-100" 
                playsInline 
                preload="metadata"
              >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </LazyLoad>
            <div className="d-none">
              <p>Background video showcasing Fusion Spice services in various settings.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="glass-overlay text-center">
        <div className="animate__bounceIn">
          <LazyLoadImage 
            src={Logo1}
            width={106} 
            height={81}
            alt="Fusion Spice Company Logo"
            className="img-fluid Logo_home_spices"
          />
          <h1 className="display-4 fw-bold">Creating a Better Day for Everyone</h1>
          <br />
          <div className="d-flex justify-content-center">
            <Homebutton name="Get in Touch" link="/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
