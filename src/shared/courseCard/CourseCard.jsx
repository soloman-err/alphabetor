import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const {
    id,
    imgURL,
    title,
    description,
    duration,
    instructor,
    category,
    url,
  } = course;

  return (
    <div
      key={id}
      className="w-full md:h-[450px] xl:h-[400px] rounded overflow-hidden shadow-lg bg-gray-50 flex flex-col"
    >
      {/* CARD IMAGE */}
      <div>
        <img src={imgURL} alt={title} className="w-full h-36 object-cover" />
      </div>

      {/* CARD INFO/BODY */}
      <div className="flex flex-col justify-between p-4 text-sm h-full">
        <div className="mt-4">
          <div className="font-bold text-base mb-2">{title}</div>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        <div className="flex flex-col justify-start gap-4 mt-5">
          <div className="">
            <p className="text-start text-gray-600 text-sm">
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p className="text-start text-gray-600 text-sm">
              <span className="font-semibold">Instructor:</span> {instructor}
            </p>
          </div>

          <div className="mt-auto w-full">
            <button className="w-full bg-gray-800 hover:bg-gray-600 text-white font-semibold py-1 md:py2 px-4 rounded-sm">
              <Link
                to={`/courses/:${id}`}
                state={course}
                course={course}
                className="block"
              >
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;