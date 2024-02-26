import { useContext } from "react";
import { TourContext } from "../../context/TourContext";
import { Places } from "../../jsx/Places";
import CustomerReview from "../../jsx/CustomerReview";
import Newsletter from "../../jsx/Newsletter";

export const Information = () => {
  const { destination } = useContext(TourContext);

  return (
    <>
      <div className="section__container flex__gap-bg width__full pd-top__bg">
        <h3 className="section__title">About {destination.name}</h3>
        <p className="section__content tour__description pd-bottom__bg pd-right-left__md">
          {destination.about}
        </p>
        <Places />
        <section className="flex__container flex__item-center width__full">
          <h4 className="section-title">What Our Customers Have To Say </h4>
          <CustomerReview elements={2} />
        </section>
        <Newsletter />
      </div>
    </>
  );
};
