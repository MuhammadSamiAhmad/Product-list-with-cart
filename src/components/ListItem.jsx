import ListButton from "./ListButton";
import { useContext, useState, useEffect } from "react";
import { ItemsContext } from "../App";

// Define the getCurrentScreenSize function first
const getCurrentScreenSize = () => {
  if (window.matchMedia("(max-width: 640px)").matches) {
    return "mobile";
  } else if (window.matchMedia("(max-width: 1024px)").matches) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const ListItem = ({ item }) => {
  const { updateItemCount } = useContext(ItemsContext);
  const [count, setCount] = useState(item.count || 1);
  const [isClicked, setIsClicked] = useState(false);
  const [screenSize, setScreenSize] = useState(getCurrentScreenSize());

  // Update item.count in the context when count changes
  const handleSetCount = (newCount) => {
    setCount(newCount);
    updateItemCount(item.id, newCount); // Update the count in the context
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getImgUrl = () => {
    return new URL(`${item.image[screenSize]}`, import.meta.url).href;
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="relative">
        <img
          className={`rounded-2xl shadow-xl ${
            isClicked && count != 0 ? "border-4 border-orange-600" : ""
          } 
          sm:size-40 md:size-60 lg:size-80`}
          src={getImgUrl()}
          alt={item.name}
        />
        <ListButton
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          count={count}
          handleSetCount={handleSetCount} // Use the custom handler to update count
        />
      </div>
      <div className="text-left flex flex-col gap-1">
        <h2 className="font-product-name text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
          {item.category}
        </h2>
        <p className="text-lg font-bold">{item.name}</p>
        <p className="text-orange-600 font-bold text-lg">
          {" "}
          $
          {
            item.price.toFixed(
              2
            ) /* JavaScript, by default, does not display trailing zeros in floating-point numbers when rendering them. To ensure that the price is displayed with two decimal places (e.g., $7.00 instead of $7), you can use the toFixed() method.*/
          }
        </p>
      </div>
    </div>
  );
};

export default ListItem;
