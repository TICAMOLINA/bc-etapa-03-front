import { useState } from "react";
import "./Slider.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Slider = ({ data }) => {
  const imagenes = [data.foto, data.sliderFoto];
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === imagenes.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? imagenes.length - 1 : slide - 1);
  };

  return (
    <div className="slider">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />

      {imagenes.map((img, idx) => (
        <img
          key={idx}
          className={slide === idx ? "slider__image slider-active" : "slider__image"}
          src={img}
          alt={data.descripcion}
        />
      ))}

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />

      <span className="slider__indicators">
        {imagenes.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={slide === idx ? "slider__btn-indicator" : "slider__btn-indicator indicator-inactive"}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Slider;