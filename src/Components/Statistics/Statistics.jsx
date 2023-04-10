import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import MarksAreaChart from '../MarksAreaChart/MarksAreaChart';

const Statistics = () => {
    const assignmentData = useLoaderData();
    return (
        <div>
            <Banner>My Assignment Results</Banner>
            <div className='mt-32 container'>
                <MarksAreaChart assignmentData={assignmentData}></MarksAreaChart>
            </div>
        </div>
    );
};

export default Statistics;