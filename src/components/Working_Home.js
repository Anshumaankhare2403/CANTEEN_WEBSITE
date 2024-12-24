import React from 'react';
import Homebutton from '../components/Homebutton';
import LazyLoad from 'react-lazyload';

function Working_Home(props) {
    return (
        <div className='container pt-5 mt-5 pb-5 Work_background rounded-bottom-5 '>
            <div className='row pt-3 px-5 '>
                <div className='col-lg-6 '>
                    {/* Lazy loading for the image */}
                    <LazyLoad height={200} offset={100}>
                        {props.img}
                    </LazyLoad>
                </div>
                <div className='col-lg align-self-center mt-4 mt-md-4 mt-lg-0'>
                    <a href='/' className='px-lg-5 px-md-5 nav-link fw-bold pb-3' aria-label="Home">Home</a>
                    <p className='display-4 px-lg-5 px-md-5 fw-bold'>
                        {props.head}
                    </p>
                    <div className='pt-2 px-lg-5 px-md-5'>
                        <Homebutton name={props.Bname} link={props.link} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Working_Home;
