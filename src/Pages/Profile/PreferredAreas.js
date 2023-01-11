import React from 'react';

const PreferredAreas = () => {
    return (
        <div>
            <div className=' mx-52 '>
                <h2 className="collapse-title text-xl font-medium">Preferred Areas</h2>

                <label className="label"> <span className="label-text text-md font-bold">Preferred Job Categories</span> </label>
                <p>Preferred job categories represents your desired sector(s) to work (at least 1 category any of section)</p>
                <textarea id='job-location' className="textarea w-full input input-bordered"  ></textarea>


                <h3 className="label-text text-md font-bold">Preferred Job Location</h3>
                <span>Preferred Job Location defines the geographical place where you prefer to work. Add your priority wise preferred job locations. i.e. 1st: Dhaka, 2nd: Sylhet, 3rd: Khulna.</span>

                <label className="label"> <span className="label-text">Inside Bangladesh Add Districts (max 15)</span> </label>
                <textarea id='inside-bangladesh' className="textarea w-full input input-bordered"  ></textarea>

                <label className="label"> <span className="label-text">Outside Bangladesh Add Countries (max 10)</span> </label>
                <textarea id='outside-bangladesh' className="textarea w-full input input-bordered"  ></textarea>

                <label className="label"> <span className="label-text text-md font-bold">Add your preferred organization type (max 12)</span> </label>
                <textarea id='organization-type' className="textarea w-full input input-bordered"  ></textarea>

            </div>
        </div>
    );
};

export default PreferredAreas;