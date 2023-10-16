import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import Title from '../../../../../../components/title/Title';
import useBooksCategory from '../../../../../../hooks/useBooksCategory';

const BookCategory = () => {
  const { booksCategory } = useBooksCategory();
  const location = useLocation();
  const categoryName = location?.state;
  const categoryBooks = booksCategory[categoryName];

  if (!categoryName || !booksCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <Title title={categoryName} />
        <span className="font-semibold px-1">
          Total books - {categoryBooks?.length}
        </span>
      </div>

      {/* All Books List/Tabular Format */}
      <div className="mt-5 w-full">
        <table className="border w-full">
          <thead className="">
            <tr className="bg-black/80">
              <th className="py-2 px-4 font-semibold text-left">Book Name</th>
              <th className="py-2 px-4 font-semibold text-left">Author</th>
              <th className="py-2 px-4 font-semibold text-center">Status</th>
            </tr>
          </thead>
          <tbody className="">
            {categoryBooks?.map((book, index) => (
              <tr
                key={index}
                className={`text-sm ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="font-semibold p-2 border-b">{book?.title}</td>
                <td className="p-2 border-b">{book?.author}</td>
                <td className="flex items-center justify-around p-2 border-b">
                  <button className="pt-2 text-blue-800/80">
                    <FaEdit size={18} />
                  </button>
                  <button className="pt-2 text-red-600/60">
                    <FaTrashAlt size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookCategory;
