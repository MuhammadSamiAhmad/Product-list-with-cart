import ListItem from "./ListItem";
import { useContext } from "react";
import { ItemsContext } from "../App";

const List = () => {
  const { items } = useContext(ItemsContext);
  return (
    <div className="size-2/3 flex flex-col items-start mx-auto">
      <h1 className="text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mt-10 mb-12">
        Desserts
      </h1>
      <div
        id="elements-list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:gap-20 lg:gap-5 md:gap-5"
      >
        {items.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
