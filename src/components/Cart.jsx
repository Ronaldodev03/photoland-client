import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../request";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);

  const stripePromise = loadStripe(
    "pk_test_51OLZ6yJOqwdGZRkUfDfpDIgB2fL6677pZYfzGJCe6YWuxmUtvebCeaUeVju5OdHsznpgAkyBz4H8Ko159kgsbrRR00ZliqWj1A"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", {
        cart,
      });

      //console.log("Server Response:", res.data);

      if (res.data && res.data.strapiSession && res.data.strapiSession.id) {
        await stripe.redirectToCheckout({
          sessionId: res.data.strapiSession.id,
        });
      } else {
        console.error(
          "Stripe session ID is undefined or null in the response."
        );
      }
    } catch (error) {
      console.error("Error handling payment:", error);
    }
  };

  return (
    <div className=" w-full h-full px-4 text-white">
      <div className=" overflow-y-auto overflow-x-hidden h-[70vh]">
        {/* icon close */}
        <div
          onClick={() => setIsOpen(false)}
          className="  text-4xl w-20 h-[6.125rem] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className=" flex flex-col gap-y-10 px-2">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
      </div>
      {/* subtotal and total */}
      {cart.length >= 1 && (
        <div className=" px-6 py-10 flex flex-col">
          {/* subtotal */}
          <div className=" flex justify-between text-lg">
            <div>Subtotal</div>
            <div>$ {total}</div>
          </div>
          {/* total */}
          <div className=" flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {total}</div>
          </div>
        </div>
      )}
      {/* buttons */}
      <div className=" px-6 ">
        {cart.length >= 1 ? (
          <div className=" flex justify-between gap-x-4 pb-4">
            <button
              onClick={clearCart}
              className=" btn btn-accent hover:bg-accent-hover text-primary"
            >
              Clear cart
            </button>
            <button
              onClick={handlePayment}
              className=" btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2"
            >
              Checkout
              <IoArrowForward className=" text-lg" />
            </button>
          </div>
        ) : (
          <div className=" h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
            <div className=" text-2xl">Your cart is empty</div>
            <div className=" text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
