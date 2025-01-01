import "./Hero.css";
import { useState } from "react";

const Hero = () => {
  const images = [
    "/assets/banner-01.jpg",
    "/assets/banner-02.jpg",
    "assets/banner-03.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <button className="arrow left-arrow" onClick={handlePrev}>
        &#8249;
      </button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
            {index === currentIndex && (
              <div className="text-overlay">
                <p>
                  Toronto, <span className="color">Canada</span>
                </p>
                <h1>
                  <span className="hurry">HURRY!</span> GET THE BEST VILLA FOR
                  YOU
                </h1>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="arrow right-arrow" onClick={handleNext}>
        &#8250;
      </button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
