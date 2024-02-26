import { useContext, useEffect, useState } from "react";
import { TourContext } from "../../context/TourContext";
import OpinionCard from "../../jsx/OpinionCard";

export const TourReviews = () => {
  const { tour } = useContext(TourContext);
  const [hotelPoints, setHotelPoints] = useState(0);
  const [mealPoints, setMealPoints] = useState(0);
  const [transportPoints, setTransportPoints] = useState(0);
  const [overAll, setOverAll] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    if (tour) {
      let totalHotelPoints = 0;
      let totalMealPoints = 0;
      let totalTransportPoints = 0;
      let totalOverAllPoints = 0;

      tour?.reviews?.forEach((el) => {
        Object.entries(el.rates).forEach(([key, value]) => {
          if (key === "hotel") {
            totalHotelPoints += value;
          } else if (key === "meals") {
            totalMealPoints += value;
          } else if (key === "transportation") {
            totalTransportPoints += value;
          } else if (key === "overall") {
            totalOverAllPoints += value;
          }
        });
      });

      setHotelPoints(((totalHotelPoints * 2) / tour.reviews.length).toFixed(1));
      setMealPoints(((totalMealPoints * 2) / tour.reviews.length).toFixed(1));
      setTransportPoints(
        ((totalTransportPoints * 2) / tour.reviews.length).toFixed(1)
      );
      setOverAll(((totalOverAllPoints * 2) / tour.reviews.length).toFixed(1));
      setTotalPoints(
        (
          (totalHotelPoints +
            totalMealPoints +
            totalTransportPoints +
            totalOverAllPoints) /
          8
        ).toFixed(1)
      );
    }
  }, [tour]);

  return (
    <>
      <h2>Tour Reviews and Scores</h2>
      <p className="tour-info__body">
        This is what people have to say about the tour and place, feel free to
        share your opinion with honesty and help us to improve our service and
        our connections.
      </p>
      <section className="flex flex__wrap flex__gap-bg width__full flex__item-center flex__sp-center">
        <div className="tour__review-total flex flex__sp-center flex__column flex__item-center flex__gap-md">
          <span>
            {Math.round((totalPoints * 10) / 10) > 6
              ? "😁"
              : Math.round((totalPoints * 10) / 10) > 5
              ? "🙂"
              : "🙄"}
          </span>
          <h3>{totalPoints}</h3>
        </div>
        <div className="tour__review__container flex flex__column flex__gap-sm">
          <div
            style={{ "--width": `${hotelPoints * 10}%` }}
            className="tour__review-bg"
          >
            <span>Hotel</span>
            <span>{hotelPoints}</span>
          </div>
          <div
            style={{ "--width": `${mealPoints * 10}%` }}
            className="tour__review-bg"
          >
            <span>Meals</span>
            <span>{mealPoints}</span>
          </div>
          <div
            style={{ "--width": `${transportPoints * 10}%` }}
            className="tour__review-bg"
          >
            <span>transportation</span>
            <span>{transportPoints}</span>
          </div>
          <div
            style={{ "--width": `${overAll * 10}%` }}
            className="tour__review-bg"
          >
            <span>overAll</span>
            <span>{overAll}</span>
          </div>
        </div>
      </section>
      <section className="flex__container">
        <h3>This is what people have to say about the tour</h3>
        {tour?.reviews?.map((el) => (
          <OpinionCard key={el.id} el={el} arr={el.rates} />
        ))}
      </section>
    </>
  );
};
