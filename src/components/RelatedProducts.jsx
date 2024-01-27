/* eslint-disable react/prop-types */
//import useFetch from "../hooks/useFetch";
import { cameras } from "../dataLocal";
import ProductSlider from "./ProductSlider";
const RelatedProducts = ({ categoryTitle }) => {
  /*  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  ); */

  const filteredCamera = cameras.filter(
    (camera) => camera.type === categoryTitle
  );

  return (
    <div className=" mb-16 ">
      <div className="container mx-auto">
        <h2 className=" mb-6 h2 text-center lg:text-left">Related Products </h2>
        <ProductSlider data={filteredCamera} />
      </div>
    </div>
  );
};

export default RelatedProducts;
