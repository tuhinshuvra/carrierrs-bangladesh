import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import Signin from '../../Signin/Signin';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Profile from '../../Profile/Profiles';
import Personal from '../../Profile/Personal/Personal';
import EducationTraining from '../../Profile/Education-Training/EducationTraining';
import Employment from '../../Profile/Employment/Employment';
import OtherRelevantInformation from '../../Profile/Personal/OtherRelevantInformation';
import Photograph from '../../Profile/Photograph/Photograph';
import MainLayout from '../../../layout/MainLayout';
import DashboardLayout from '../../../layout/DashboardLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/personal',
                element: <Personal></Personal>
            },
            {
                path: '/dashboard/education',
                element: <EducationTraining></EducationTraining>
            },
            {
                path: '/dashboard/employment',
                element: <Employment></Employment>
            },
            {
                path: '/dashboard/other-information',
                element: <OtherRelevantInformation></OtherRelevantInformation>
            },
            {
                path: '/dashboard/photograph',
                element: <Photograph></Photograph>
            },

        ]
    }
])
export default router;