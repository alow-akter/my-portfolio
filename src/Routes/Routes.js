
import { createBrowserRouter } from "react-router-dom";
import AboutMe from "../Components/AboutMe/AboutMe";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import MyProject from "../Components/MyProject/MyProject";



import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/aboutMe',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/myProject',
                element: <MyProject></MyProject>
            },

        ]
    }
])