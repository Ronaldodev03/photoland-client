import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("query");
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  return (
    <div className=" mb-[1.875rem] pt-40 lg:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className=" flex gap-[1.875rem]">
          {/* category nav */}
          <CategoryNav />
          <div>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data.length} results for ${searchTerm}`
                : `no results found for ${searchTerm}`}
            </div>
            {/* products grid */}
            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[0.9375rem] md:gap-[1.875rem]">
              {data?.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
