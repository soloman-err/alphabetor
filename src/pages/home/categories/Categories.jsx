import { Link } from 'react-router-dom';
import Title from '../../../components/title/Title';

const Categories = () => {
  const categories = [
    {
      name: 'Mathematics',
      to: '/mathematics',
    },
    {
      name: 'Science',
      to: '/science',
    },
    {
      name: 'History',
      to: '/history',
    },
    {
      name: 'Literature',
      to: '/literature',
    },
    {
      name: 'Computer Science',
      to: '/computer-science',
    },
    {
      name: 'Geography',
      to: '/geography',
    },
    {
      name: 'Physics',
      to: '/physics',
    },
    {
      name: 'Chemistry',
      to: '/chemistry',
    },
    {
      name: 'Biology',
      to: '/biology',
    },
    {
      name: 'Economics',
      to: '/economics',
    },
    {
      name: 'Philosophy',
      to: '/philosophy',
    },
    {
      name: 'Psychology',
      to: '/psychology',
    },
    {
      name: 'Music',
      to: '/music',
    },
    {
      name: 'Art',
      to: '/art',
    },
    {
      name: 'Health & Wellness',
      to: '/health-wellness',
    },
    {
      name: 'Language & Linguistics',
      to: '/language-linguistics',
    },
    {
      name: 'Business & Finance',
      to: '/business-finance',
    },
    {
      name: 'Engineering',
      to: '/engineering',
    },
    {
      name: 'Political Science',
      to: '/political-science',
    },
    {
      name: 'Environmental Science',
      to: '/environmental-science',
    },
  ];

  return (
    <section className="container mx-auto alpha-container mt-20">
      {/* SECTION TITLE */}
      <div>
        <Title title={'New on Alphabetor'} />
      </div>

      {/* CATEGORIES/ROUTES */}
      <div className="mt-10">
        <ul className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <li
              key={index}
              className="font-normal py-1 px-5 bg-cyan-500/10 rounded-sm"
            >
              <Link to={category?.to} className="cursor-pointer">
                {category?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
