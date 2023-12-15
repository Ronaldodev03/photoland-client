/* eslint-disable react/prop-types */
/* swiper react components */
import { Swiper, SwiperSlide } from "swiper/react";

/* required modules*/
import { Navigation, Pagination } from "swiper/modules";

/* swiper style */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../slider.css";

/* components */
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className=" productSlider mx-auto max-w-[22.5rem] md:max-w-lg xl:max-w-[88.125rem]"
    >
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
