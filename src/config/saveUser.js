export const saveUser = (user) => {
  const currentUser = {
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
    phone: user?.phone,
    address: user?.address,
    city: user?.city,
    state: user?.state,
    zip: user?.zip,
    role: 'user',
  };
  console.log(currentUser);

  fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Network response was not ok - Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error.message));
};
