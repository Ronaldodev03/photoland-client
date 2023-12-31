import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
const Products = () => {
  const { id } = useParams();
  /* get product based on category id */
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );

  const [title, setTitle] = useState("s");
  /* set tittle when data is loaded */
  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  return (
    <div className=" mb-16 pt-40 lg:pt-0">
      <div className=" container mx-auto">
        <div className="flex gap-x-[1.875rem]">
          <CategoryNav />
          <main>
            {/* title */}
            <div className=" py-3 text-xl uppercase text-center lg:text-left">
              {title} cameras
            </div>
            {/*product grid*/}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[0.9375rem] md:gap-[1.875rem]">
              {data?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
