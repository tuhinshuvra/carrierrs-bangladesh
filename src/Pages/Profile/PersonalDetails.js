import React from 'react';

const PersonalDetails = () => {
    return (
        <div>

            {/* <form className=' lg:mx-60'>
                <h2 className='mx-auto text-center font-bold text-3xl my-10'>Employee Profile</h2>
                <h2 className='mx-auto text-center font-bold text-xl '>General Profile</h2>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="national_id" id="national_id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="national_id" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">National ID</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_present_adress" id="floating_present_adress" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_present_adress" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Present Address</label>
                    </div>
                </div>
                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_permanent_adress" id="floating_permanent_adress" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_permanent_adress" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Permanent Address</label>
                    </div>

                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_present_experience" id="floating_present_experience" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_present_experience" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="education_experience" id="education_experience" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="education_experience" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Experience</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="education_qualification" id="education_qualification" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="education_qualification" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education Qualification</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="education_data" id="education_data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="education_data" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Data</label>
                    </div>
                </div>



                <h2 className='mx-auto text-center font-bold text-xl mt-12'>Academic Profile</h2>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="national_id" id="national_id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="national_id" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">National ID</label>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_present_adress" id="floating_present_adress" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_present_adress" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Present Address</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_permanent_adress" id="floating_permanent_adress" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_permanent_adress" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Permanent Address</label>
                    </div>

                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_present_experience" id="floating_present_experience" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_present_experience" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Experience</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="education_experience" id="education_experience" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="education_experience" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Experience</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="education_qualification" id="education_qualification" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="education_qualification" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Education Qualification</label>
                    </div>
                </div>

                <div class="grid  w-full md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="education_data" id="education_data" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="education_data" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Additional Data</label>
                    </div>
                </div>


                <button type="submit" class=" left-auto my-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Profile</button>
            </form> */}
            <div className=' mx-52 '>
                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className="collapse-title text-xl font-medium">
                    Personal Details
                </h2>
                {/* <div className="collapse-content"> */}
                {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                <div class="grid md:grid-cols-2 md:gap-6">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">First Name</span>
                        </label>
                        <input type="text" id='first-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Last Name</span>
                        </label>
                        <input type="text" id='last-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Father's Name</span>
                        </label>
                        <input type="text" id='fathers-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Mother's Name</span>
                        </label>
                        <input type="text" id='mothers-name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Date of Birth</span>
                        </label>
                        <input type="date" id='birth-dath' className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Gender</span>
                        </label>
                        <select className="select select-bordered w-80 ">
                            <option disabled selected>Select</option>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                            <option value={2}>Others</option>
                        </select>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Religion</span>
                        </label>
                        <select className="select select-bordered w-80 ">
                            <option disabled selected>Select</option>
                            <option value={0}>Buddhism</option>
                            <option value={1}>Hinduism</option>
                            <option value={2}>Islam</option>
                            <option value={3}>Christianity</option>
                            <option value={4}>Judaism</option>
                            <option value={5}>Irreligion</option>
                            <option value={6}>Folk religions</option>
                            <option value={99}>Others</option>
                        </select>
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Marital Status</span>
                        </label>
                        <select className="select select-bordered w-80 ">
                            <option disabled selected>Select</option>
                            <option value={0}>Married</option>
                            <option value={1}>Unmarried</option>
                            <option value={2}>Single</option>
                        </select>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Nationality</span>
                            <span className=" text-md -mr-40">Bangladeshi</span>
                            <input type="checkbox" className="checkbox" />
                        </label>

                        {/* <label className="label cursor-pointer"> </label> */}

                        <input type="text" id='nationality' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">National ID</span>
                        </label>
                        <input type="text" id='national-id' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>


                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Passport Number</span>
                        </label>
                        <input type="text" id='passport-number' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Passport Issue Date</span>
                        </label>
                        <input type="date" id='passport-issue-date' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>


                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Primary Mobile</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Secondary Mobile</span>
                        </label>
                        <input type="text" id='secondary-mobile' placeholder="880 1123456789" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Emergency Contact</span>
                        </label>
                        <input type="text" id='primary-mobile' placeholder="880 1123456789" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Change User ID</span>
                        </label>
                        <input type="email" id='user-id' placeholder="Email ID" className="input input-bordered w-full max-w-xs" />
                    </div>

                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Alternate Email</span>
                        </label>
                        <input type="email" id='alternate-email' placeholder="Email address" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Blood Group</span>
                        </label>
                        <select className="select select-bordered w-80 ">
                            <option disabled selected>Select</option>
                            <option value={0}>A(+ve)</option>
                            <option value={1}>A(-ve)</option>
                            <option value={2}>B(+ve)</option>
                            <option value={3}>B(-ve)</option>
                            <option value={4}>O(+ve)</option>
                            <option value={5}>O(-ve)</option>
                            <option value={6}>AB(+ve)</option>
                            <option value={7}>AB(-ve)</option>
                        </select>
                    </div>

                </div>

                <div class="grid md:grid-cols-2 md:gap-6 mt-2">
                    {/* <div className="form-control w-full max-w-xs"> */}
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Height (Inch)</span>
                        </label>
                        <input type="text" id='height' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-md font-bold ">Weight(kg)</span>
                        </label>
                        <input type="text" id='weight' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* </div> */}

        </div>
    );
};

export default PersonalDetails;