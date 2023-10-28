export const saveUser = async (user) => {
  const currentUser = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    city: user?.city,
    state: user?.state,
    zip: user?.zip,
  };

  console.log('From saveUser', currentUser);

  try {
    const response = await fetch(
      // `${import.meta.env.VITE_SERVER_URL}/users/register`,
      `http://localhost:2000/users/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(currentUser),
      }
    );

    if (!response.ok) {
      throw new Error(
        `Network response was not ok - Status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
};
