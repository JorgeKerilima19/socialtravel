import { useContext, useEffect } from "react";

import { TourContext } from "../context/TourContext";
import TourCard from "./TourCard";
import TourInfo from "./TourInfo";

export const Places = () => {
  const { destination, setTour, tour, largeScreen } = useContext(TourContext);

  useEffect(() => {
    if (destination) {
      setTour(destination.places[0]);
    }
  }, [destination]);

  if (tour) {
    return (
      <section
        className={`flex pd-right-left__md ${
          largeScreen ? "flex__column" : ""
        } width__full flex__gap-bg`}
      >
        <div>
          <h2 className="color__primary">Our Tours</h2>
          <section
            className={`scroll__primary-sm flex ${
              largeScreen ? "" : "flex__column"
            } flex__gap-md max__height pd-top-bottom__md`}
          >
            {destination?.places?.map((el) => (
              <TourCard key={el.placeId} tour={el} />
            ))}
          </section>
        </div>
        <TourInfo tour={tour} />
      </section>
    );
  }
  return "No data";
};
