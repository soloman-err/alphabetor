import React from 'react';

const BadgeSm = ({ children }) => {
  return (
    <div className="animate-pulse absolute top-2 right-2 text-xs py-1 px-4 text-black font-bold rounded-full bg-yellow-400">
      {children}
    </div>
  );
};

export default BadgeSm;
