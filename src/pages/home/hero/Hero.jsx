import { FaArrowRight } from 'react-icons/fa';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Autoplay]);

const bookData = [
  {
    id: 1,

    imageUrl: '/light-beyond.jpg',
    title:
      'On Disinformation: How to Fight Back Against Misinformation and Fake News',
    description:
      'The effort to destroy facts and make America ungovernable didn’t come out of nowhere. In On Disinformation, Lee McIntyre shows how the war on facts began, and how ordinary citizens can fight back against the scourge of disinformation that is now threatening the very fabric of our society.',
  },
  {
    id: 2,
    imageUrl:
      'https://gatekeeperpress.com/wp-content/uploads/image8-207x300.jpg',
    title: 'Data Science: From Basics to Advanced Techniques',
    description:
      'Explore the world of data science and analytics. This book covers a wide range of topics, from data preprocessing to machine learning algorithms, making it suitable for beginners and experienced data scientists alike.',
  },
  {
    id: 3,
    imageUrl: '/infive.jpg',
    title: 'The Quantum Universe: Exploring the Mysteries of Quantum Mechanics',
    description:
      'Dive into the fascinating world of quantum mechanics. This book provides a clear and comprehensive overview of quantum physics, discussing its history, key concepts, and current advancements in the field.',
  },
  {
    id: 4,
    imageUrl: '/majesties.jpg',
    title: 'Artificial Intelligence: A Journey into the Future of Technology',
    description:
      'Discover the potential and challenges of artificial intelligence. From neural networks to natural language processing, this book explores various aspects of AI, offering insights into its applications and ethical considerations.',
  },
  {
    id: 5,
    imageUrl: 'weather.jpg',
    title: 'The Coding Bootcamp: Mastering Programming Languages in 12 Weeks',
    description:
      'Embark on a coding journey and become proficient in popular programming languages. This bootcamp-style guide covers essential programming concepts, algorithms, and real-world projects, providing a hands-on learning experience.',
  },
  {
    id: 6,
    imageUrl: 'OMT-cover.png',
    title: 'The Coding Bootcamp: Mastering Programming Languages in 12 Weeks',
    description:
      'Embark on a coding journey and become proficient in popular programming languages. This bootcamp-style guide covers essential programming concepts, algorithms, and real-world projects, providing a hands-on learning experience.',
  },
  {
    id: 7,
    imageUrl: 'ybird.jpg',
    title: 'The Coding Bootcamp: Mastering Programming Languages in 12 Weeks',
    description:
      'Embark on a coding journey and become proficient in popular programming languages. This bootcamp-style guide covers essential programming concepts, algorithms, and real-world projects, providing a hands-on learning experience.',
  },
];

const Hero = () => {
  return (
    <div className="bg-gray-950 py-20">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
        }}
        // navigation={ true }
        // pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="container mx-auto w-full"
      >
        <div className="mx-auto flex flex-row items-center gap-5">
          {bookData.map((book) => (
            <SwiperSlide key={book.id} className="">
              <div className="w-[80%] lg:w-[60%] mx-auto flex flex-row items-center gap-8">
                {/* Book Image */}
                <section className="relative w-full">
                  <img
                    src={book.imageUrl}
                    alt=""
                    className="w-[200px] md:w-[350px] -skew-y-2 overflow-hidden z-10"
                  />
                  <div className="absolute skew-y-12 -right-4 -top-0 w-4 h-full bg-gray-50"></div>
                  <div className="absolute -skew-y-3 -bottom-2 -right-4 h-3 w-full bg-gray-50 z-0"></div>
                </section>

                {/* Book Info */}
                <div className="relative overflow-hidden bg-gray-100 text-black p-5 rounded-sm space-y-4">
                  <h2 className="font-bold text-xl">{book.title}</h2>
                  <p className="text-sm font-semibold text-gray-600">
                    {book.description}
                  </p>

                  <button className="flex items-center gap-2">
                    Learn More <FaArrowRight />
                  </button>

                  <div className="absolute right-2 bottom-2 rotate-45 space-x-1">
                    <span className="bg-black w-[200px] h-[400px] px-1 py-20"></span>
                    <span className="bg-black w-[200px] h-[400px] px-1 py-20"></span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
