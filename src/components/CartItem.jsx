/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "./Qty";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div className=" flex gap-x-8">
      <Link to={`product/${item.id}`} className=" w-[4.375rem] h-[4.375rem]">
        <img
          /* src={`http://localhost:1337${item.attributes.image.data.attributes.url}`} */
          src={item.src}
          alt="item image"
        />
      </Link>
      <div className=" flex-1">
        {/* title and remove icon */}
        <div className=" flex gap-x-4 mb-3">
          <Link to={`product/${item.id}`}>
            {/* {item.attributes.title} */}
            {item.title}
          </Link>
          <div
            onClick={() => removeFromCart(item.id)}
            className=" cursor-pointer text-[1.5rem] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>
        {/* quantity*/}
        <div className=" flex items-center gap-x-12">
          <div className=" flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className=" text-accent text-xl">
            ${/* item.attributes.price */ item.price * item.amount}
          </div>
        </div>
        {/* price */}
        <div>
          <span className=" text-accent">
            ${/* {item.attributes.price} */}
            {item.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
