import Title from '../../../components/title/Title';
import CourseCard from '../../../shared/courseCard/CourseCard';

const FeaturedCourses = () => {
  // COURSES:
const courses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description:
      'Learn web development from scratch with HTML, CSS, and JavaScript.',
    duration: '12 weeks',
    instructor: 'John Doe',
    imgURL:
      'https://images.ctfassets.net/spoqsaf9291f/6BnVelGnDD08LAdGklwrI0/4243e2c700c7cfbbafe451bdb7212663/Hero.png',
    category: 'Computer Science',
    url: '/courses/web-development',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description:
      'Master data analysis and visualization with Python and data science tools.',
    duration: '10 weeks',
    instructor: 'Jane Smith',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QbmRVE0aH1218f1Z3l7W5J45Yi5PhNZcqQ&usqp=CAU',
    category: 'Data Science',
    url: '/courses/data-science-fundamentals',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description:
      'Build mobile apps for iOS and Android using React Native.',
    duration: '8 weeks',
    instructor: 'Michael Johnson',
    imgURL:
      'https://d2ms8rpfqc4h24.cloudfront.net/Features_of_Flutter_for_Mobile_App_Development_9d58ec9c8e.jpg',
    category: 'Mobile Development',
    url: '/courses/mobile-app-development',
  },
  {
    id: 4,
    title: 'Machine Learning Essentials',
    description:
      'Explore the fundamentals of machine learning and artificial intelligence.',
    duration: '14 weeks',
    instructor: 'Emily Brown',
    imgURL:
      'https://cdn.britannica.com/40/216540-138-14385CFE/How-machine-learning-is-predicting-synthetic-products.jpg?w=800&h=450&c=crop',
    category: 'Machine Learning',
    url: '/courses/machine-learning-essentials',
  },
  // Add more courses with the 'url' property as needed...
];


  return (
    <section className="alpha-container mt-20">
      <Title title={'Featured Courses'} />

      {/* COURSES SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
