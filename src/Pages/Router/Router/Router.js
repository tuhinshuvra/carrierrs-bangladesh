import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../layout/Main';
import Home from '../../Home/Home';
import Signin from '../../Signin/Signin';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Profile from '../../Profile/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    }
])
export default router;