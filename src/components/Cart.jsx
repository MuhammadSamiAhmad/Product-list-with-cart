import { useContext, useState } from "react";
import { ItemsContext } from "../App";
import CarbonNeutralImg from "../assets/images/icon-carbon-neutral.svg";
import CartImg from "../assets/images/illustration-empty-cart.svg";
import OrderConfirmed from "../assets/images/icon-order-confirmed.svg";
import OrderConfirmation from "./OrderConfirmation";
const Cart = () => {
  const { items } = useContext(ItemsContext);
  const [isOrderConfirmed, setIsOrderConfirmed] = useState(false);

  // Calculate the total number of items in the cart
  const totalItemsInCart = items.reduce((total, item) => total + item.count, 0);

  const handleConfirmOrder = () => {
    setIsOrderConfirmed(true);
  };

  const handleClosePopup = () => {
    setIsOrderConfirmed(false);
  };

  return (
    <div className="mx-auto p-5 flex flex-col items-start text-left bg-white shadow-xl rounded-xl mt-10 sm:size-[90%] xl:size-3/12 md:size-[90%]">
      <h1 className="text-2xl lg:text-3xl font-bold text-orange-700 mb-5">
        Your Cart ({totalItemsInCart})
      </h1>
      <div id="cart-item" className="w-full">
        {items
          .filter((item) => item.count > 0)
          .map((item, index) => (
            <div key={index} className="mb-4 w-full">
              <p className="mb-2 font-bold">{item.name}</p>
              <p>
                <span className="font-bold text-orange-600">{item.count}x</span>{" "}
                <span className="text-gray-500">@${item.price.toFixed(2)}</span>{" "}
                ${(item.count * item.price).toFixed(2)}
              </p>
              <hr className="mt-5 w-full" />
            </div>
          ))}
      </div>
      {items.some((item) => item.count > 0) ? (
        <>
          <div className="w-full flex flex-row items-center justify-between">
            <p className="font-medium">Order Total</p>
            <p className="font-bold text-2xl mr-1">
              $
              {items
                .reduce((total, item) => total + item.price * item.count, 0)
                .toFixed(2)}
            </p>
          </div>
          <div className="w-full mx-auto bg-rose-100 mt-5 p-4 rounded-xl text-center">
            <div className="mx-auto flex items-center justify-center gap-2">
              <img src={CarbonNeutralImg} alt="carbon-neutral" />
              <p>
                This is a <span className="font-bold">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="w-full bg-orange-600 text-white p-3 mt-4 rounded-full shadow-md font-medium hover:bg-orange-800"
          >
            Confirm Order
          </button>
        </>
      ) : (
        /*The some method checks if at least one item in the items array has a count greater than 0. */
        <div className="size-full flex flex-col items-center justify-center my-3">
          <img src={CartImg} alt="" />
          <p className="font-medium text-rose-500">
            Your added items will appear here
          </p>
        </div>
      )}
      <OrderConfirmation
        isOrderConfirmed={isOrderConfirmed}
        handleClosePopup={handleClosePopup}
        OrderConfirmed={OrderConfirmed}
      />
    </div>
  );
};

export default Cart;
