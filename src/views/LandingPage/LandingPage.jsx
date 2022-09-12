import React from 'react';
import {Link} from 'react-router-dom';
// import Carrousel from '../Carousel/Carousel';
// import AboutUs from '../AboutUs/AboutUs';
// import './LandingPage.css';

export default function LandingPage(){

    return(
        <div className='containerLanding'>
            <div className='firstContactLanding'>
                <h1 className='titleLanding'>OUR ECOMMERCE IS TO SERVE YOU</h1>
                <hr className='divider' />
                <span className='textLanding'>All you need is here ... </span>
                <Link to='/home'>
                    <button type="button" className="buttonSlide">
                        <div>Come on inside</div>
                        <i className="icon-arrow-right"></i>
                    </button>
                </Link>
            </div>

            <div className='landingCarousel'>
                <h2>Popular products:</h2>
                <hr className='divider2' />
                {/* <Carrousel /> */}
                carrousel here
            </div>

            <div className='landingAboutUs'>
                {/* <AboutUs /> */}
                about us here
            </div>
        </div>
    )
}