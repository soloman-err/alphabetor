import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveUser } from '../../config/saveUser';
import useAuth from '../../hooks/useAuth';

const RegistrationForm = () => {
  const { createUser, updateUserProfile, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit = async (data) => {
    const {
      email,
      password,
      firstName,
      lastName,
      phone,
      address,
      city,
      state,
      zip,
    } = data;
    console.log("Onsubmit user data:", data);

    try {
      setLoading( true );
      const userResult = await createUser(email, password);
      const user = userResult.user;

      saveUser({
        ...user,
        firstName,
        lastName,
        password,
        phone,
        address,
        city,
        state,
        zip,
      });

      reset();
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Congratulations, You Have Successfully Registered to Alphabetor',
        timer: 1500,
        showConfirmButton: false,
      });

      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Oops... Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-10 bg-gray-100">
      <div className="bg-white rounded-md shadow-lg p-6">
        <h1 className="text-xl text-center font-bold mb-4">
          Register to Alphabetor
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 mt-10"
        >
          <div className="flex flex-col mb-4">
            <label
              htmlFor="firstName"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName', {
                required: 'First Name is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your first name"
            />
            {errors.name && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.name.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="lastName"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName', {
                required: 'Last Name is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.lastName.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="email"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register('email', {
                required: 'Email is required',
                pattern: /^\S+@\S+$/i,
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="e.g.- john@gmail.com"
            />
            {errors.email && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.email.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="phone"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone', {
                required: 'Phone number is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="+880 123 456 789"
            />
            {errors.phone && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.phone.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="password"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              {...register('password', {
                required: 'Password is required',
                minLength: 6,
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.password.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="confirmPassword"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.confirmPassword.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="address"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              {...register('address', {
                required: 'Address is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="Primary address"
            />
            {errors.address && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.address.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="city"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              {...register('city', {
                required: 'City is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="e.g.- Dhaka"
            />
            {errors.city && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.city.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="state"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              State:
            </label>
            <input
              type="text"
              id="state"
              {...register('state', {
                required: 'State is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="e.g.- Dhaka north"
            />
            {errors.state && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.state.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="zip"
              className="text-gray-800 text-sm font-medium mb-2 capitalize"
            >
              ZIP Code:
            </label>
            <input
              type="text"
              id="zip"
              {...register('zip', {
                required: 'ZIP Code is required',
              })}
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="e.g.- 1421"
            />
            {errors.zip && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.zip.message} !
              </span>
            )}
          </div>

          <div className="flex flex-col mb-4">
            <label
              htmlFor="acceptTerms"
              className="flex items-center text-gray-800 text-sm font-medium mb-2"
            >
              <input
                type="checkbox"
                id="acceptTerms"
                {...register('acceptTerms', {
                  required: 'You must accept the Terms & Policy',
                })}
                className="mr-2"
              />
              I accept the Terms & Policy
            </label>
            {errors.acceptTerms && (
              <span className="text-danger text-xs mt-1 font-semibold">
                {errors.acceptTerms.message} !
              </span>
            )}
          </div>

          <button
            type="submit"
            className={`col-span-2 bg-blue-500 bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:scale-95 focus:ring-offset-2 border`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
