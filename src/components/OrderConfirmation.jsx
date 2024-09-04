import { ItemsContext } from "../App";
import { useContext } from "react";
const OrderConfirmation = ({
  isOrderConfirmed,
  handleClosePopup,
  OrderConfirmed,
}) => {
  const { items } = useContext(ItemsContext);

  return (
    <>
      {/* Order Confirmed Popup 

      fixed: Positions the element relative to the viewport, meaning it stays in place even when the user scrolls. It is used to create a modal that covers the entire screen.
      inset-0: This is shorthand for top-0 right-0 bottom-0 left-0. It stretches the element to cover the entire screen.
      bg-opacity-50: Reduces the background opacity to 50%, making it semi-transparent. This effect is often used to dim the background content when a modal is open.

      */}
      {isOrderConfirmed && (
        <div
          className="fixed inset-x-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50 sm:inset-0 sm:w-full"
          onClick={handleClosePopup}
        >
          <div
            className="bg-white rounded-lg p-10 w-full md:w-[50%] lg:w-[30%] shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
            /*Stopping Propagation: By using e.stopPropagation(), you ensure that the click event on a specific element (like the popup content) doesn't affect the parent elements (like the modal overlay). This is particularly useful when you want to click inside a popup without triggering the overlay's click event, which might close the popup. */
          >
            <img
              className="mb-6"
              src={OrderConfirmed}
              alt="Order Confirmation"
            />
            <h2 className="text-4xl font-bold mb-4 text-left">
              Order Confirmed
            </h2>
            <p className="text-left mb-10 text-gray-500">
              We hope you enjoy your food!
            </p>

            <div className="max-h-60 overflow-y-auto mb-6">
              <ul className="text-left">
                {items
                  .filter((item) => item.count > 0)
                  .map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center mb-4"
                    >
                      <div className="flex items-start flex-row gap-2">
                        <img
                          src={
                            new URL(`${item.image["desktop"]}`, import.meta.url)
                              .href
                          }
                          alt={item.name}
                          className="size-16 rounded-lg"
                        />
                        <div className="mb-4">
                          <p className="mb-2 font-bold">{item.name}</p>
                          <p>
                            <span className="font-bold text-orange-600">
                              {item.count}x
                            </span>
                            <span className="text-gray-500 ml-3">
                              @${item.price.toFixed(2)}
                            </span>
                          </p>
                        </div>
                      </div>

                      <p className="font-bold text-lg">
                        ${(item.count * item.price).toFixed(2)}
                      </p>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex items-center justify-between mb-8">
              <p className="text-left text-sm">Order Total</p>
              <p className="font-bold text-2xl mr-1">
                $
                {items
                  .reduce((total, item) => total + item.price * item.count, 0)
                  .toFixed(2)}
              </p>
            </div>

            <button
              onClick={handleClosePopup}
              className="w-full bg-orange-600 text-white p-3 rounded-full hover:bg-orange-800"
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderConfirmation;
