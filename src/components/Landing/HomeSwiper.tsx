import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { HomeSwiperImages } from "../../constant/Home.data";

const HomeSwiper = () => {
  return (
    <div className="mx-auto w-[90vw]   lg:w-[86%]">
      <Swiper
        loop
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={700}
        spaceBetween={28}
        breakpoints={{
          0: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          640: { slidesPerView: 4 },
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
          1280: { slidesPerView: 10 },
        }}
        modules={[Autoplay]}
      >
        {HomeSwiperImages.map((img) => (
          <SwiperSlide key={img.id} className="!w-auto">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-2xl shadow-theme-xs bg-[#EAF2FF]">
              <img
                src={img.path}
                alt={`slide-${img.id}`}
                className="w-15 h-10 sm:w-16 sm:h-16 object-contain"
                loading="lazy"
                
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
