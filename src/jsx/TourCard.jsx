import { useContext } from "react";
import { TourContext } from "../context/TourContext";

const TourCard = ({ tour }) => {
  const { setTour, largeScreen } = useContext(TourContext);

  return (
    <div
      onClick={() => {
        setTour(tour);
      }}
      className={`flex flex__column flex__gap-sm flex__item-center ps__relative ${
        largeScreen ? "tour__list-item" : ""
      }`}
    >
      <img
        className="tour__list-item__img width__90"
        src={tour.banner}
        alt=""
      />
      <div
        className={`flex flex__column flex__sp-center flex__item-center width__full height__full flex__gap-md ps__absolute font__primary ${
          largeScreen ? "tour__list-item-card__1" : "tour__list-item-card"
        }`}
      >
        <h4 className="tour__list-item-card__price text-alg__center">
          {tour.name}
        </h4>
        <span className="tour__list-item-card__price">
          from: $/{tour.pricePerPerson}
        </span>
      </div>
    </div>
  );
};

export default TourCard;
