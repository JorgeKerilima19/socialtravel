import HeroImage from "../jsx/HeroImage";
import FormRegister from "../jsx/Register/FormRegister";

export function Register() {
  return (
    <>
      <HeroImage src={"Register"} />
      <h2 className="section-title">Want better offers?</h2>
      <h3 className="title__description">
        By signing in, you will receive our news letter and special discounts on
        future trip packages
      </h3>
      <FormRegister />
    </>
  );
}
