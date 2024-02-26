import { useCallback, useEffect, useRef, useState } from "react";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import backToTop from "../helpers/functions/backToTop";

const popularTours = [
  {
    name: "MachuPicchu",
    url: "/socialtravel/service/peru/1",
    src: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    country: "Peru",
  },
  {
    name: "Rio de Janeiro",
    url: "/socialtravel/service/brasil/1",
    src: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    country: "Brasil",
  },
  {
    name: "Cartagena",
    url: "/socialtravel/service/colombia/1",
    src: "https://images.unsplash.com/photo-1583531352515-8884af319dc1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    country: "Colombia",
  },
  {
    name: "Buenos Aires",
    url: "/socialtravel/service/argentina/1",
    src: "https://images.unsplash.com/photo-1495317823589-e67efe1524b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    country: "Argentina",
  },
];

const ServicesSlider = () => {
  const timer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [prevIndex, setPrevIndex] = useState(0);
  const [postIndex, setPostIndex] = useState(currentIndex + 1);

  //Helper Functions

  const nextSlide = useCallback(() => {
    const lastSlide = currentIndex === popularTours.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, popularTours]);
  const previousSlide = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? popularTours.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  //Updating prev and next slide

  const giveIndex = () => {
    if (currentIndex === 0) {
      setPrevIndex(popularTours.length - 1);
    } else {
      setPrevIndex(currentIndex - 1);
    }
    if (currentIndex === popularTours.length - 1) {
      setPostIndex(0);
    } else {
      setPostIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    giveIndex();
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearTimeout(timer.current);
    };
  }, [nextSlide]);

  const rotation = currentIndex * (360 / popularTours.length);
  return (
    <div className="slider__container width__full ps__relative">
      <div
        className="slider__items-container"
        style={{ transform: `rotate (${rotation}deg)` }}
      >
        {popularTours.map((el, index) => (
          <Link
            onClick={() => {
              backToTop(350);
            }}
            to={el.url}
            key={index}
            style={{
              backgroundImage: `url(${popularTours[index].src})`,
            }}
            className={`${
              index === prevIndex
                ? "prev"
                : index === currentIndex
                ? "index"
                : index === postIndex
                ? "post"
                : "behind"
            } slider__index slider__item-container ps__relative flex__container-center flex__gap-bg`}
          >
            <span className="section-title index__front">{el.name}</span>
          </Link>
        ))}
      </div>
      <AiOutlineArrowLeft
        onClick={previousSlide}
        className="slider__arrow-left"
      />
      <AiOutlineArrowRight
        onClick={nextSlide}
        className="slider__arrow-right"
      />
      <div className="slider__dot-container">
        {popularTours.map((el, index) => (
          <span
            key={el.name}
            onClick={() => {
              goToSlide(index);
            }}
            className={`slider__dot ${currentIndex === index ? "current" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
