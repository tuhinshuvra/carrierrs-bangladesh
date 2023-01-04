import React from 'react';
import { Link } from 'react-router-dom';

const JobCategory = () => {
    return (
        <div>
            <h2 className=' text-2xl font-bold my-8 capitalize'>JOB CATEGORY</h2>
            <div className="tabs tabs-boxed font-bold grid lg:grid-cols-3  gap-4">
                <div className="card card-side bg-base-100 shadow-xl">
                    {/* <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure> */}
                    <p>SVG ICON</p>
                    <div className="card-body">
                        <h2 className="card-title">Marketing & Communication</h2>
                        <p>123 Jobs Available</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    {/* <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure> */}
                    <p>SVG ICON</p>
                    <div className="card-body">
                        <h2 className="card-title">Marketing & Communication</h2>
                        <p>123 Jobs Available</p>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl">
                    {/* <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure> */}
                    <p>SVG ICON</p>
                    <div className="card-body">
                        <h2 className="card-title">Marketing & Communication</h2>
                        <p>123 Jobs Available</p>
                    </div>
                </div>



                {/* <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">IT & Telecommunication</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
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
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link>
                <Link className="tab text-black hover:text-blue-700">Accounting/Finance</Link> */}
            </div>
        </div>
    );
};

export default JobCategory;