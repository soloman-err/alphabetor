import { FaArrowRight } from 'react-icons/fa';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonSm from '../../../components/buttons/ButtonSm';
import './Hero.css';
SwiperCore.use([Autoplay]);

const bookData = [
  {
    id: 1,
    imageUrl: '/light-beyond.jpg',
    title: 'Fight Back Against Misinformation',
    description:
      'The effort to destroy facts and make America ungovernable didn’t come out of nowhere. In On Disinformation, Lee McIntyre shows how the war on facts began, and how ordinary citizens can fight back against the scourge of disinformation that is now threatening the very fabric of our society.',
  },
  {
    id: 2,
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDsvkGJWN6yExE-026e3qLtU8wdqz9WIhbEo6abk2_kg_RwYu8a8WECx9yd_36LmIRF4&usqp=CAU',
    title: 'From Basics to Advanced Techniques',
    description:
      'Explore the world of data science and analytics. This book covers a wide range of topics, from data preprocessing to machine learning algorithms, making it suitable for beginners and experienced data scientists alike.',
  },
  {
    id: 3,
    imageUrl: '/infive.jpg',
    title: 'Exploring the Mysteries of Quantum Mechanics',
    description:
      'Dive into the fascinating world of quantum mechanics. This book provides a clear and comprehensive overview of quantum physics, discussing its history, key concepts, and current advancements in the field.',
  },
  {
    id: 4,
    imageUrl: '/majesties.jpg',
    title: 'A Journey into the Future of Technology',
    description:
      'Discover the potential and challenges of artificial intelligence. From neural networks to natural language processing, this book explores various aspects of AI, offering insights into its applications and ethical considerations.',
  },
  {
    id: 5,
    imageUrl: 'weather.jpg',
    title: 'Mastering Programming Languages in 12 Weeks',
    description:
      'Embark on a coding journey and become proficient in popular programming languages. This bootcamp-style guide covers essential programming concepts, algorithms, and real-world projects, providing a hands-on learning experience.',
  },
  {
    id: 6,
    imageUrl: 'OMT-cover.png',
    title: 'Mastering Programming Languages in 12 Weeks',
    description:
      'Embark on a coding journey and become proficient in popular programming languages. This bootcamp-style guide covers essential programming concepts, algorithms, and real-world projects, providing a hands-on learning experience.',
  },
  {
    id: 7,
    imageUrl: 'ybird.jpg',
    title: 'Mastering Programming Languages in 12 Weeks',
    description:
      'Embark on a coding journey and become proficient in popular programming languages. This bootcamp-style guide covers essential programming concepts, algorithms, and real-world projects, providing a hands-on learning experience.',
  },
];

const Hero = () => {
  // useEffect(() => {
  //   try {
  //     const swiper = new Swiper('.mySwiper', {
  //       pagination: {
  //         el: '.swiper-pagination',
  //         clickable: true,
  //       },
  //     });
  //   } catch (error) {
  //     console.error('Swiper initialization error:', error);
  //   }
  // }, []);

  return (
    <div className="bg-black py-5 md:py-10 xl:py-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper relative container mx-auto w-full"
      >
        <div className="mx-auto flex flex-row items-center gap-5">
          {bookData.map((book) => (
            <SwiperSlide key={book.id} className="">
              <div className="w-[95%] lg:w-[60%] mx-auto flex flex-co md:flex-row justify-between items-center md:gap-8">
                {/* Book Image */}
                <section className="relative w-full h-full md:w-3/6">
                  <img
                    src={book.imageUrl}
                    alt=""
                    className="w-[100%] -skew-y-2 overflow-hidden z-10 mx-auto"
                  />
                  <div className="absolute -skew-y-2 -z-10 -right-4 -top-0 w-full h-full"></div>
                  {/* <div className="absolute -skew-y-3 -bottom-2 -right-4 h-3 w-full bg-gray-50 z-0"></div> */}
                </section>

                {/* Book Info */}
                <div className="relative text-white p-2 rounded-sm space-y-2 md:space-y-4 w-full">
                  <h2 className="font-bold text-xl md:text-2xl lg:text-5xl">
                    {book.title}
                  </h2>
                  <p className="text-sm md:text-base font-semibold w-[80%] text-start">
                    {book.description.slice(0, 80)}
                  </p>

                  <ButtonSm>
                    Learn More <FaArrowRight />
                  </ButtonSm>

                  {/* <div className="absolute right-2 bottom-2 rotate-45 space-x-1">
                    <span className="bg-black w-[200px] h-[400px] px-1 py-20"></span>
                    <span className="bg-black w-[200px] h-[400px] px-1 py-20"></span>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <span className="swiper-pagination mt-10"></span>
    </div>
  );
};

export default Hero;
