import React, { useRef, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import "keen-slider/keen-slider.min.css"; // Import KeenSlider styles

const SliderCard = ({ cardData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: "free",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setLoaded(true);
    },
    breakpoints: {
      "(min-width: 0px)": {
        slides: { perView: 1.5, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: {
      perView: 3.2,
      spacing: 40,
    },
  });

  return (
    <div ref={sliderRef} className="keen-slider slider-group">
      {cardData.map((card, index) => (
        <div key={index} className="keen-slider__slide">
          <div className="card-product">
            <img src={card.image} alt={card.title} />
            <h3>{card.title}</h3>
            {/* <p>{card.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderCard;
