import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobList = () => {
    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-10 '>Applied Job List</h2>
            <ol className='max-w-md space-y-1 list-decimal list-inside '>
                <Link> <li>Full Stack Web Developer</li></Link>
                <Link> <li>Front End Web Developer</li></Link>
                <Link> <li>Back End Web Developer</li></Link>
                <Link> <li>Server Administrator</li></Link>
                <Link> <li>Database Administrator</li></Link>
            </ol>
        </div>
    );
};

export default AppliedJobList;