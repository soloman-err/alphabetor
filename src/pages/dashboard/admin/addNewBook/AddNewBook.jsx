import React, { useState } from 'react';

// Language selection:
const languageOptions = [
  'Bengali',
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Russian',
  'Arabic',
  'Portuguese',
  'Italian',
];

// Currency selection:
const currencyOptions = [
  'BDT',
  'USD',
  'EUR',
  'GBP',
  'JPY',
  'CAD',
  'AUD',
  'INR',
];

const AddNewBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    ISBN10: '',
    ISBN13: '',
    description: '',
    language: '',
    genre: [],
    format: '',
    publisher: '',
    publicationDate: '',
    pages: 0,
    dimensions: {
      height: '',
      width: '',
      thickness: '',
    },
    weight: '',
    availability: false,
    price: 0,
    currency: '',
    coverImage: '',
    reviews: {
      total: 0,
      averageRating: 0,
      highlights: [],
    },
    relatedProducts: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="px-4">
      <div className="border rounded-md p-6 shadow-lg mt-4">
        <h2 className="text-center text-2xl font-semibold pb-2">
          Add New Book
        </h2>
        <hr />

        {/* Add-New-Book-Form */}
        <form onSubmit={handleSubmit} className="">
          {/* Cols */}
          <div className="w-full flex flex-col md:flex-row gap-4 mt-4">
            {/* ----------Col-1---------- */}
            <div className="w-full space-y-4">
              {/* Title */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Book Name"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Author */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  placeholder="Author Name"
                  value={formData.author}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* ISBN10 */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  ISBN10
                </label>
                <input
                  type="text"
                  name="ISBN10"
                  placeholder="Ex- 0062316095"
                  value={formData.ISBN10}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* ISBN-13 */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  ISBN-13
                </label>
                <input
                  type="text"
                  name="ISBN13"
                  placeholder="Ex- 978-0062316097"
                  value={formData.ISBN13}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Genre (Multiple Selection) */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Genres
                </label>
                <input
                  type="text"
                  name="genres"
                  placeholder="Genres"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Format */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Format
                </label>
                <input
                  type="text"
                  name="format"
                  placeholder="Ex- Paperback"
                  value={formData.format}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Publisher */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Publisher
                </label>
                <input
                  type="text"
                  name="publisher"
                  placeholder="Publishers Name"
                  value={formData.publisher}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Language */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Language
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                >
                  <option value="">Select Language</option>
                  {languageOptions.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              {/* Currency */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Currency
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                >
                  <option value="">Select Currency</option>
                  {currencyOptions.map((currency, index) => (
                    <option key={index} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* -----------Col-2----------- */}
            <div className="w-full space-y-4">
              {/* Dimensions */}
              <div className=" grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Height
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.dimensions.height}
                    // onChange={(e) =>
                    //   handleInputChange({
                    //     target: { name: 'height', value: e.target.value },
                    //   })
                    // }
                    className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Width
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={formData.dimensions.width}
                    onChange={(e) =>
                      handleInputChange({
                        target: { name: 'width', value: e.target.value },
                      })
                    }
                    className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">
                    Thickness
                  </label>
                  <input
                    type="number"
                    name="thickness"
                    value={formData.dimensions.thickness}
                    onChange={(e) =>
                      handleInputChange({
                        target: { name: 'thickness', value: e.target.value },
                      })
                    }
                    className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                    required
                  />
                </div>
              </div>

              {/* Pages */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Pages
                </label>
                <input
                  type="number"
                  name="pages"
                  value={formData.pages}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Weight */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Weight
                </label>
                <input
                  type="number"
                  name="weight"
                  placeholder="ounces"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Price */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Cover Image */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Cover Image
                </label>
                <input
                  type="file"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Publication Date */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Publication Date
                </label>
                <input
                  type="date"
                  name="publicationDate"
                  value={formData.publicationDate}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  required
                />
              </div>

              {/* Description */}
              <div className="">
                <label className="block text-sm font-medium text-gray-600">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Write description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 p-2 border rounded w-full bg-gray-200 text-sm focus:outline-none focus:bg-gray-100 focus:border-gray-300"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-[#113C4B] text-white rounded-sm font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewBook;