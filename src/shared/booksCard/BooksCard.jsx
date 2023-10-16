import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BooksCard = ({ book }) => {
  const {
    id,
    coverImage,
    title,
    description,
    duration,
    instructor,
    category,
    url,
    author,
    price,
  } = book;

  return (
    <div
      key={id}
      className="w-full rounded-sm shadow-md bg-gray-50 flex flex-row p-1 gap-1 hover:scale-95 duration-200"
    >
      {/* CARD IMAGE */}
      <div className="w-1/3">
        <img src={coverImage} alt={title} className="w-full h-40 object-cove" />
      </div>

      {/* CARD INFO/BODY */}
      <div className="flex flex-col justify-between text-sm h-full w-full">
        <div className="space-y-1">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="text-gray-700">
            {description.slice(0, 100)}..{' '}
            <span className="text-blue-800/80 cursor-pointer">Read more</span>
          </p>
          <p className="text-xs font-semibold text-gray-800">by- {author}</p>
        </div>

        <div className="flex justify-between p-1 mt-auto w-full">
          {/* Price */}
          <div>
            <p className="text-lg font-semibold">${price}</p>
          </div>

          <button className="text-black font-bold rounded-sm bg-gray-100 px-2">
            <Link
              to={`/book/${title}`}
              state={book}
              book={book}
              className="flex items-center gap-1 hover:scale-95 duration-100"
            >
              View Details <FaAngleDoubleRight/>
            </Link>
          </button>
        </div>
      </div>

    </div>
  );
};

export default BooksCard;