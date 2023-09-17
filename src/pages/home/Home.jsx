import Categories from './categories/Categories';
import FeaturedCourses from './featuredCourses/FeaturedCourses';
import Hero from './hero/Hero';
import Sponsors from './sponsors/Sponsors';

const Home = () => {
  return (
    <div>
      <Hero />
      <Sponsors />
      <Categories />
      <FeaturedCourses />
    </div>
  );
};

export default Home;
