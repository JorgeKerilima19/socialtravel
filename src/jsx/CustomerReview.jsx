import { reviews } from "../helpers/data/review";

const CustomerReview = ({ elements = reviews.length }) => {
  const limit = elements;

  return (
    <div className="homepage__review-container flex flex__item-center flex__sp-center flex__wrap flex__gap-bg pd-bg width__full">
      {reviews.map((el, index) => {
        if (index < limit) {
          return (
            <article
              key={el.userName}
              className="homepage__review-item__container flex flex__column flex__item-center flex__gap-bg"
            >
              <p className="text-alg__center ps__relative text__italic review__comment">
                {el.comment}
              </p>
              <div className="flex flex__column flex__item-center flex__gap-md">
                <img className="tour__user-photo" src={el.userProfile} alt="" />
                <h4 className="review__user-name">{el.userName}</h4>
              </div>
            </article>
          );
        }
      })}
    </div>
  );
};

export default CustomerReview;
