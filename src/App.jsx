import List from "./components/List";
import Cart from "./components/Cart";
import { createContext, useState } from "react";
import data from "./constants/data.json";
// Create the context
export const ItemsContext = createContext();
function App() {
  const [items, setItems] = useState(data); // Use imported data

  const updateItemCount = (id, count) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, count: count } : item
      )
    );
  };

  return (
    <>
      <div className="flex flex-col xl:flex-row bg-rose-100 pb-14 overflow-hidden md:gap-8 lg:gap-8 xl:gap-0">
        <ItemsContext.Provider value={{ items, updateItemCount }}>
          <List />
          <Cart />
        </ItemsContext.Provider>
      </div>
    </>
  );
}

export default App;
