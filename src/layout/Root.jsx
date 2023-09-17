import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const Root = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div>
        <Navbar />
        <div className="">
          <Outlet />
        </div>
      </div>
      
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  );
};
export default Root;
