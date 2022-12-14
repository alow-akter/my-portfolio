import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Shared/Navber/Navber';
import Footer from '../Components/Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;