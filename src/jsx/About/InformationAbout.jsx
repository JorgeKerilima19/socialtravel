import { useContext } from "react";
import { TourContext } from "../../context/TourContext";

export default function Information({ title, content, id }) {
  const { largeScreen } = useContext(TourContext);

  return (
    <div
      id={id}
      className={`info-wrapper ${!  largeScreen ? "width__80" : "width__full"}`}
    >
      <h3 className="info_title">{title}</h3>
      <div className="info_content">{content}</div>
    </div>
  );
}
