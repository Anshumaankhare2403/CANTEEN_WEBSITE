import React from 'react';
import backgroundVideo from "../assets/videos/vide.mp4";
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';

function VideoSection() {
  return (
    <section className="container-fluid video-container position-relative" id="home">
      <div className="row d-none d-sm-block"> {/* Hide on small screens */}
        <div className="col-12">
          <div className="video-shadow" aria-label="Background video of Fusion Spice services">
            <LazyLoad height={360} offset={100}>
              <video
                autoPlay
                muted
                loop
                className="w-100 video-opacity"
                playsInline
                preload="auto"
                aria-label="Background Video"
              >
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </LazyLoad>
          </div>
        </div>
      </div>

      {/* Dark Overlay to make the background video slightly darker */}
      <div className="glass-overlay text-center">
        <div className="animate__bounceIn">
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
