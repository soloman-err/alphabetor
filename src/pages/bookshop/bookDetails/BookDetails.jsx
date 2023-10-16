import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const book = location.state;
  const {
    coverImage,
    title,
    author,
    description,
    price,
    pages,
    publisher,
    genre,
  } = book;

  return (
    <div className="container mx-auto mt-5 h-full">
      <div className="flex justify-center gap-2 items-center p-2">
        <div className="h-full bg-gray-300">
          <img src={coverImage} alt={title} className="h-full object-cover" />
        </div>

        <div className="">
          <h1 className="text-3xl font-bold">{title}</h1>
          <h2 className="text-gray-700 mb-4 text-sm">
            by <span className="font-semibold text-blue-800">{author}</span>
          </h2>
          <p>
            <span>{genre}</span>
          </p>
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600">{pages} pages</div>
          </div>
          <div className="text-gray-700 mb-6">Published by {publisher}</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
