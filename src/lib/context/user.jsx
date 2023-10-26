// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { account } from '../appwrite';

// const UserContext = createContext();

// export const useUser = () => {
//   return useContext(UserContext);
// };

// const UserProvider = (props) => {
//   const [user, setUser] = useState();
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Create a new user:
//   const register = async (email, password) => {
//     try {
//       await account.create(email, password);
//       await login(email, password);
//     } catch (error) {
//       setError('Registration failed');
//     }
//   };

//   // User sign-in:
//   const login = async (email, password) => {
//     try {
//       const loggedInUser = await account.createEmailSession(email, password);
//       setUser(loggedInUser);
//     } catch (error) {
//       setError('Invalid email or password');
//     }
//   };

//   const logOut = async () => {
//     try {
//       console.log('Logging out...');
//       await account.deleteSession('current');
//       setUser(null);
//     } catch (error) {
//       console.error('Logout failed', error);
//       setError('Logout failed');
//     }
//   };

//   const clearError = () => {
//     setError(null);
//   };

//   const init = async () => {
//     try {
//       const loggedInUser = await account.get();
//       setUser(loggedInUser);
//     } catch (error) {
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     init();
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{ current: user, login, logOut, register, clearError }}
//     >
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserProvider;
