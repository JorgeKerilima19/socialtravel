const Newsletter = () => {
  return (
    <section className="flex flex__item-center flex__wrap flex__gap-bg flex__sp-btw pd-bg newsletter__container">
      <div className="flex__container width__50">
        <h3 className="section__title">Subscribe To Our Newsletter</h3>
        <span className="width__80">
          Keep updated about our plans and get promo codes for better deals
        </span>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="newsLetter__form width__50 flex flex__column flex__gap-md"
      >
        <div className="form__input-container">
          <input type="email" className="form__input newsletter__input" />
          <button className="form__button">Subscribe</button>
        </div>
        <span className="newsletter__font">
          We care about your privacy, see{" "}
          <a href="./about" className="newsletter__font-a">
            Privacy policy
          </a>
        </span>
      </form>
    </section>
  );
};

export default Newsletter;
