import React from 'react';

const ButtonSm = ({ children }) => {
  return (
    <button className="bg-primary py-1 px-3 text-white font-semibold text-sm md:text-base rounded-sm flex flex-row items-center gap-1 hover:scale-105">
      {children}
    </button>
  );
};

export default ButtonSm;
