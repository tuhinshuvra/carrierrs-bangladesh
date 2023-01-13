import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Home/Home';
import Signin from '../../Signin/Signin';
import Register from '../../Register/Register';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Personal from '../../Profile/MyJobs/Personal/Personal';
import EducationTraining from '../../Profile/MyJobs/Education-Training/EducationTraining';
import Employment from '../../Profile/MyJobs/Employment/Employment';
import OtherRelevantInformation from '../../Profile/MyJobs/Personal/OtherRelevantInformation';
import Photograph from '../../Profile/MyJobs/Photograph/Photograph';
import MainLayout from '../../../layout/MainLayout';
import MyJobDashboard from '../../../layout/MyJobDashboard';
import PostedJobList from '../../Profile/Employers/PostedJobList';
import EmployersDashboard from '../../../layout/EmployersDashboard';
import EmployerDetails from '../../Profile/Employers/EmployerDetails';
import AppliedJobList from '../../Profile/MyJobs/AppliedJobList/AppliedJobList';
import JobPrimaryPost from '../../Profile/Employers/JobPrimaryPost';
import JobDetailsPost from '../../Profile/Employers/JobDetailsPost';

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
            {
                path: '/dashboard/myjobs/applied',
                element: <AppliedJobList></AppliedJobList>
            },

        ]
    },
    {
        path: '/dashboard/employers/',
        element: <EmployersDashboard></EmployersDashboard>,
        children: [
            {
                path: '/dashboard/employers/employerDetails',
                element: <EmployerDetails></EmployerDetails>
            },
            {
                path: '/dashboard/employers/jobprimarypost',
                element: <JobPrimaryPost></JobPrimaryPost>
            },
            {
                path: '/dashboard/employers/jobdetailspost',
                element: <JobDetailsPost></JobDetailsPost>
            },
            {
                path: '/dashboard/employers/jobList',
                element: <PostedJobList></PostedJobList>
            },
        ]
    }
])
export default router;