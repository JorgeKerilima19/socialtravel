import { TourContext } from "./TourContext";
import { useState, useEffect } from "react";

const TourContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [destination, setDestination] = useState("");
  const [tour, setTour] = useState("");
  const [tourEntries, setTourEntries] = useState("");
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("whishList")) || []
  );

  const getData = async (destination) => {
    const res = await fetch(`/TripPageReact/resources/api/${destination}.json`);
    const data = await res.json();

    return data;
  };

  const addToCart = (toAdd, tickets = 1) => {
    const exists = wishList.some((item) => item.name === toAdd.name);
    const newItem = { ...toAdd, url: window.location.pathname, tickets };

    if (!exists) {
      setWishList((prevItems) => [...prevItems, newItem]);
      localStorage.setItem("whishList", JSON.stringify([...wishList, newItem]));
    }
  };

  const removeFromCart = (toRemove) => {
    setWishList((prevItems) =>
      prevItems.filter((item) => item.name !== toRemove.name)
    );
    localStorage.setItem(
      "whishList",
      JSON.stringify(wishList.filter((item) => item.name !== toRemove.name))
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const largeScreen = screenWidth < 700;

  return (
    <TourContext.Provider
      value={{
        getData,
        destination,
        setDestination,
        tour,
        setTour,
        tourEntries,
        setTourEntries,
        wishList,
        addToCart,
        removeFromCart,
        largeScreen,
      }}
    >
      {children}
    </TourContext.Provider>
  );
};

export default TourContextProvider;
