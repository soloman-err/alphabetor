import React from 'react';

const ButtonRound = ({ children }) => {
  return (
    <button className="bg-primary py-1 px-5 text-white font-bold text-sm md:text-base capitalize rounded-full flex flex-row items-center gap-1 hover:scale-105">
      {children}
    </button>
  );
};

export default ButtonRound;