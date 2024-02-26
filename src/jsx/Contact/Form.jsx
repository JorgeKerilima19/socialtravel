function Form() {
  return (
    <section className="section__contact">
      <div className="contact__img-container"></div>
      <div className="contact__form-container">
        <h2>Keep In Touch</h2>
        <p>
          Concerns?, want more information? or just say hello 😄
        </p>
        <form action="" className="form-container__form">
          <div className="form__input-container">
            <label htmlFor="">Name: </label>
            <input
              className="input-container__input"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="">Last-name: </label>
            <input
              className="input-container__input"
              type="text"
              placeholder="Last-name"
              required
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="">Email: </label>
            <input
              className="input-container__input"
              type="text"
              placeholder="e-mail"
              required
            />
          </div>
          <div className="input-container__radio-container">
            <div>
              <input type="radio" name="type" required />
              <label>Suggestions</label>
            </div>
            <div>
              <input type="radio" name="type" />
              <label>I have a problem</label>
            </div>
            <div>
              <input type="radio" name="type" />
              <label>Consultation</label>
            </div>
          </div>
          <div className="form__input-container-textarea">
            <label htmlFor="">Your message: </label>
            <textarea required></textarea>
          </div>
          <div className="">
            <input type="checkbox" required />
            <label> Accept Terms and conditions</label>
          </div>
          <button className="form__button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
