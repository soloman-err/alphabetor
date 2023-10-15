import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useCourses from '../../../hooks/useCourses';
import CourseCard from '../../../shared/courseCard/CourseCard';

const CourseCategory = () => {
  const { courses } = useCourses();
  // console.log(courses);

  const { courseId } = useParams();
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const filteredCourses = courses?.filter(
      (course) => course?.courseId === courseId
    );
    setFilteredCourses(filteredCourses);
  }, [courses, courseId]);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl">{courseId}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 h-full">
        {filteredCourses?.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCategory;
