import { useState } from "react";

const ListButton = ({ isClicked, setIsClicked, count, handleSetCount }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    handleSetCount(1);
    setIsClicked(true);
    if (count === 0) {
      handleSetCount(1); // Reset count to 1 when re-adding to cart
    }
  };

  return (
    <>
      {isClicked && count !== 0 ? (
        <div
          className="flex flex-row items-center justify-between absolute -bottom-4 left-1/2 transform -translate-x-1/2 border shadow-xl border-solid border-orange-700 rounded-full
         bg-orange-700 text-white text-bold p-3 w-[80%]"
        >
          <div
            className="cursor-pointer flex items-center justify-center ml-2"
            onClick={() => handleSetCount(count - 1)}
          >
            {/* Decrement Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              className="size-6 fill-current text-white rounded-full border border-white p-1 hover:bg-white hover:text-orange-700"
              viewBox="0 0 10 2"
            >
              <path d="M0 .375h10v1.25H0V.375Z" />
            </svg>
          </div>
          {count}
          <div
            className="cursor-pointer flex items-center justify-center mr-2"
            onClick={() => handleSetCount(count + 1)}
          >
            {/* Increment Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              className="size-6 fill-current text-white rounded-full border border-white p-1
            hover:bg-white hover:text-orange-700"
              viewBox="0 0 10 10"
            >
              <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
            </svg>
          </div>
        </div>
      ) : (
        <button
          className={`flex flex-row items-center justify-center gap-2 absolute -bottom-4 left-1/2 transform -translate-x-1/2 border shadow-xl rounded-full bg-white text-bold p-3 w-[80%] font-medium
          ${
            isHovered
              ? "border-orange-600 text-orange-600"
              : "border-gray-400 text-gray-800"
          }`}
          onClick={handleAddToCart}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            className={`fill-current ${
              isHovered ? "text-orange-600" : "text-[#C73B0F]"
            }`}
          >
            <g clipPath="url(#a)">
              <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" />
              <path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M.333 0h20v20h-20z" />
              </clipPath>
            </defs>
          </svg>{" "}
          Add to Cart
        </button>
      )}
    </>
  );
};

export default ListButton;
