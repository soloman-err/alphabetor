import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonFull from '../../components/buttons/ButtonFull';
import Loading from '../../components/loading/Loading';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { signIn, loading, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    console.log(email.value, password.value);

    try {
      const result = await signIn(email.value, password.value);
      const loggedUser = result.user;
      console.log(loggedUser);

      Swal.fire({
        text: 'Login successful!',
        icon: 'success',
        color: '#fff',
        background: '#164b59',
      });
      navigate(from, { redirect: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] py-10 bg-gray-100">
      {loading && <Loading />}

      <div className="max-w-sm bg-white rounded-md shadow-lg p-8 w-full">
        <h2 className="text-2xl font-bold text-center py-2">Sign In</h2>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="e.g.- john@gmail.com"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-semibold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              required
              className="border border-gray-400 bg-gray-50 rounded-md py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              placeholder="password"
            />
          </div>

          <div className="flex flex-col text-center w-full">
            <ButtonFull type="submit">Login</ButtonFull>

            <div className="text-sm mt-5 font-semibold">
              <p>Don't have an account?</p>
              <Link to="/register">
                <p className="underline text-indigo-800">Register Now</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
