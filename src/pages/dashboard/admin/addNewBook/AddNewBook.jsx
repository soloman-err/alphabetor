import React, { useState } from 'react';

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
    <div className="max-w-4xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="border rounded-md p-2 shadow-lg">
        <h2 className="text-center text-2xl font-semibold pb-2">
          Add New Book
        </h2>
        <hr />

        {/* Title */}
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Author */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* ISBN10 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            ISBN10
          </label>
          <input
            type="text"
            name="ISBN10"
            value={formData.ISBN10}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* ISBN-13 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            ISBN-13
          </label>
          <input
            type="text"
            name="ISBN13"
            value={formData.ISBN13}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Language */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Language
          </label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Genre (Multiple Selection) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Genre
          </label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            multiple
            required
          >
            <option value="Technology">Technology</option>
            <option value="History of Technology">History of Technology</option>
            {/* Add more genre options as needed */}
          </select>
        </div>

        {/* Format */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Format
          </label>
          <input
            type="text"
            name="format"
            value={formData.format}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Publisher */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Publisher
          </label>
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Publication Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Publication Date
          </label>
          <input
            type="text"
            name="publicationDate"
            value={formData.publicationDate}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Pages */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Pages
          </label>
          <input
            type="number"
            name="pages"
            value={formData.pages}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Dimensions */}
        <div className="mb-4 grid grid-cols-3 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Height
            </label>
            <input
              type="text"
              name="height"
              value={formData.dimensions.height}
              onChange={(e) =>
                handleInputChange({
                  target: { name: 'height', value: e.target.value },
                })
              }
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Width
            </label>
            <input
              type="text"
              name="width"
              value={formData.dimensions.width}
              onChange={(e) =>
                handleInputChange({
                  target: { name: 'width', value: e.target.value },
                })
              }
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Thickness
            </label>
            <input
              type="text"
              name="thickness"
              value={formData.dimensions.thickness}
              onChange={(e) =>
                handleInputChange({
                  target: { name: 'thickness', value: e.target.value },
                })
              }
              className="mt-1 p-2 border rounded w-full"
              required
            />
          </div>
        </div>

        {/* Weight */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Weight
          </label>
          <input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Availability
          </label>
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                availability: e.target.checked,
              }))
            }
            className="mt-1"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Currency */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Currency
          </label>
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Cover Image */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Cover Image
          </label>
          <input
            type="text"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleInputChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Reviews (Total, Average Rating, Highlights) */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Total Reviews
          </label>
          <input
            type="number"
            name="totalReviews"
            value={formData.reviews.total}
            onChange={(e) =>
              handleInputChange({
                target: { name: 'total', value: e.target.value },
              })
            }
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Average Rating
          </label>
          <input
            type="number"
            name="averageRating"
            value={formData.reviews.averageRating}
            onChange={(e) =>
              handleInputChange({
                target: { name: 'averageRating', value: e.target.value },
              })
            }
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Highlights
          </label>
          <textarea
            name="highlights"
            value={formData.reviews.highlights.join('\n')}
            onChange={(e) =>
              handleInputChange({
                target: {
                  name: 'highlights',
                  value: e.target.value.split('\n'),
                },
              })
            }
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Related Products */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Related Products
          </label>
          <input
            type="text"
            name="relatedProducts"
            value={formData.relatedProducts
              .map((product) => `${product.title} (${product.ISBN13})`)
              .join('\n')}
            onChange={(e) =>
              handleInputChange({
                target: {
                  name: 'relatedProducts',
                  value: e.target.value.split('\n'),
                },
              })
            }
            className="mt-1 p-2 border rounded w-full"
            rows="4"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewBook;
