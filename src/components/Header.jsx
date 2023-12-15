import { Link } from "react-router-dom";
import { logo } from "../img";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";
import SearchForm from "./SearchForm";
import Cart from "./Cart";
import CategoryNavMobile from "./CategoryNavMobile";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
const Header = () => {
  const { isOpen, setIsOpen, itemAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  return (
    <header className=" bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[1.875rem]">
      <div className="container mx-auto">
        <div className=" flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0">
          {/* menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer "
          >
            <FiMenu />
          </div>
          {/* category nav mobile  */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {/* searchform for desktop only */}
          <div className=" hidden w-full xl:flex xl:max-w-[45.875rem]">
            <SearchForm />
          </div>
          {/* phone and cart */}
          <div className="flex items-center gap-x-[0.625rem] ">
            {/* phone */}
            <div className=" hidden xl:flex uppercase ">
              Need help? 123 456 789
            </div>
            {/* cart icon */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              {/* amount */}
              <div className="bg-accent text-primary absolute w-[1.125rem] h-[1.125rem] rounded-full font-bold top-3 -right-1 text-[0.8125rem] flex items-center justify-center tracking-[-0.1em]">
                {itemAmount}
              </div>
            </div>
            {/* cart */}
            <div
              className={` 
            ${isOpen ? "right-0" : "-right-full"}
            bg-[#0e0f10] overflow-y-auto shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[31.25rem] translate-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>
        {/* searchform for mobile only */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
