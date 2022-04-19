import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import avatar from "../assets/avatar.png";
const Review = () => {
  return (
    <section className="text-center">
      <p className="text-primary text-sm">Happy Clients</p>
      <h1 className="md:text-4xl text-2xl mt-1 font-semibold">
        Client's Say About Us
      </h1>
      <div className="my-6">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 2,
            },
            400: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20 px-4 py-20"
        >
          <SwiperSlide>
            <div
              className="flex flex-col justify-center shadow-2xl rounded-lg
             p-8"
            >
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
