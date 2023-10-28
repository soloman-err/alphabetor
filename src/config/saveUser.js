import axios from 'axios';

export const saveUser = async (user) => {
  const currentUser = {
    ...user,
    role: 'user',
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/users/register`,
      currentUser
    );

    console.log('Success:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
