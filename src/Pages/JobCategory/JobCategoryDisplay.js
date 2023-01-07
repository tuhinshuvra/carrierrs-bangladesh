import React from 'react';
import { Link } from 'react-router-dom';

const JobCategoryDisplay = ({ categories }) => {
    return (
        <div>
            <Link to='/'>
                <div className='text-xl card card-side bg-base-100 shadow-2xl hover:text-green-900  hover:-rotate-1'>
                    <div className=' card-body '> <img src="" alt="" />
                        {categories[0].title}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default JobCategoryDisplay;