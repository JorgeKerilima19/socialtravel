import { useContext, useEffect } from "react";
import { TourContext } from "../../context/TourContext";
import { Outlet, useParams } from "react-router-dom";
import SubNavbar from "./SubNavbar";
import BookTour from "../../jsx/BookTour";

export const PlaceTour = () => {
  const { getData, tour, setTour, setTourEntries, largeScreen } =
    useContext(TourContext);
  const { id, placeId } = useParams();

  useEffect(() => {
    const getTourInfo = async () => {
      const data = await getData(id);
      setTour(data.places[placeId - 1]);
      setTourEntries(data.places[placeId - 1].tourInfo);
    };
    getTourInfo();
  }, []);

  return (
    <>
      <div
        className={`${
          largeScreen ? "width__full" : "width__90"
        } flex flex__sp-center ps__relative subNavbar-container`}
      >
        <div
          className="banner__md flex__container-center"
          style={{ backgroundImage: `url(${tour.banner})` }}
        >
          <h2 className="tourpage-name">{tour.name}</h2>
        </div>
        <SubNavbar />
      </div>
      <section className="section__container flex__gap-bg width__70 mg-bottom__bg tour__container ps__relative">
        <Outlet />
        <BookTour />
      </section>
    </>
  );
};
