/* eslint-disable react/prop-types */

/* data */
/* import useFetch from "../hooks/useFetch";*/
import { cameras } from "../dataLocal";
/* componets */
import ProductSlider from "../components/ProductSlider";

const LatestProducts = () => {
  /*   const { data } = useFetch("/products?populate=*&filters[isNew]=true");*/
  const data = cameras.filter((camera) => camera.isNew === true);
  return (
    <div className="mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
