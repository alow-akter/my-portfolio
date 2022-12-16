
import React from "react";
import { Link } from "react-router-dom";


const Navber = () => {
    const menuItems = <React.Fragment >

        <li className='font-bold text-purple-700 hover:text-'><Link to='/'>Home</Link></li>
        <li className='font-bold text-purple-700'><Link to='/aboutMe'>About me</Link></li>
        <li className='font-bold text-purple-700'><Link to='/contact'>Contact</Link></li>
        <li className='font-bold text-purple-700 sm:mr-0 lg:mr-20'><Link to='/MyProject'>MyProject</Link></li>


    </React.Fragment>

    return (

        <div className="navbar bg-purple-400 flex justify-evenly ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="  normal-case font-bold text-2xl text-purple-900 lg:ml-16  sm:m-3">Alow Akter </Link>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal p-0  ml-10">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navber;