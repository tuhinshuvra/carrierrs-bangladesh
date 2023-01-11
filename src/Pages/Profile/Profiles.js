import React from 'react';
import Personal from './Personal/Personal';
import EducationTraining from './Education-Training/EducationTraining';
import ProfileDashboard from './ProfileDashboard';

const Profile = () => {
    return (
        <div>
            <ProfileDashboard></ProfileDashboard>
            {/* <Personal></Personal> */}
            <EducationTraining></EducationTraining>
        </div>
    );
};

export default Profile;