import { useQuery } from 'react-query';

const fetchCourses = async () => {
  const response = await fetch('/courses.json');
  if (!response.ok) {
    throw new Error('Network response was not ok.');
  }
  return response.json();
};

const useCourses = () => {
  const {
    data: courses,
    isLoading,
    isError,
    error,
  } = useQuery('courses', fetchCourses);

  return { courses, isLoading, isError, error };
};

export default useCourses;