import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const location = useLocation();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    setCourseDetails(location.state);
  }, [location]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  const {
    title,
    description,
    duration,
    instructor,
    imgURL,
    category,
    level,
    language,
    prerequisites,
    certification,
    fees,
    startDate,
    support,
    tools,
  } = courseDetails;
  console.log(tools);

  const detailsArray = [
    { label: 'Duration', value: duration },
    { label: 'Instructor', value: instructor },
    { label: 'Category', value: category },
    { label: 'Level', value: level },
    { label: 'Language', value: language },
    { label: 'Prerequisites', value: prerequisites },
    { label: 'Certification', value: certification },
    { label: 'Fees', value: fees },
    { label: 'Start Date', value: startDate },
    { label: 'Support', value: support },
    { label: 'Tools', value: tools },
  ];

  return (
    <div className="w-[90%] md:w-[80%] xl:w-[60%] mx-auto flex flex-col justify-betwee gap-5 mt-10 p-2 bg-white/60 shadow-sm rounded-sm">
      <img
        src={imgURL}
        alt="Course Preview"
        className="rounded-sm w-full object-cover"
      />

      {/* Course Info */}
      <div className="flex flex-col justify-between w-full space-y-4">
        <div className="flex flex-col gap-5 justify-between w-full">
          {/* Heading Info */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
              <p className="text-sm">
                by{' '}
                <span className="font-semibold underline cursor-pointer">
                  {instructor}
                </span>
              </p>
            </div>
            <div>
              <button className="bg-cyan-800 text-white font-semibold py-1 px-8 rounded-sm text-sm">
                {'Enroll'}
              </button>
            </div>
          </div>

          <hr />

          {/* Body Info */}
          <div className="text-sm">
            <p className="mb-4">{description}</p>

            {detailsArray.map((item, index) => (
              <p key={index} className="">
                <span className="font-semibold">{item.label}: </span>{' '}
                {item.value}
              </p>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          <span className="text-xs font-semibold bg-gray-300 p-1 rounded-sm">
            Data Science
          </span>
          <span className="text-xs font-semibold bg-gray-300 p-1 rounded-sm">
            Blockchain
          </span>
          <span className="text-xs font-semibold bg-gray-300 p-1 rounded-sm">
            Crypto
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
