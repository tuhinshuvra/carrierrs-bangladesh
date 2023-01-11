import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../../layout/Main';
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
    },
    {
        path: '/dashborard',
        element: <Profile></Profile>, children: [
            {
                path: '/dashborard/personal',
                element: <Personal></Personal>
            },
            {
                path: '/dashborard/education',
                element: <EducationTraining></EducationTraining>
            },
            {
                path: '/dashborard/employment',
                element: <Employment></Employment>
            },
            {
                path: '/dashborard/other-information',
                element: <OtherRelevantInformation></OtherRelevantInformation>
            },
            {
                path: '/dashborard/photograph',
                element: <Photograph></Photograph>
            },

        ]
    }
])
export default router;