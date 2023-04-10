import React from 'react';

const Banner = ({children}) => {

    return (
        <div className="md:py-36 py-16 banner-img bg-gray-100 ">
            <h2 className='text-center text-2xl font-bold'>{children}</h2>
        </div>
    );
};

export default Banner;