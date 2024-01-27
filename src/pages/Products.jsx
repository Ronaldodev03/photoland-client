//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import useFetch from "../hooks/useFetch";
import { cameras } from "../dataLocal";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
const Products = () => {
  // const [title, setTitle] = useState("");
  const { id } = useParams();

  /* get product based on category id */
  /*  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  ); */

  const filteredCamera = cameras.filter(
    (camera) => camera.typeId === parseInt(id)
  );

  /* set tittle when data is loaded */
  /*  useEffect(() => {
     if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    } 
  }, [data]); */

  return (
    <div className=" mb-16 pt-40 lg:pt-0">
      <div className=" container mx-auto">
        <div className="flex gap-x-[1.875rem]">
          <CategoryNav />
          <main>
            {/* title */}
            <div className=" py-3 text-xl uppercase text-center lg:text-left">
              {/* {title} */}
              {filteredCamera[0].type} cameras
            </div>
            {/*product grid*/}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[0.9375rem] md:gap-[1.875rem]">
              {
                /* data? */ filteredCamera.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              }
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
