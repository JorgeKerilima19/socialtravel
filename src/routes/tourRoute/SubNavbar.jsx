import { Link, NavLink, useParams } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";

const tripNavbarItems = [
  {
    id: "Information",
    route: "./",
  },
  {
    id: "Tour Plan",
    route: "./tourPlan",
  },
  {
    id: "Location",
    route: "./location",
  },
  {
    id: "Gallery",
    route: "./gallery",
  },
  {
    id: "Reviews",
    route: "./reviews",
  },
];

const SubNavbar = () => {
  const { id } = useParams();

  return (
    <nav className="width__full ps__absolute subNavbar flex flex__sp-btw">
      <ul className="flex__list subNavbar_item-container">
        {tripNavbarItems.map((el) => (
          <li
            className="list__item-square font__wg-600 ps__relative"
            key={el.id}
          >
            <NavLink className="a" end to={`${el.route}`}>
              {el.id}
            </NavLink>
          </li>
        ))}
      </ul>
      <Link
        className="link__container flex flex__item-center flex__sp-center"
        to={`/TripPageReact/service/${id}`}
      >
        <BsArrowLeftCircleFill className="go-back" />
      </Link>
    </nav>
  );
};

export default SubNavbar;
