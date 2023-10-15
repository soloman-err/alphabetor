import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../../components/title/Title';
import useBooksCategory from '../../../hooks/useBooksCategory';
import BooksCard from '../../../shared/booksCard/booksCard';

const BooksCategory = () => {
  const { booksId } = useParams();
  const [filteredBooksCategory, setFilteredBooksCategory] = useState([]);
  const { booksCategory, isLoading, isError, error } = useBooksCategory();

  useEffect(() => {
    if (booksId && booksCategory && booksCategory[booksId]) {
      setFilteredBooksCategory(booksCategory[booksId]);
    } else {
      // Handle invalid category or booksId here
      setFilteredBooksCategory([]);
    }
  }, [booksId, booksCategory]);

  return (
    <div className="container mx-auto mt-5">
      <Title title={`${booksId}`} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error?.message || 'Something went wrong.'}</p>}
      {!isLoading && !isError && filteredBooksCategory.length === 0 && (
        <p>No books found for this category.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 h-full">
        {filteredBooksCategory?.map((book, index) => (
          <BooksCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksCategory;
