/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const Qty = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);
  return (
    <div className=" flex gap-x-6 text-primary items-center">
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleSelect(e, item.id)}
          className=" p-2 rounded-lg w-[6.25rem] h-12 outline-none text-primary "
          value={item.amount}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">+10</option>
        </select>
      ) : (
        <input
          onBlur={(e) => handleInput(e, item.id)}
          type="text"
          placeholder={`${item.amount}`}
          className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[7.5rem] outline-accent"
        />
      )}
    </div>
  );
};

export default Qty;
