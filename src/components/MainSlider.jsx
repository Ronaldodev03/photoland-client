/* eslint-disable react/prop-types */
/* swiper react components */
import { Swiper, SwiperSlide } from "swiper/react";

/* required modules*/
import { Pagination } from "swiper/modules";

/* swiper style */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

import { camera } from "../img";

const sliderData = [
  {
    img: camera,
    pretitle: "special offer",
    titlePart1: "save 20%",
    titlePart2: "on your",
    titlePart3: "first order",
    btnText: "shop now",
  },
  {
    img: camera,
    pretitle: "special offer",
    titlePart1: "save 20%",
    titlePart2: "on your",
    titlePart3: "first order",
    btnText: "shop now",
  },
  {
    img: camera,
    pretitle: "special offer",
    titlePart1: "save 20%",
    titlePart2: "on your",
    titlePart3: "first order",
    btnText: "shop now",
  },
];
const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
      className=" mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[0.5rem] overflow-hidden drop-shadow-2xl"
    >
      {sliderData.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col lg:flex-row h-full p-[1.25rem] md:p-[3.75rem]">
              {/* text */}

              {/* 
            
            - why flex-1

            */}
              <div className=" w-full lg:flex-1">
                <div className=" uppercase mb-1 text-center lg:text-left">
                  {slide.pretitle}
                </div>
                <div className=" text-3xl md:text-[2.6875rem] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                  {slide.titlePart1}
                  <br />
                  {slide.titlePart2}
                  <br />
                  {slide.titlePart3}
                </div>
                <button className=" btn btn-accent mx-auto lg:mx-0">
                  Shop now
                </button>
              </div>

              {/* img */}

              {/* 
            
            - why flex-1

            */}
              <div className="flex-1">
                <img
                  className=" xl:absolute xl:-right-16 xl:-bottom-12"
                  src={slide.img}
                  alt="image"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSlider;
