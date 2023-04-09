import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import Category from '../Category/Category';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;