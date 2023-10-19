import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-primary py-2 px-4 text-white font-semibold text-sm md:text-base rounded-md flex flex-row items-center gap-2">
      {children}
    </button>
  );
};

export default Button;
