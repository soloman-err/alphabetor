import React from 'react';

const ButtonWide = ({children}) => {
    return (
        <button className='bg-primary py-2 px-10 text-white font-semibold text-sm md:text-base rounded-md'>
            {children}
        </button>
    );
};

export default ButtonWide;