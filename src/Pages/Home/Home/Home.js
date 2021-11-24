import React from 'react';
import Feature from '../Feature/Feature';
import Gallery from '../Gallery/Gallery';
import Intro from '../Intro/Intro';
import OurService from '../OurService/OurService';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Intro></Intro>
            <OurService></OurService>
            <Feature></Feature>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;