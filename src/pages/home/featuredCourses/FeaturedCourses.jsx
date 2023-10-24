import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../../components/title/Title';
import CourseCard from '../../../shared/courseCard/CourseCard';
import './featuredCourses.css';

// Import Swiper styles
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import useCourses from '../../../hooks/useCourses';

SwiperCore.use([Navigation, Pagination]);

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const FeaturedCourses = () => {
  const { courses, isLoading, isError, error } = useCourses();

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="container mx-auto alpha-container relative mt-10 md:mt-20 px-5 md:px-0">
      <Title title={'Featured Courses'} />

      {/* COURSES SECTION */}
      <div className="">
        <Swiper
          loop={true}
          slidesPerView={3}
          autoplay={true}
          modules={[Pagination, Autoplay]}
          breakpoints={breakpoints}
          className="flex flex-row mt-10 md:pt-5"
        >
          {courses?.map((course, index) => (
            <SwiperSlide key={index} className="md:p-5">
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeaturedCourses;
