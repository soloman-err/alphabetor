import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import useBooksCategory from '../../../../../hooks/useBooksCategory';

const AllBooks = () => {
  const { booksCategory } = useBooksCategory();

  if (!booksCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full space-y-2">
      <div className="flex flex-wrap gap-1">
        {Object.keys(booksCategory)?.map((categoryName) => (
          <Link
            to={`/dashboard/all-books/${categoryName}`}
            state={categoryName}
            key={categoryName}
            className="font-bold capitalize border block w-ful h-full rounded-sm py-1 px-4"
          >
            {categoryName}
          </Link>
        ))}
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AllBooks;