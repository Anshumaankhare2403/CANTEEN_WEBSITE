import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Scroller() {
  useEffect(() => {
    // GSAP animation for the scrollable column
    gsap.fromTo(
      ".scrollable-column", 
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".scrollable-column",
          start: "top bottom", // Start the animation when the column is in view
          end: "bottom top", // End when the column leaves the view
          scrub: true, // Smooth scrubbing effect
          markers: true, // Enable markers for debugging
        }
      }
    );
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Static Column */}
        <div className="col-md-6">
          <div className="static-column">
            <h2>Static Column</h2>
            <p>This column stays fixed.</p>
            <p>Additional content can go here.</p>
          </div>
        </div>

        {/* Scrollable Column */}
        <div className="col-md-6">
          <div className="scrollable-column">
            <h2>Scrollable Column</h2>
            <div className="content">
              {/* Add more content to ensure scrolling works */}
              <p>Scroll me! Scroll me!</p>
              <p>Fusion Spice has been setting the bar for unmatched hospitality and culinary expertise for more than 25 years. Our unwavering commitment to excellence has made us a highly regarded eating destination all around the country. Fusion Spice has a magnetic pull on visitors, who are attracted in by our delicious food as well as the promise of faultless service and unforgettable experiences. With unwavering commitment, we've built strong relationships with our clients, who come back time and time again to indulge in our culinary delights and create new chapters in their treasured memories with every visit.</p>
              <p>Fusion Spice has been setting the bar for unmatched hospitality and culinary expertise for more than 25 years. Our unwavering commitment to excellence has made us a highly regarded eating destination all around the country. Fusion Spice has a magnetic pull on visitors, who are attracted in by our delicious food as well as the promise of faultless service and unforgettable experiences. With unwavering commitment, we've built strong relationships with our clients, who come back time and time again to indulge in our culinary delights and create new chapters in their treasured memories with every visit.</p>
              <p>Fusion Spice has been setting the bar for unmatched hospitality and culinary expertise for more than 25 years. Our unwavering commitment to excellence has made us a highly regarded eating destination all around the country. Fusion Spice has a magnetic pull on visitors, who are attracted in by our delicious food as well as the promise of faultless service and unforgettable experiences. With unwavering commitment, we've built strong relationships with our clients, who come back time and time again to indulge in our culinary delights and create new chapters in their treasured memories with every visit.</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
              <p>More content...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scroller;
