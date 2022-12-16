import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import MyProject from '../MyProject/MyProject';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProject></MyProject>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </div>
    );
};

export default Home;