import React from 'react';
import useBooksCategory from '../../hooks/useBooksCategory';
import BooksCard from '../../shared/booksCard/booksCard';

const Bookshop = () => {
    const { booksCategory, isLoading, isError, error } = useBooksCategory();
    // console.log(booksCategory);

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 px-2 mt-10 h-full">
      {booksCategory?.children?.map((book, index) => (
        <div key={index} className="full">
          <BooksCard book={book} />
        </div>
      ))}
    </div>
  );
};

export default Bookshop;