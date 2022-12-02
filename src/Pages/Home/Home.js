import React from 'react';
import AboutAppoitment from './AboutAppoitment';
import AboutUs from './AboutUs';
import AboutUsCard from './AboutUsCard';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Testimonial from './Testimonial';
import WeProvidedServices from './WeProvidedServices';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUsCard/>
            <WeProvidedServices/>
            <AboutUs/>
            <AboutAppoitment/>
            <Testimonial/>
            <ContactUs/>
        </div>
    );
};

export default Home;