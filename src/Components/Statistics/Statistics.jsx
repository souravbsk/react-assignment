import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const assignmentData = useLoaderData();
    console.log(assignmentData);
    return (
        <div>
            <Banner>My Assignment Results</Banner>
            <div className='mt-32 container'>

            </div>
        </div>
    );
};

export default Statistics;