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
import MyJobDashboard from '../../../layout/MyJobDashboard';
import JobPost from '../../JobPost/JobPost';
import JobSummary from '../../JobPost/JobSummary';
import PostedJobList from '../../JobPost/PostedJobList';
import EmployersDashboard from '../../../layout/EmployersDashboard';

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
        path: '/dashboard/myjobs/',
        element: <MyJobDashboard></MyJobDashboard>,
        children: [
            {
                path: '/dashboard/myjobs/personal',
                element: <Personal></Personal>
            },
            {
                path: '/dashboard/myjobs/education',
                element: <EducationTraining></EducationTraining>
            },
            {
                path: '/dashboard/myjobs/employment',
                element: <Employment></Employment>
            },
            {
                path: '/dashboard/myjobs/other-information',
                element: <OtherRelevantInformation></OtherRelevantInformation>
            },
            {
                path: '/dashboard/myjobs/photograph',
                element: <Photograph></Photograph>
            },

        ]
    },
    {
        path: '/dashboard/employers/',
        element: <EmployersDashboard></EmployersDashboard>,
        children: [
            {
                path: '/dashboard/employers/jobpost',
                element: <JobPost></JobPost>
            },

            {
                path: '/dashboard/employers/jobSummary',
                element: <JobSummary></JobSummary>
            },
            {
                path: '/dashboard/employers/jobList',
                element: <PostedJobList></PostedJobList>
            },
        ]
    }
])
export default router;