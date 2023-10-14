import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
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

const Sponsors = () => {
  const sponsorsList = [
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png',
    },
    {
      imgUrl: 'https://ww1.freelogovectors.net/wp-content/uploads/2023/03/dhaka-university-logo-freelogovectors.net_.png',
    },
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/2a73d2ce-c34a-4e08-8223-83bca9d2f01d-2cc8854c6fee.png',
    },
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/a7e2febc-e366-4b23-9fc3-5659cf53d452-fbcc652f58e1.png',
    },
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/31705519-3082-4c18-aa23-1caf9a038b1c-21ab36bd68bc.png',
    },
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/8554749f-b920-4d7f-8986-af6bb95290aa-f336c6a2ca11.png',
    },
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/0d58600d-bb5f-4036-b222-b770d238331a-f11f10a8cbbc.png',
    },
    {
      imgUrl: 'https://prod-discovery.edx-cdn.org/organization/logos/75831d72-095d-4fa8-9d79-88782a11fe9f-aeea98004d23.png',
    },
  ];

  return (
    <div className="mt-20 flex flex-row justify-center gap-2 items-center">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={true}
        navigation={ true }
        autoplay={true}
        modules={ [ Pagination, Navigation ] }
      >
       {sponsorsList.map((sponsor, index) => (
          <SwiperSlide
            key={index}
          >
           <div>
             <img
              key={index}
              src={sponsor?.imgUrl}
              alt=""
              className="w-32 h-16"
             />
             <p>adfs</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
