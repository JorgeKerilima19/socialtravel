import { useEffect, useContext } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

import { TourContext } from "../context/TourContext";
// import "../styles/tourPage.css";

export function TourPage() {
  const { getData, destination, setDestination } = useContext(TourContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(id);
        setDestination(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex__container flex__item-center">
      <div
        className="banner flex__container-center flex__gap-md"
        style={{ backgroundImage: `url(${destination.banner})` }}
      >
        <h2 className="tourpage-title">{destination.name}</h2>
        <span className="tourpage-slogan">{destination.slogan}</span>
        <Link className="banner-md__button" to={`/TripPageReact/service`}>
          <BsArrowLeftCircleFill className="go-back" />
        </Link>
      </div>
      <Outlet />
    </section>
  );
}
