import { useParams } from "react-router-dom";
//import useFetch from "../hooks/useFetch";
import { cameras } from "../dataLocal";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  //const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  /*if (!data) {
    return <div className="container mx-auto">loading...</div>;
  }*/

  /* category title */
  //const categoryTitle = data[0].attributes.categories.data[0].attributes.title;

  const singleCamera = cameras.filter((camera) => camera.id === parseInt(id));
  return (
    <div className=" mb-16 pt-44 lg:pt-[1.875rem] xl:pt-0">
      <div className="container mx-auto">
        {/* text */}
        <div className=" flex flex-col lg:flex-row gap-[1.875rem] mb-[1.875rem]">
          <div className=" flex-1 lg:max-w-[40%] lg:h-[33.75rem] grad rounded-lg flex justify-center items-center">
            <img
              /* src={`http://localhost:1337${data[0].attributes.image.data.attributes.url}`} */
              src={singleCamera[0].src}
              alt="image camera"
              className=" w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* category title */}
            <div className=" uppercase text-accent text-lg font-medium mb-12">
              {/* {data[0].attributes.categories.data[0].attributes.title} */}
              {singleCamera[0].type} cameras
            </div>
            {/* title */}
            <h2 className=" h2 mb-4">
              {/* {data[0].attributes.title} */}
              {singleCamera[0].title}
            </h2>
            {/* description */}
            <p className=" mb-12">
              {/* {data[0].attributes.description} */}
              {singleCamera[0].desc}
            </p>
            {/* price and btn */}
            <div className=" flex items-center gap-x-8">
              {/* price */}
              <div className=" text-3xl text-accent font-semibold">
                ${/* {data[0].attributes.price} */}
                {singleCamera[0].price}
              </div>
              <button
                onClick={() => addToCart(singleCamera, id)}
                className=" btn btn-accent"
              >
                Add to cart{" "}
              </button>
            </div>
          </div>
        </div>

        {/* related products */}
        <RelatedProducts
          categoryTitle={/* categoryTitle */ singleCamera[0].type}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
