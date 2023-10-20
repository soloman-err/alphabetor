import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '../components/loading/Loading';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col justify-between gap-20">
      <div>
        <Navbar />
        <div className="">
          <Outlet />
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
