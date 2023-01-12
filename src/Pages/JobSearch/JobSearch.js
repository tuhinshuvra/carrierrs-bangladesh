import React from 'react';
import { Link } from 'react-router-dom';

const JobSearch = () => {
    return (
        <div className=' my-24  '>
            <h2 className=' text-center text-2xl font-bold my-8 capitalize'>LETS FIND YOUR JOB</h2>
            {/* <div className=" grid lg:grid-cols-4 lg:gap-10 md:grid-cols-2 sm:grid-cols-1 mx-auto"> */}
            <div className=" text-center">
                <input type="text" placeholder="Keyword" className="input input-bordered lg:w-1/6 sm:w-2/3 mx-2 " />
                <input type="text" placeholder="Organization Type" className="input input-bordered lg:w-1/6 sm:w-2/3 mx-2 " />
                <input type="text" placeholder="Location" className="input input-bordered lg:w-1/6 sm:w-2/3 mx-2 " />
                <button className='btn btn-primary w-1/6 mx-2 '>Search</button>
            </div>

            {/* <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                    <Link href="#" className="label-text-alt">
                        Need help?
                    </Link>
                </label>
                <input type="text" placeholder="username" className="input input-bordered" />
                <label className="label">
                    <a href="#" className="label-text-alt">Forgot username?</a>
                    <a href="#" className="label-text-alt">Are you sure?</a>
                </label>
            </div> */}

            {/* <div className=" flex justify-evenly lg:w-3/4  mx-auto my-10 ">
                <div className="flex flex-col text-center">
                    <span className="font-mono text-5xl">
                        <span>2345</span>
                    </span>
                    <p className=' text-3xl  uppercase' >LIVE JOBS</p>
                </div>
                <div className="flex flex-col text-center">
                    <span className="font-mono text-5xl">
                        <span>2345</span>
                    </span>
                    <p className=' text-3xl  uppercase' >COMPANIES</p>
                </div>
                <div className="flex flex-col text-center">
                    <span className="font-mono text-5xl">
                        <span>2345</span>
                    </span>
                    <p className=' text-3xl uppercase' >EMPLOYERS</p>
                </div>
            </div> */}
            <div className="stats shadow lg:flex  justify-evenly lg:mx-52 sm:mx-auto mt-8">
                <div className="stat">
                    <div className="stat-figure text-secondary  hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Live Jobs</div>
                    <div className="stat-value">23452</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary  hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Companies</div>
                    <div className="stat-value">2154</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary  hidden lg:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                    </div>
                    <div className="stat-title text-2xl">Employers</div>
                    <div className="stat-value">1,200</div>
                </div>

            </div>
        </div>
    );
};

export default JobSearch;