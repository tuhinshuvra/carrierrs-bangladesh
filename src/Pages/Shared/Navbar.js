import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/carriers-bangladesh-logo.png';

const Navbar = () => {

    const menuItems = <React.Fragment>
        <li className='font-bold'><Link to="/">Home</Link></li>
        <li className='lg:mx-2 font-bold'><Link to="/about">About</Link></li>
        <li className='lg:mx-2 font-bold'><Link to="/contact">Contact Us</Link></li>
        <li className='lg:mx-2 font-bold'><Link to="/dashboard/employers">Employers</Link></li>
        <li className='lg:mx-2 font-bold'><Link to="/dashboard/myjobs">MyJobs</Link></li>
        <li className='lg:mx-2 font-bold'><Link to="/signin">Signin</Link></li>
    </React.Fragment>

    return (
        <div>
            <div className="navbar  bg-base-100 justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-3xl font-bold ">
                        <img className=' w-20 className="transition ease-in-out delay-150  hover:scale-150  duration-300' src={Logo} alt="" />
                        Careers Bangladesh
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;