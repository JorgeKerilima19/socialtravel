import { useContext } from "react";
import { TourContext } from "../../context/TourContext";

export const TourGallery = () => {
  const { tour } = useContext(TourContext);
  return (
    <>
    <h2>Gallery</h2>
      <div className="tour__gallery-container">
        {tour?.photos?.map((el) => (
          <div key={el}>
            <img className="" src={el} />
          </div>
        ))}
      </div>
    </>
  );
};
