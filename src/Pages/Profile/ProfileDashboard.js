import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDashboard = () => {
    return (
        <div className=' flex '>

            <div className="drawer drawer-mobile  columns-3 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
            <div className="breadcrumbs columns-8 mx-auto">
                <ul>
                    <li>
                        <Link to='/dashborard/personal'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <h2 className=' text-lg font-bold'>Personal</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashborard/education">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <h2 className=' text-lg font-bold'>Education/Training</h2>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashborard/employment">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <h2 className=' text-lg font-bold'>Employment</h2>

                        </Link>
                    </li>
                    <li>
                        <Link to="/dashborard/other-information">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <h2 className=' text-lg font-bold'>Other Information</h2>

                        </Link>
                    </li>
                    <li>
                        <Link to="/dashborard/photograph">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            <h2 className=' text-lg font-bold'>Photograph</h2>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default ProfileDashboard;