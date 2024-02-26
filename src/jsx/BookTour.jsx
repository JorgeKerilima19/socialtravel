import { useContext, useState } from "react";
import { TourContext } from "../context/TourContext";

const requiredInfo = ["Name", "Last name", "Email", "Birth data", "Phone"];

const BookTour = () => {
  const { tour, addToCart } = useContext(TourContext);
  const [tickets, setTickets] = useState(1);

  const handleTickets = (e) => {
    setTickets(e.target.value);
  };

  return (
    <aside className="aside flex__container-center flex__gap-bg">
      <h3 className="section__title">Book This Tour</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToCart(tour, tickets);
        }}
        className="pd-sm flex flex__column flex__gap-md width__90"
      >
        {requiredInfo.map((el) => (
          <div
            key={el}
            className="form__container-input flex__wrap flex__gap-sm"
          >
            <label htmlFor={el} className="form__label">
              {el}
            </label>
            <input type="text" className="form__input pd-left__sm" />
          </div>
        ))}
        <div
          key={"tickets"}
          className="form__container-input flex__wrap flex__gap-sm"
        >
          <label htmlFor={"tickets"} className="form__label">
            {"Total Tickets"}
          </label>
          <input
            type="text"
            pattern={"^[1-9]|10$"}
            placeholder={"Max 10"}
            className="form__input pd-left__sm"
            onChange={handleTickets}
          />
        </div>
        <div className="form__container-input flex__wrap flex__gap-sm">
          <label htmlFor="Message" className="form__label">
            Message
          </label>
          <textarea className="form__textarea" name="text"></textarea>
        </div>
        <button className="form__button" type="submit">
          See Availability
        </button>
      </form>
    </aside>
  );
};

export default BookTour;
