import BecomeInstructor from './becomeInstructor/BecomeInstructor';
import Categories from './categories/Categories';
import Countdown from './countdown/Countdown';
import FeaturedCourses from './featuredCourses/FeaturedCourses';
import Hero from './hero/Hero';
import NewsLetter from './newsletter/NewsLetter';
import Reviews from './reviews/Reviews';
import Sponsors from './sponsors/Sponsors';

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Sponsors />
      <FeaturedCourses />
      <Countdown/>
      <Categories />
      <BecomeInstructor />
      <Reviews />
      <NewsLetter/>
    </div>
  );
};

export default Home;
