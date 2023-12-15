/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="grad w-full h-[22.625rem] rounded-[0.5rem] overflow-hidden relative group">
        {/* badge */}
        {product.attributes.isNew ? (
          <div className=" absolute bg-accent text-primary text-[0.75rem] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          ""
        )}

        {/* image */}
        <div className="w-full h-[12.5rem] flex items-center justify-center relative">
          <img
            className=" w-[10rem] h-[10rem] group-hover:scale-90 transition-all"
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt="image"
          />
        </div>

        {/* text */}

        {/* 

       - why pb-8 

        */}
        <div className=" px-6 pb-8 flex flex-col ">
          {/* category title */}
          <div className=" text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}

          {/* 

       - why mb-4 and then lg:mb-9 
       
        */}
          <div className=" text-[0.9375rem] mb-4 lg:mb-9 ">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* price */}
          <div className=" text-lg text-accent">
            ${product.attributes.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
