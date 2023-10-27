import Swal from 'sweetalert2';

// LogOut Controller:
export const handleLogOut = (logOut, navigate) => {
  Swal.fire({
    text: 'Are you sure?',
    icon: 'warning',
    color: '#fff',
    background: '#164b59',
    showCancelButton: true,
    confirmButtonText: 'Logout',
    cancelButtonText: 'Cancel',
  })
    .then(async (response) => {
      if (response.isConfirmed) {
        try {
          await logOut();
          navigate('/login');
        } catch (err) {
          console.error(err);

          Swal.fire({
            text: 'An error occurred while logging out. Please try again!',
            icon: 'error',
            color: '#fff',
            background: '#164b59',
          });
        }
      }
    })
    .catch((error) => {
      console.log(error);

      Swal.fire({
        text: 'An error occurred while logging out. Please try again!',
        icon: 'error',
        color: '#fff',
        background: '#164b59',
      });
    });
};
