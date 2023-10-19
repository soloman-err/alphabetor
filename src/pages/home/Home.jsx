import BecomeInstructor from './becomeInstructor/BecomeInstructor';
import Categories from './categories/Categories';
import FeaturedCourses from './featuredCourses/FeaturedCourses';
import Hero from './hero/Hero';
import Reviews from './reviews/Reviews';

const Home = () => {
  return (
    <div className="">
      <Hero />
      {/* <Sponsors /> */}
      <FeaturedCourses />
      <Categories />
      <BecomeInstructor />
      <Reviews/>
    </div>
  );
};

export default Home;
