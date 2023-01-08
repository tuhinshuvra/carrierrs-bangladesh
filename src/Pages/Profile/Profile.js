import React from 'react';

const Profile = () => {
    return (
        <div className=''>

            <div className=" columns-4 flex justify-end ">
                <img className="rounded-circle" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt='' />
                <span className=" font-bold">Email : </span><span className="text-black-50">banglibabu@gmail.com</span>
            </div>

            <h2 className='text-center font-bold text-4xl my-10'>Profile Settings</h2>

            <div className=' columns-8 mx-auto my-6'>
                <label className="labels">Name</label>
                <input type="text" className="form-control" placeholder="Full Name" value="" />
                <label className="labels">Surname</label>
                <input type="text" className="form-control" value="" placeholder="surname" />
                <label className="labels">Phone/Mobile</label>
                <input type="text" className="form-control" placeholder="enter phone/mobile" value="" />
            </div>

            <div className=" columns-8 mx-auto my-6">
                <label className="labels">Address Line 1</label>
                <input type="text" className="form-control" placeholder="enter address line 1" value="" />
                <label className="labels">Address Line 2</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value="" />
                <label className="labels">Postcode</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value="" />
            </div>

            <div className=" columns-8 mx-auto my-6">
                <label className="labels">State</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value="" />
                <label className="labels">Area</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value="" />
                <label className="labels">Country</label>
                <input type="text" className="form-control" placeholder="country" value="" />
            </div>


            <div className=" columns-8 my-6">
                <label className="labels">Education</label>
                <input type="text" className="form-control" placeholder="education" value="" />
            </div>


            <div className="columns-8">
                <label>Edit Experience</label>
                <input type="text" className="form-control" placeholder="experience" value="" />
            </div>

            <div className=" columns-8 my-6">
                <label className="labels">Additional Details</label>
                <input type="text" className="form-control" placeholder="additional details" value="" />
            </div>

            <div className="text-center my-6"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>

        </div>

    );
};

export default Profile;