import React from 'react';
import './Marquee.css';

const Marquee = () => {
  return (
    <div id='marquee' className="flex justify-center text-center w-full bg-black">
      <marquee
        class="uppercase text-gray-200 text-xl font-bold"
        behavior="scroll"
        direction="left"
        scrollamount="5"
      >
        Alphabetor Exclusive Course Offer! 20% Give Way✨
      </marquee>
    </div>
  );
};

export default Marquee;
