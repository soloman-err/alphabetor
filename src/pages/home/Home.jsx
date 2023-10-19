import BecomeInstructor from './becomeInstructor/BecomeInstructor';
import Categories from './categories/Categories';
import FeaturedCourses from './featuredCourses/FeaturedCourses';
import Hero from './hero/Hero';

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <Sponsors /> */}
      <FeaturedCourses />
      <Categories />
      <BecomeInstructor />
    </div>
  );
};

export default Home;
