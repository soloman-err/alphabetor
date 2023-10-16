import React from 'react';
import {
  FaCartPlus,
  FaRegHeart,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from 'react-icons/fa';
import Rating from 'react-rating';
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
    reviews,
    weight,
    language,
    publicationDate,
    ISBN10,
    ISBN13,
    currency,
    format,
    dimensions,
  } = book;

  return (
    <div className="container mx-auto mt-10 h-full w-[95%] space-y-2">
      {/* Book Feature */}
      <div className="lg:w-[60%] mx-auto flex flex-col md:flex-row gap-4 p-2 border rounded-sm shadow-md text-sm bg-white/80">
        {/* Book Image */}
        <div className="md:w-1/4 h-full">
          <img
            src={coverImage}
            alt={title}
            className="w-full md:w-full md:h-[400px] rounded-sm md:object-cover"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col justify-between md:w-3/4">
          <div className="flex flex-col space-y-2">
            <div className="space-y-1">
              <h2 className="md:text-3xl lg:text-4xl font-bold">{title}</h2>
              <h4 className="">
                by <span className="font-semibold text-blue-800">{author}</span>
              </h4>

              {/* Ratings & Reviews */}
              <div className=" flex flex-row items-center gap-1">
                <span>
                  <Rating
                    placeholderRating={reviews?.averageRating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                    className="text-amber-500"
                  />
                </span>
                |<span>{reviews?.total} Reviews</span>
              </div>
            </div>

            {/* Highlights */}
            <div className="">
              <span className="underline font-semibold">Highlights:</span>
              <ol className="ms-2">
                <li className="text-black/70">
                  Language: <span className="text-black">{language}</span>
                </li>
                <li className="text-black/70">
                  Published:{' '}
                  <span className="text-black">{publicationDate}</span>
                </li>
                <li className="text-black/70">
                  Weight: <span className="text-black">{weight}</span>
                </li>
              </ol>
            </div>

            {/* Genre */}
            <div className="flex flex-col text-start gap-1 justify-between ">
              <p className="">
                <span className="font-semibold">Publisher: </span>
                {publisher}
              </p>
              <p className="">
                <span className="font-semibold">Category: </span>
                {genre}
              </p>
              <p className="">
                <span className="font-semibold">ISBN: </span>
                {ISBN10}, {ISBN13}
              </p>
            </div>

            <hr />

            {/* Short Desc */}
            <div>
              <h2 className="font-semibold">Desc:</h2>
              <p className="text-gray-800">
                {description.slice(0, 150)}... Read more
              </p>
            </div>
          </div>

          {/* Cart Options */}
          <div className="flex flex-col md:flex-row items-center gap-2 w-full mt-4">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-start w-full md:w-fit">
              <button className="flex items-center gap-1 text-center justify-center bg-[#FFAD33] border border-[#FFAD33] text-white font-semibold py-2 px-6 rounded-sm focus:outline-none focus:shadow-outline w-full md:w-fit hover:scale-95 duration-200">
                <FaCartPlus size={18} />{' '}
                <span className="block">Add to Cart</span>
              </button>
              <button className="flex items-center gap-1 text-center justify-center border bg-gray-50 font-semibold py-2 px-6 rounded-sm w-full md:w-fit hover:scale-95 duration-200">
                <FaRegHeart size={18} />{' '}
                <span className="block">Add to List</span>
              </button>
            </div>

            {/* Share */}
            <div className="border p-2 w-full md:w-fit bg-gray-50 px-4">
              <button className="flex flex-row items-center justify-center gap-2 hover:scale-95 duration-200">
                <FaShareAlt /> Share This Book
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Summary & Specification */}
      <div className="lg:w-[60%] mx-auto flex flex-col gap-4 p-2 border rounded-sm shadow-md text-sm bg-white/80">
        <h2 className="font-semibold block">Specification:</h2>
        <hr />
        {/* Spec Table */}
        <div>
          <table className="flex flex-row justify-start gap- w-full">
            {/* Table Head */}
            <thead>
              <tr className="flex flex-col justify-start space-y-1">
                <th className="bg-gray-100 p-1 w-full text-start">Title</th>
                <th className="bg-gray-100 p-1 w-full text-start">Publisher</th>
                <th className="bg-gray-100 p-1 w-full text-start">Currency</th>
                <th className="bg-gray-100 p-1 w-full text-start">Format</th>
                <th className="bg-gray-100 p-1 w-full text-start">
                  Total Page
                </th>
                <th className="bg-gray-100 p-1 w-full text-start">
                  Dimensions
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="w-full">
              <tr className="flex flex-col text-start justify-start space-y-1">
                <td className="bg-gray-50 p-1 w-full">{pages}p</td>
                <td className="bg-gray-50 p-1 w-full">{publisher}</td>
                <td className="bg-gray-50 p-1 w-full">{currency}</td>
                <td className="bg-gray-50 p-1 w-full">{format}</td>
                <td className="bg-gray-50 p-1 w-full">{pages} ~ p</td>
                <td className="bg-gray-50 p-1 w-full">
                  <span>
                    {dimensions?.height} * {dimensions?.width} *{' '}
                    {dimensions?.thickness}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
