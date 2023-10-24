import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ButtonFull from '../../components/buttons/ButtonFull';
import { account } from '../../lib/appwrite';
import { useUser } from '../../lib/context/user';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState();
  const navigate = useNavigate();
  const user = useUser();
  const currentUser = user?.current;
  console.log('From login: ', currentUser);

  // const user = useUser();
  //   console.log( 'From Login: ', email, password, user );

  //   const handleLogin = () => {
  //     user.login(email, password);
  //   };

  async function login(email, password) {
    try {
      // const response = await account.createEmailSession(email, password);
      // setLoggedInUser(response);

      await account.createEmailSession(email, password);
      setLoggedInUser(await account.get());
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  async function handleRegistration() {
    if (!email || !password) {
      console.error('Email and password are required.');
      return;
    }
    console.log('Registration Handler: ', email, password);

    try {
      const response = await user.register(email, password);
      console.log('Registration successful:', response);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <section className="w-[90%] mx-auto md:max-w-lg my-20 p-5 rounded-lg shadow-lg py-10 bg-primary/10">
      <h2 className="text-2xl font-bold text-center py-2">Sign In</h2>

      <form className="flex flex-col space-y-3 max-w-sm mx-auto">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-semibold">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white rounded-md p-2 text-sm focus:outline-none focus:scale-105"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm font-semibold">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white rounded-md p-2 text-sm focus:outline-none focus:scale-105"
          />
        </div>

        <div className="flex flex-col text-center w-full">
          <ButtonFull type="button" onClick={() => login(email, password)}>
            Login
          </ButtonFull>
          {/* 
          <button
            type="button"
            onClick={async () => {
              await account.create(ID.unique(), email, password, name);
              login(email, password);
            }}
          >
            Register
          </button>

          <button
            type="button"
            onClick={async () => {
              await account.deleteSession('current');
              setLoggedInUser(null);
            }}
          >
            Logout
          </button> */}
          <div className="text-sm mt-5 font-semibold">
            <p>Don't have an account?</p>
            <Link to={'/register'}>
              <p className="underline text-indigo-800">Register Now</p>
            </Link>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Login;
