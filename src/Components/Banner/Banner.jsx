import React from 'react';

const Banner = ({children}) => {

    return (
        <div className="py-36 bg-hero-pattern bg-gray-100 bg-no-repeat bg-left-bottom">
            <h2 className='text-center text-2xl font-bold'>{children}</h2>
        </div>
    );
};

export default Banner;