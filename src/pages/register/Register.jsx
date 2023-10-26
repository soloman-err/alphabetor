import { FaUserGraduate, FaUserTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BadgeSm from '../../components/badges/BadgeSm';
import ButtonRound from '../../components/buttons/ButtonRound';

const Register = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-around">
      <div className="md:h-[60vh] md:w-full rounded-lg m-5 bg-primary/5 text-center flex flex-col justify-center items-center p-5 md:p-10">
        <div className="relative w-fit mx-auto text-center flex flex-col justify-center hover:scale-110 duration-300 items-center bg-primary/90 p-10 text-white rounded-md space-y-5">
          <BadgeSm>Student</BadgeSm>
          <FaUserGraduate size={70} />
          <Link to={'/api/users/register/student'}>
            <ButtonRound>Register as a student</ButtonRound>
          </Link>
          <div className="space-y-2 text-sm font-bold">
            <p>Already have an account?</p>
            <Link to={'/login'} className="underline text-indigo-200">
              Login here
            </Link>
          </div>
        </div>
      </div>

      <div className="md:h-[60vh] md:w-full rounded-lg m-5 bg-primary/5 text-center flex flex-col justify-center items-center p-5 md:p-10">
        <div className="relative w-fit mx-auto text-center flex flex-col justify-center hover:scale-110 duration-300 items-center bg-primary/90 p-10 text-white rounded-md space-y-5">
          <BadgeSm>Teacher</BadgeSm>
          <FaUserTie size={70} />
          <Link to={'/api/users/register/teacher'}>
            <ButtonRound className="">Register as a teacher</ButtonRound>
          </Link>
          <div className="space-y-2 text-sm font-bold">
            <p>Already have an account?</p>
            <Link to={'/login'} className="underline text-indigo-200">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
