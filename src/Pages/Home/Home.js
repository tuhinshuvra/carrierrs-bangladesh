import React from 'react';
import Banner from '../Banner/Banner';
import AnimatedBanner from '../Banner/AnimatedBanner';
import JobSearch from '../JobSearch/JobSearch';
import JobCategory from '../JobCategory/JobCategory';
import HotJobs from '../HotJobs/HotJobs';
import JobAlert from '../JobAlert/JobAlert';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <AnimatedBanner></AnimatedBanner>
            <JobSearch></JobSearch>
            <JobCategory></JobCategory>
            <HotJobs></HotJobs>
            <JobAlert></JobAlert>

        </div>
    );
};

export default Home;