
import Image from 'next/image';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
// import { EffectFade  } from 'swiper/modules';

// import { Navigation, Pagination, Lazy, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';


interface Slide {
  id: number;
  src: string;
  alt: string;
}

const slides: Slide[] = [
  { id: 1, src: '/lagoon1.jpg', alt: 'blue lagoon at mafia island' },
  { id: 2, src: '/coconutBear.jpeg', alt: 'cocnut beer tasting  at mafia island' },
  { id: 3, src: '/chole2.jpg', alt: 'chole at mafia island' },
  { id: 4, src: '/village1.jpg', alt: 'village at mafia island' },
  { id: 5, src: '/coralreef2.jpg', alt: 'coralreef at mafia island' },
  { id: 6, src: '/hippo2.jpg', alt: 'hippo at mafia island' },
  { id: 7, src: '/bat1.jpg', alt: 'bat at mafia island' },
];

const swiperSettings: SwiperProps = {
  modules: [ Autoplay],
  loop: true,
  autoplay: { delay: 6000 },
  spaceBetween:0,
  breakpoints: {
    640: {slidesPerView: 1},
    768: {slidesPerView: 2},
    1024: {slidesPerView: 2},
  },
  speed:800,
  // effect:'fade',//cube, fad, flip etc
  className : " h-full w-full",
  
};

// const swiperSettings: SwiperProps = {
//   modules: [Navigation, Pagination, Lazy, Autoplay],
//   navigation: true,
//   pagination: { clickable: true },
//   lazy: true,
//   loop: true,
//   autoplay: { delay: 4000 },
//   breakpoints: {
//     640: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 },
//   },
//   className: 'w-full h-[60vh]',
// };

export default function SwiperCarousel() {
  return (
    <Swiper {...swiperSettings}>
      {slides.map(({ id, src, alt }) => (
        <SwiperSlide key={id} className='realative w-auto h-full'>
          <Image
            src={src}
            alt={alt}
            loading={ (src === "/lagoon1.jpg") ? 'eager'  : 'lazy'}
            fill
            className="object-cover"
            priority ={ (src === "/lagoon1.jpg") ? true : undefined}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}