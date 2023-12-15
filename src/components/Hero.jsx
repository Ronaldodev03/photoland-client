import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";

import { promoImg1, promoImg2 } from "../img";

const Hero = () => {
  return (
    <section className=" mb-[1.875rem] pt-36 lg:pt-0  ">
      <div className=" container mx-auto">
        <div className=" flex flex-col gap-y-[1.875rem] xl:flex-row lg:gap-x-[1.875rem]">
          {/* sidebar */}
          <div>
            <CategoryNav />
          </div>
          {/* main slider */}
          <div className=" w-full max-w-lg  lg:max-w-[45.875rem] mx-auto">
            <MainSlider />
          </div>
          {/* promos */}
          <div className=" flex flex-col gap-y-[1.875rem] w-full max-w-lg mx-auto h-[31.25rem]">
            {/* promo 1 */}
            <div className=" grad flex-1 h-[15.625rem] rounded-[0.5rem] overflow-hidden relative p-6">
              {/* text */}
              <div className=" flex flex-col max-w-[9rem] h-full justify-center">
                <div className=" text-[1.25rem] uppercase font-medium leading-tight mb-4 ">
                  Save 35% all dslr cameras
                </div>
                <a href="#" className=" uppercase text-accent">
                  Shop now
                </a>
              </div>
              {/* img */}
              <img
                className=" absolute z-20 -top-2 -right-4"
                src={promoImg1}
                alt="promo img"
              />
            </div>

            {/* promo img 2 */}
            <div className=" grad flex-1 h-[15.625rem] rounded-[0.5rem] overflow-hidden relative p-6">
              {/* text */}
              <div className=" flex flex-col max-w-[9rem] h-full justify-center">
                <div className=" text-[1.25rem] uppercase font-medium leading-tight mb-4 ">
                  Save 25% all mirrorless cameras
                </div>
                <a href="#" className=" uppercase text-accent">
                  Shop now
                </a>
              </div>
              {/* img */}
              <img
                className=" absolute z-20 top-4 -right-6"
                src={promoImg2}
                alt="promo img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
