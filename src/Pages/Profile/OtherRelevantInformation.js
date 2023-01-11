import React from 'react';

const OtherRelevantInformation = () => {
    return (
        <div>
            <div className=' mx-52 my-10 '>
                <h2 className=" text-center text-2xl font-medium">
                    Other Relevant Information
                </h2>
                <label className="label"> <span className="label-text text-md font-bold">Career Summary</span></label>
                <textarea id='career-summary' className="textarea w-full input input-bordered"  ></textarea>

                <label className="label"> <span className="label-text text-md font-bold">Special Qualification</span></label>
                <textarea id='specual-qualification' className="textarea w-full input input-bordered"  ></textarea>

                <label className="label"> <span className="label-text text-md font-bold">Keywords</span></label>
                <textarea id='keywords' className="textarea w-full input input-bordered"  ></textarea>
            </div>
        </div>
    );
};

export default OtherRelevantInformation;