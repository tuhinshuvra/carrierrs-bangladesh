import React, { useEffect, useState } from 'react';
import JobCategoryDisplay from './JobCategoryDisplay';

const JobCategory = () => {
    const [categories, setCategory] = useState([]);
    let newCategories = categories.slice(0, 16)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((data) => {
                console.log("Data : ", data)
                setCategory(data)
            })
    }, []);


    return (
        <div>
            <h2 className=' text-center text-2xl font-bold my-8 capitalize'>JOB CATEGORIES</h2>
            <div className=' grid lg:grid-cols-4 sm:grid-cols-1 gap-2 lg:mx-0 sm:mx-16 mb-40'>
                {newCategories.map(cat => <JobCategoryDisplay
                    key={categories.id}
                    categories={categories}
                ></JobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default JobCategory;