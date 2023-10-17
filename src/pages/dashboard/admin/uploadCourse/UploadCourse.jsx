import React, { useState } from 'react';

const UploadCourse = () => {
  const [formData, setFormData] = useState({
    courseId: '',
    title: '',
    description: '',
    duration: '',
    instructor: '',
    imgURL: '',
    category: '',
    url: '',
    level: '',
    language: '',
    prerequisites: '',
    certification: '',
    fees: '',
    startDate: '',
    support: '',
    tools: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to API)
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md my-4">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Upload New Course
      </h2>

      <hr />

      <form onSubmit={handleSubmit} className="mt-4">
        {/* Course ID */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Course ID
          </label>
          <input
            type="text"
            name="courseId"
            value={formData.courseId}
            onChange={handleInputChange}
            placeholder="Enter Course ID"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter Course Title"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Duration
          </label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="Enter Course Duration"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* Instructor */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Instructor
          </label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleInputChange}
            placeholder="Enter Instructor Name"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Image URL
          </label>
          <input
            type="text"
            name="imgURL"
            value={formData.imgURL}
            onChange={handleInputChange}
            placeholder="Enter Image URL"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Enter Course Category"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* URL */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">URL</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleInputChange}
            placeholder="Enter Course URL"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
            required
          />
        </div>

        {/* Level */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Level
          </label>
          <input
            type="text"
            name="level"
            value={formData.level}
            onChange={handleInputChange}
            placeholder="Enter Course Level"
            className="mt-1 p-2 border rounded w-full bg-gray-100"
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
            placeholder="Enter Course Description"
            className="mt-1 p-2 border rounded w-full h-24 bg-gray-100"
            required
          />
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
  );
};

export default UploadCourse;
