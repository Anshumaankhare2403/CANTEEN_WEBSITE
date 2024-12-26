import React from 'react';
import Wavify from 'react-wavify';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';

function Working_Welcome(props) {
    return (
        <div className="container px-lg-5 px-md-5 position-relative">
            {/* Wave animation as background */}
            <Wavify
                className="wave-background"
                fill="#A8DF8E"  // Customize color
                options={{
                    height: 40,          // Height of the wave
                    amplitude: 20,       // Amplitude of the wave
                    speed: 0.75,         // Speed of the wave
                    points: 4,           // Number of wave points
                }}
            />
            <Wavify
                className="wave-background"
                fill="#F3FDE8"  // Customize color
                options={{
                    height: 80,          // Height of the wave
                    amplitude: 20,       // Amplitude of the wave
                    speed: 0.70,         // Speed of the wave
                    points: 5,           // Number of wave points
                }}
            />
            <Wavify
                className="wave-background"
                fill="#A1C398"  // Customize color
                options={{
                    height: 120,          // Height of the wave
                    amplitude: 20,       // Amplitude of the wave
                    speed: 0.70,         // Speed of the wave
                    points: 6,           // Number of wave points
                }}
            />

            {/* Content Section */}
            <div className="row">
                <div className="col">
                    <h1 className="display-4 fw-bold">{props.head}</h1>
                    <p className="fs-5">{props.par}</p>
                    <div className="pt-2">
                        <Homebutton name="Take Your Next Step With Us" link={props.link} />
                    </div>
                </div>
            </div>

            {/* Optional Image Section */}
            {props.img && (
                <div className="row mt-4">
                    <div className="col">
                        <LazyLoad height={200} offset={100}>
                            {React.cloneElement(props.img, {
                                className: 'img-fluid rounded', // Ensure image responsiveness and style
                                alt: props.altText || 'Welcome Image', // Default alt text for SEO
                            })}
                        </LazyLoad>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Working_Welcome;
