import { NavItems as data } from "./Navbar";
import { Link } from "react-router-dom";

// import "../styles/main.css";
import backToTop from "../helpers/functions/backToTop";

export default function HeroImage({ src }) {
  return (
    <>
      {data.map((el, index) => {
        if (el.title === src) {
          return (
            <section
              key={index}
              className={`hero-section ${el.classNameImage}`}
              style={{ backgroundImage: `url(${el.image})` }}
            >
              <div>
                <h2 className="hero-image_title">{el.name}</h2>
                <h3 className="hero-image_slogan">{el.textDescription}</h3>
                <Link onClick={backToTop} to={"/TripPageReact/service"}>
                  <button
                    className={el.title === "Home" ? "button__big" : "hide"}
                  >
                    Choose your Destination
                  </button>
                </Link>
              </div>
            </section>
          );
        }
      })}
    </>
  );
}
