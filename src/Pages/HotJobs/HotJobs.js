import React, { useEffect, useState } from 'react';
import HotJobCategoryDisplay from './HotJobCategoryDisplay';

const HotJobs = () => {
    const [categories, setCategory] = useState([]);
    let newCategories = categories.slice(0, 9)

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
            <h2 className=' text-2xl font-bold my-8 capitalize'>HOT JOBS</h2>
            <div className=' grid lg:grid-cols-3 sm:grid-cols-1 gap-2 sm:mx-16 mb-40'>
                {newCategories.map(cat => <HotJobCategoryDisplay
                    key={categories.id}
                    categories={categories}
                ></HotJobCategoryDisplay>)}
            </div>
        </div>
    );
};

export default HotJobs;