import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetails = () => {
  const location = useLocation();
  const book = location.state;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-64 h-96 object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
        <h2 className="text-gray-700 mb-4">By {book.author}</h2>
        <p className="text-gray-600 mb-6">{book.description}</p>
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold text-gray-800">${book.price}</div>
          <div className="text-gray-600">{book.pages} pages</div>
        </div>
        <div className="text-gray-700 mb-6">Published by {book.publisher}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded focus:outline-none focus:shadow-outline">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default BookDetails;