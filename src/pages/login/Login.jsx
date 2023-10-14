import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ID, account } from '../../lib/appwrite';
import { useUser } from '../../lib/context/user';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ name, setName ] = useState();
  const navigate = useNavigate();
  const user = useUser();
  const currentUser = user?.current;
  console.log("From login: ", currentUser);

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
      setLoggedInUser( await account.get() );
      navigate('/')
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
    <section className="max-w-lg mx-auto mt-20 p-5 rounded-sm shadow-md py-10 bg-gray-50">
      <h2 className="text-xl font-bold text-center py-2">Sign In</h2>

      <form className="flex flex-col space-y-2 max-w-sm mx-auto">
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm">
            Email:
          </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 rounded-sm p-1 text-sm"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 rounded-sm p-1 text-sm"
          />
        </div>

        <div className="flex justify-end w-full">
          <button type="button" onClick={() => login(email, password)}>
            Login
          </button>

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
          </button>
        </div>
      </form>

      <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>
    </section>
  );
};

export default Login;
