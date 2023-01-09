import React from 'react';

const AddressDetails = () => {
    return (
        <div>
            <div className=' mx-52  mt-10'>
                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className="collapse-title text-xl font-medium">
                    Address Details
                </h2>
                {/* <div className="collapse-content"> */}
                {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                <div class="grid md:grid-cols-2 md:gap-6">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Present Address</span>
                        </label>
                        <input type="radio" name="inside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Inside Bangladesh</label>
                        <input type="radio" name="outside-bangladesh" className="radio radio-primary" /> <label htmlFor="">Outside Bangladesh</label>
                    </div>
                </div>

                <div class="grid md:grid-cols-3 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <select className="select select-bordered w-60 ">
                            <option disabled selected>Select District</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-60 ">
                            <option disabled selected>Select Thana</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>
                    <div>
                        <select className="select select-bordered w-60 ">
                            <option disabled selected>Select P.O.</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>
                </div>

                <div class="grid md:grid-cols-1 md:gap-6 mt-2">
                    <input type="text" id='first-name' placeholder="Type your house no/road/village" className="input input-bordered w-full max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default AddressDetails;