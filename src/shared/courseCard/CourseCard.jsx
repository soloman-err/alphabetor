import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const { id, imgURL, title, description, duration, instructor, category, url } = course;

  return (
    <div
      key={id}
      className="w-full rounded overflow-hidden shadow-lg border border-cyan-800/20"
    >
      {/* CARD IMAGE */}
      <img src={imgURL} alt={title} className="w-full h-60 object-cover" />

      {/* CARD INFO/BODY */}
      <div className="p-5 text-sm">
        <div className="mt-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Duration:</span> {duration}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Instructor:</span> {instructor}
            </p>
          </div>

          <div className="">
            <Link
              to={url}
              className="bg-sky-400 hover:bg-cyan-600/20 text-white font-bold py-2 px-4 rounded-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
