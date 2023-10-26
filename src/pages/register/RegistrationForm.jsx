import axios from 'axios';
import React, { useState } from 'react';

const RegistrationForm = ({ role }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    acceptTerms: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/${role}`, formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-10 bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          {Object?.entries(formData)?.map(([name, value]) => (
            <div key={name} className="flex flex-col">
              {name !== 'acceptTerms' ? (
                <label
                  htmlFor={name}
                  className="text-gray-700 font-medium mb-2 capitalize"
                >
                  {name === 'password'
                    ? 'Password'
                    : name === 'confirmPassword'
                    ? 'Confirm Password'
                    : name === 'firstName'
                    ? 'First Name'
                    : name === 'lastName'
                    ? 'Last Name'
                    : name}
                  :
                </label>
              ) : null}
              {name !== 'acceptTerms' ? (
                <input
                  type={
                    name === 'password' || name === 'confirmPassword'
                      ? 'password'
                      : 'text'
                  }
                  id={name}
                  name={name}
                  value={value}
                  onChange={handleChange}
                  required
                  className={`border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm`}
                  placeholder={`${
                    name === 'confirmPassword'
                      ? 'confirm password'
                      : name === 'firstName'
                      ? 'first name'
                      : name === 'lastName'
                      ? 'last name'
                      : name
                  }`}
                />
              ) : null}
            </div>
          ))}

          <div className="mt-4">
            <label htmlFor="acceptTerms" className="flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData?.acceptTerms}
                onChange={handleChange}
                className="mr-2"
              />
              <span className="text-gray-700 text-sm">
                I accept the terms and policy
              </span>
            </label>
          </div>

          <button
            type="submit"
            className={`col-span-2 bg-blue-500 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:scale-95 focus:ring-offset-2 ${
              !formData?.acceptTerms && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!formData?.acceptTerms}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
