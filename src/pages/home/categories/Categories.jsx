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

  return (
    <section className="alpha-container mt-20">
      {/* SECTION TITLE */}
      <div>
        <Title title={'Alpha Category'} />
      </div>

      {/* CATEGORIES/ROUTES */}
      <div className="mt-10">
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
    </section>
  );
};

export default Categories;
