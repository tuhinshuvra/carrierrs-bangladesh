import React from 'react';

const JobPost = () => {
    return (
        <div>
            <div className=' mx-52  my-16'>

                {/* <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100  rounded-md "> */}
                <h2 className=" text-center text-2xl font-medium my-10">
                    Job Information
                </h2>

                <form action="">

                    {/* <div className="collapse-content"> */}
                    {/* <p>tabIndex={0} attribute is necessary to make the div focusable</p> */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Company Name*</span>
                            </label>
                            <input type="text" id='first-name' placeholder="Type Company Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">কোম্পানির নাম (বাংলায়)</span>
                            </label>
                            <input type="text" id='last-name' placeholder="কোম্পানির নাম বাংলায়" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Year of Establishment </span>
                            </label>
                            <input type="text" id='fathers-name' placeholder="Type Companies estabilishment year" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Company Size</span>
                            </label>
                            <select className="select select-bordered w-[303px]">
                                <option disabled selected>Select</option>
                                <option value={0}>1-15 Employees</option>
                                <option value={1}>16-50 Employees</option>
                                <option value={2}>51-100 Employees</option>
                                <option value={3}>100-500 Employees</option>
                                <option value={4}>501-1000 Employees</option>
                                <option value={5}>1000-10000 Employees</option>
                                <option value={6}>10000+ Employees</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">District</span>
                            </label>
                            <select className="select select-bordered w-72" name="district" id='district'>
                                <option value="Bagerhat">Bagerhat</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Bogra">Bogra</option>
                                <option value="Brahmanbaria">Brahmanbaria</option>
                                <option value="Chandpur">Chandpur</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Chuadanga">Chuadanga</option>
                                <option value="Comilla">Comilla</option>
                                <option value="Cox'sBazar">Cox'sBazar</option>
                                <option selected value="Dhaka">Dhaka</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Feni">Feni</option>
                                <option value="Gaibandha">Gaibandha</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Habiganj">Habiganj</option>
                                <option value="Jaipurhat">Jaipurhat</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Jessore">Jessore</option>
                                <option value="Jhalokati">Jhalokati</option>
                                <option value="Jhenaidah">Jhenaidah</option>
                                <option value="Khagrachari">Khagrachari</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Kurigram">Kurigram</option>
                                <option value="Kushtia">Kushtia</option>
                                <option value="Lakshmipur">Lakshmipur</option>
                                <option value="Lalmonirhat">Lalmonirhat</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Magura">Magura</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Maulvibazar">Maulvibazar</option>
                                <option value="Meherpur">Meherpur</option>
                                <option value="Munshiganj">Munshiganj</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Narail">Narail</option>
                                <option value="Narayanganj">Narayanganj</option>
                                <option value="Narsingdi">Narsingdi</option>
                                <option value="Natore">Natore</option>
                                <option value="Nawabganj">Nawabganj</option>
                                <option value="Netrokona">Netrokona</option>
                                <option value="Nilphamari">Nilphamari</option>
                                <option value="Noakhali">Noakhali</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Panchagarh">Panchagarh</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                                <option value="Rajbari">Rajbari</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Rangamati">Rangamati</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Satkhira">Satkhira</option>
                                <option value="Shariatpur">Shariatpur</option>
                                <option value="Sherpur">Sherpur</option>
                                <option value="Sirajganj">Sirajganj</option>
                                <option value="Sunamganj">Sunamganj</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Tangail">Tangail</option>
                                <option value="Thakurgaon">Thakurgaon</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Thana</span>
                            </label>
                            <select className="select select-bordered w-72" name="district" id='district'>
                                <option value="Bagerhat">Bagerhat</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Barguna">Barguna</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Bhola">Bhola</option>
                                <option value="Bogra">Bogra</option>
                                <option value="Brahmanbaria">Brahmanbaria</option>
                                <option value="Chandpur">Chandpur</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Chuadanga">Chuadanga</option>
                                <option value="Comilla">Comilla</option>
                                <option value="Cox'sBazar">Cox'sBazar</option>
                                <option selected value="Dhaka">Dhaka</option>
                                <option value="Dinajpur">Dinajpur</option>
                                <option value="Faridpur">Faridpur</option>
                                <option value="Feni">Feni</option>
                                <option value="Gaibandha">Gaibandha</option>
                                <option value="Gazipur">Gazipur</option>
                                <option value="Gopalganj">Gopalganj</option>
                                <option value="Habiganj">Habiganj</option>
                                <option value="Jaipurhat">Jaipurhat</option>
                                <option value="Jamalpur">Jamalpur</option>
                                <option value="Jessore">Jessore</option>
                                <option value="Jhalokati">Jhalokati</option>
                                <option value="Jhenaidah">Jhenaidah</option>
                                <option value="Khagrachari">Khagrachari</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Kishoreganj">Kishoreganj</option>
                                <option value="Kurigram">Kurigram</option>
                                <option value="Kushtia">Kushtia</option>
                                <option value="Lakshmipur">Lakshmipur</option>
                                <option value="Lalmonirhat">Lalmonirhat</option>
                                <option value="Madaripur">Madaripur</option>
                                <option value="Magura">Magura</option>
                                <option value="Manikganj">Manikganj</option>
                                <option value="Maulvibazar">Maulvibazar</option>
                                <option value="Meherpur">Meherpur</option>
                                <option value="Munshiganj">Munshiganj</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Naogaon">Naogaon</option>
                                <option value="Narail">Narail</option>
                                <option value="Narayanganj">Narayanganj</option>
                                <option value="Narsingdi">Narsingdi</option>
                                <option value="Natore">Natore</option>
                                <option value="Nawabganj">Nawabganj</option>
                                <option value="Netrokona">Netrokona</option>
                                <option value="Nilphamari">Nilphamari</option>
                                <option value="Noakhali">Noakhali</option>
                                <option value="Pabna">Pabna</option>
                                <option value="Panchagarh">Panchagarh</option>
                                <option value="Patuakhali">Patuakhali</option>
                                <option value="Pirojpur">Pirojpur</option>
                                <option value="Rajbari">Rajbari</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Rangamati">Rangamati</option>
                                <option value="Rangpur">Rangpur</option>
                                <option value="Satkhira">Satkhira</option>
                                <option value="Shariatpur">Shariatpur</option>
                                <option value="Sherpur">Sherpur</option>
                                <option value="Sirajganj">Sirajganj</option>
                                <option value="Sunamganj">Sunamganj</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Tangail">Tangail</option>
                                <option value="Thakurgaon">Thakurgaon</option>
                            </select>
                        </div>


                    </div>


                    <div className=" w-full mt-2">
                        <div>
                            <textarea className='input input-bordered w-full' id='address-english' type="text" placeholder='write company address' />
                        </div>
                    </div>

                    <div className="mt-2">
                        <div>
                            <textarea className='input input-bordered w-full' id='address-bangla' type="text" placeholder='কোম্পানির ঠিকানা বাংলায় লিখুন' />
                        </div>
                    </div>

                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Industry Type</span>
                        </label>
                        <div>
                            <input className='input input-bordered w-full' id='industry-type' type="text" placeholder='write industry type' />
                        </div>
                    </div>
                    <div className=" w-full mt-2">
                        <label className="label">
                            <span className="label-text text-md font-bold">Business Description</span>
                        </label>
                        <div>
                            <textarea className='input input-bordered w-full' id='business-description' type="text" placeholder='write business description' />
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Business/ Trade License No</span>
                            </label>
                            <input type="text" id='trade-licence-no' placeholder="Business/ Trade License No" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Website URL</span>
                            </label>
                            <input type="text" id='web-site-url' placeholder="Type Website URL" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>





                    <h2 className=' text-center text-xl font-bold mt-12'>Contact</h2>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Contact Person's Name*</span>
                            </label>
                            <input type="text" id='primary-mobile' placeholder="Type Contact Person's Name" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Contact Person's Designation</span>
                            </label>
                            <input type="text" id='secondary-mobile' placeholder="Type Contact Person's Designation" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6 mt-2">
                        {/* <div className="form-control w-full max-w-xs"> */}
                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Contact Person's Email*</span>
                            </label>
                            <input type="text" id='primary-mobile' placeholder="Type Contact Person's Email" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-md font-bold ">Contact Person's Mobile</span>
                            </label>
                            <input type="text" id='secondary-mobile' placeholder="Type Contact Person's Mobile" className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>

                    <div className=' flex justify-between my-10 w-full'>
                        <button className="btn btn-warning">Cancel</button>
                        <button type='submit' name='submit' className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default JobPost;