import { Link } from "react-router-dom";
import "../index.css";
import "../styles/home.css";
import { BsArrowRightCircleFill } from "react-icons/bs";

import backToTop from "../helpers/functions/backToTop";

const Destinations = ({ item }) => {
  return (
    <>
      <Link
        to={`/socialtravel/service/${item.id}`}
        className="flex flex__column flex__sp-center ps__relative homepage__destination-card"
        onClick={backToTop}
      >
        <div className="flex flex__gap-sm flex__sp-center width__full">
          <img
            className="homepage__destination-card__img width__full"
            src={item.src1}
            alt="Image1"
          />
        </div>
        <div className="destination-card__description flex flex__column flex__sp-center flex__item-center flex__gap-md text-alg__center">
          <h3 className="card__title">{item.title}</h3>
          <p className="card__p">{item.description}</p>
          <div className="destination-card__button flex flex__item-center width__60 flex__sp-btw flex__wrap">
            <span>More Info</span>
            <BsArrowRightCircleFill className="destination-card__svg" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Destinations;
