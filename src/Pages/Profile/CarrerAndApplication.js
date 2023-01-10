import React from 'react';

const CarrerAndApplication = () => {
    return (
        <div>
            <div className=' mx-52 '>
                <h2 className="collapse-title text-xl font-medium">
                    Carrer and Application Information
                </h2>
                <label className="label">
                    <span className="label-text text-md font-bold  ">Objective</span>
                </label>
                <textarea id='objective' className="textarea w-full input input-bordered"  ></textarea>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div>
                        <label className="label"> <span className="label-text text-md font-bold ">Present Salary</span> </label>
                        <input type="text" id='present-salary' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text-alt">TK/ Month</span> </label>
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-md font-bold ">Expected Salary</span></label>
                        <input type="text" id='expected-salary' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text-alt">TK/ Month</span> </label>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div>
                        <label className="label"> <span className="label-text text-md font-bold ">Looking for (Job Level)</span> </label>
                        <div className=' flex  '>

                            <div className=' flex items-center'>
                                <label for="html">Entry Level</label><input className=' ml-1' type="radio" id="entry-level" name="entry-level" value="entry-level" />
                            </div>
                            <div className=' mx-5  flex items-center'>
                                <label for="html">Mid Level</label><input className=' ml-1' type="radio" id="entry-level" name="entry-level" value="entry-level" />
                            </div>
                            <div className=' flex items-center'>
                                <label for="html">Top Level</label><input className=' ml-1' type="radio" id="entry-level" name="entry-level" value="entry-level" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="label"> <span className="label-text text-md font-bold ">Available for (Job Nature)</span></label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarrerAndApplication;