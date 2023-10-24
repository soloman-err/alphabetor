import React from 'react';

const ButtonFull = ({ children }) => {
  return (
    <button className="w-full bg-primary py-2 text-white my-2 font-bold md:text-base rounded-md flex flex-row items-center gap-1 hover:scale-95 text-center justify-center">
      {children}
    </button>
  );
};

export default ButtonFull;