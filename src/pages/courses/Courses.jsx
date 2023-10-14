import useCourses from '../../hooks/useCourses';
import CourseCard from '../../shared/courseCard/CourseCard';

const Courses = () => {
  const { courses, isLoading, isError, error } = useCourses();

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2 mt-10 h-full">
      {courses?.map((course, index) => (
        <div key={index} className="full">
          <CourseCard course={course} />
        </div>
      ))}
    </div>
  );
};

export default Courses;
