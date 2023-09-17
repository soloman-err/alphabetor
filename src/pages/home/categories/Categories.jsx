import { Link } from 'react-router-dom';
import Title from '../../../components/title/Title';

const Categories = () => {
  const categories = [
    'Mathematics',
    'Science',
    'History',
    'Literature',
    'Computer Science',
    'Geography',
    'Physics',
    'Chemistry',
    'Biology',
    'Economics',
    'Philosophy',
    'Psychology',
    'Music',
    'Art',
    'Health & Wellness',
    'Language & Linguistics',
    'Business & Finance',
    'Engineering',
    'Political Science',
    'Environmental Science',
  ];

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
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Build mobile apps for iOS and Android using React Native.',
      duration: '8 weeks',
      instructor: 'Michael Johnson',
      imgURL:
        'https://d2ms8rpfqc4h24.cloudfront.net/Features_of_Flutter_for_Mobile_App_Development_9d58ec9c8e.jpg',
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
    },
  ];

  return (
    <section className="alpha-container mt-20">
      {/* SECTION TITLE */}
      <div>
        <Title title={'Alpha Category'} />
      </div>

      {/* CATEGORIES/ROUTES */}
      <div className="mt-5">
        <ul className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <li
              key={index}
              className="font-normal py-1 px-5 bg-cyan-500/10 rounded-sm"
            >
              <button className="cursor-pointer">{category}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* CATEGORY WISE DATA */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        {courses.map((course) => (
          <div
            key={course.id}
            className="w-full rounded overflow-hidden shadow-lg border border-cyan-800/20"
          >
            {/* CARD IMAGE */}
            <img
              src={course?.imgURL}
              alt={course?.title}
              className="w-full h-60 object-cover"
            />

            {/* CARD INFO/BODY */}
            <div className="p-5 text-sm">
              <div className="mt-4">
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-500 text-sm">{course.description}</p>
              </div>

              <div className="flex items-end justify-between mt-4">
                <div>
                  <p className="text-gray-600 text-sm">
                    <span className='font-semibold'>Duration:</span> {course.duration}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className='font-semibold'>Instructor:</span> {course.instructor}
                  </p>
                </div>

                <div className="">
                  <Link
                    to={'/'}
                    className="bg-sky-400 hover:bg-cyan-600/20 text-white font-bold py-2 px-4 rounded-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
