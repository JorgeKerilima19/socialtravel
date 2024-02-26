import HeroImage from "../jsx/HeroImage";
import Destinations from "../jsx/Destination";

import { Destinations as data } from "../helpers/data/destination";
import ServicesSlider from "../jsx/ServicesSlider";

// import "../styles/service.css";
// import Newsletter from "../jsx/Newsletter";

export function Services() {
  return (
    <>
      <HeroImage src={"Service"} />
      <div className="section__container flex__gap-bg">
        <h2 className="section-title">Popular Destinations</h2>
        <ServicesSlider />
        <h2 className="section-title">Countries To visit</h2>
        <section className="homepage__destinations">
          {data.map((item, index) => {
            return <Destinations key={index} item={item} />;
          })}
        </section>
        <section className="flex flex__gap-bg mg-both__bg flex__wrap flex__item-center pd-right-left__md">
          <img
            src="https://xsgames.co/randomusers/assets/avatars/female/11.jpg"
            alt="CEO"
            className="service__img border__radius-50"
          />
          <div className="flex flex__wrap flex__column flex__gap-md width__wrap flex__item-end">
            <h2 className="section__title">Sarah Roberts</h2>
            <span className="section__subtitle service__ceo-range">
              CEO of Sky Travel
            </span>
            <p className="tour__description mg-top__md">
              "Hello, I'm Sarah Roberts, and I'm thrilled to welcome you to
              Horizon Travels. As the CEO, my passion is crafting journeys where
              luxury, culture, and adventure intertwine seamlessly. Our expert
              team designs meticulous itineraries for unforgettable,
              transformative travel experiences that resonate deeply with your
              soul."
            </p>
          </div>
        </section>
        <Newsletter />
      </div>
    </>
  );
}
