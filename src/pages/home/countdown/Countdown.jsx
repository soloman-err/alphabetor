import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [stats, setStats] = useState([
    { label: 'Expert Instructors', target: 20, current: 0 },
    { label: 'Foreign Followers', target: 5425, current: 0 },
    { label: 'Students Enrolled', target: 972, current: 0 },
    { label: 'Years of Experience', target: 7, current: 0 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) =>
          stat.current < stat.target
            ? { ...stat, current: stat.current + Math.ceil(stat.target / 100) }
            : stat
        )
      );
    }, );

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-primary/95 text-white mt-10 md:mt-20 py-2 lg:py-20">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-center gap-5 md:gap-10 p-8 lg:px-20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-10 bg-primary/70 rounded-md shadow-xl md:w-[80%] mx-auto">
            <h2 className="text-4xl lg:text-5xl  font-bold mb-2 stat-number">
              {stat.current.toLocaleString()}
            </h2>
            <p className="text-sm md:text-base font-semibold md:font-bold text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Countdown;
