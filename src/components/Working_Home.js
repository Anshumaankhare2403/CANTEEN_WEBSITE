import React from 'react';
import Wavify from 'react-wavify';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';

function Working_Home(props) {
    return (
        <div className="container  pt-5 mt-5 pb-5 rounded-bottom rounded position-relative">
            {/* Wave animation as background */}


            {/* Content */}
            <div className="row pt-3  px-3">
                <div className="col-lg-6">
                    {/* Lazy loading for the image */}
                    <LazyLoad height={200} offset={100}>
                        {props.img}
                    </LazyLoad>
                </div>
                <div className="col-lg align-self-center mt-4 mt-md-4 mt-lg-0">
                    <Wavify
                        className="wave-background"
                        fill="#A8DF8E"  // Customize color
                        options={{
                            height: 60,          // Height of the wave
                            amplitude: 20,       // Amplitude of the wave
                            speed: 0.75,         // Speed of the wave
                            points: 4,           // Number of wave points
                        }}
                    />
                    <Wavify
                        className="wave-background"
                        fill="#F3FDE8"  // Customize color
                        options={{
                            height: 200,          // Height of the wave
                            amplitude: 20,       // Amplitude of the wave
                            speed: 0.70,         // Speed of the wave
                            points: 5,           // Number of wave points
                        }}
                    />
                    <Wavify
                        className="wave-background"
                        fill="#A1C398"  // Customize color
                        options={{
                            height: 300,          // Height of the wave
                            amplitude: 20,       // Amplitude of the wave
                            speed: 0.70,         // Speed of the wave
                            points: 6,           // Number of wave points
                        }}
                    />
                    <a href="/" className="px-lg-5 px-md-5 nav-link fw-bold pb-3" aria-label="Home">
                        Home
                    </a>
                    <p className="display-4 px-lg-5 px-md-5 fw-bold">{props.head}</p>
                    <div className="pt-2 px-lg-5 px-md-5">
                        <Homebutton name={props.Bname} link={props.link} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Working_Home;
