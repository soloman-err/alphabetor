import { Link } from 'react-router-dom';
import ButtonFull from '../../components/buttons/ButtonFull';
import Loading from '../../components/loading/Loading';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const { user, login, loading } = useAuth();

  if (loading) {
    return <Loading/>;
  }

  return (
    <section className="w-[90%] mx-auto md:max-w-md my-20 p-5 rounded-lg shadow-lg py-20 bg-primary/10">
      <h2 className="text-2xl font-bold text-center py-2">Sign In</h2>

      <form
        className="flex flex-col space-y-3 max-w-sm mx-auto"
      >
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
