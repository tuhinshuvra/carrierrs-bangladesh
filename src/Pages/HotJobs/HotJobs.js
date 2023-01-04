import React from 'react';
import { Link } from 'react-router-dom';

const HotJobs = () => {
    return (
        <div>
            <h2 className=' text-2xl font-bold my-8 capitalize'>HOT JOBS</h2>
            <div className="tabs tabs-boxed font-bold grid lg:grid-cols-3 ">
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">IT & Telecommunication</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Engineer/Architects</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
            </div>
        </div>
    );
};

export default HotJobs;