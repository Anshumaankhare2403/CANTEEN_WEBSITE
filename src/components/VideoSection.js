import React from "react";
import backgroundVideo from "../assets/videos/vide.mp4";
import Homebutton from "../components/Homebutton";

function VideoSection() {
  return (
    
    <>
    <dev className="container-fluid video-container " id="home">
      <div className="row "> {/* Hide on small screens */}
        <div className="col">

            <video
              autoPlay
              muted
              loop
              className="video-opacity"
              playsInline
              preload="auto"
              aria-label="Background Video"
            >
              <source src={backgroundVideo} type="video/mp4" />
              <source src="path-to-your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>


      {/* Dark Overlay */}
      <div className="glass-overlay text-center">
        <div className="animate__bounceIn">
          <h1 className="display-5  px-3 px-lg-5 text-capitalize">Explore our food brands for an experience of authentic, innovative, and modern dining.</h1>
          <br />
          <div className="d-flex justify-content-center">
            <Homebutton name="Get in Touch" link="/contact" />
          </div>
        </div>
      </div>
    </dev>

    </>
  );
}

export default VideoSection;
