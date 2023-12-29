import React, { useRef } from "react";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import img from "../img/reviewimg.png";
import "../styles/carousel.css";

const items = [
  {
    id: 0,
    img: img,
    name: "Shawn Paul",
    occupation: "CEO Microsoft",
    review:
      "I have a deep admiration for  Solarios. Their unwavering commitment to energy efficiency and sustainable practices is truly commendable. Through cutting-edge technology and innovative designs, they have consistently delivered remarkable results, reducing energy consumption and costs while enhancing operational efficiency. Their dedication to collaboration and knowledge sharing has been invaluable. It is an honor to work with such a forward-thinking and impactful company, paving the way for a greener future.",
    stars: 5,
  },
  {
    id: 1,
    img: img,
    name: "Shawn Paul",
    occupation: "CEO Microsoft",
    review:
      "I have a deep admiration for  Solarios. Their unwavering commitment to energy efficiency and sustainable practices is truly commendable. Through cutting-edge technology and innovative designs, they have consistently delivered remarkable results, reducing energy consumption and costs while enhancing operational efficiency. Their dedication to collaboration and knowledge sharing has been invaluable. It is an honor to work with such a forward-thinking and impactful company, paving the way for a greener future.",
    stars: 5,
  },
  {
    id: 2,
    img: img,
    name: "Shawn Paul",
    occupation: "CEO Microsoft",
    review:
      "I have a deep admiration for  Solarios. Their unwavering commitment to energy efficiency and sustainable practices is truly commendable. Through cutting-edge technology and innovative designs, they have consistently delivered remarkable results, reducing energy consumption and costs while enhancing operational efficiency. Their dedication to collaboration and knowledge sharing has been invaluable. It is an honor to work with such a forward-thinking and impactful company, paving the way for a greener future.",
    stars: 5,
  },
  {
    id: 3,
    img: img,
    name: "Shawn Paul",
    occupation: "CEO Microsoft",
    review:
      "I have a deep admiration for  Solarios. Their unwavering commitment to energy efficiency and sustainable practices is truly commendable. Through cutting-edge technology and innovative designs, they have consistently delivered remarkable results, reducing energy consumption and costs while enhancing operational efficiency. Their dedication to collaboration and knowledge sharing has been invaluable. It is an honor to work with such a forward-thinking and impactful company, paving the way for a greener future.",
    stars: 5,
  },
  {
    id: 4,
    img: img,
    name: "Shawn Paul",
    occupation: "CEO Microsoft",
    review:
      "I have a deep admiration for  Solarios. Their unwavering commitment to energy efficiency and sustainable practices is truly commendable. Through cutting-edge technology and innovative designs, they have consistently delivered remarkable results, reducing energy consumption and costs while enhancing operational efficiency. Their dedication to collaboration and knowledge sharing has been invaluable. It is an honor to work with such a forward-thinking and impactful company, paving the way for a greener future.",
    stars: 5,
  },
];

export default function Carousel() {
  const ref = useRef(StackedCarousel);
  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                carouselWidth={width}
                data={items}
                maxVisibleSlide={5}
                disableSwipe
                slideWidth={700}
                height={350}
                customScales={[1, 0.85, 0.7, 0.5]}
                transitionTime={450}
              />
            );
          }}
        />
      </div>
    </div>
  );
}

const Slide = React.memo(function (StackedCarouselSlideProps) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } =
    StackedCarouselSlideProps;

  const coverImage = data[dataIndex].img;
  const name = data[dataIndex].name;
  const occupation = data[dataIndex].occupation;
  const review = data[dataIndex].review;
  const stars = data[dataIndex].stars;

  return (
    <div className="card-card" draggable={false}>
      <div className={`cover fill ${isCenterSlide ? "off" : "on"}`}>
        <div
          className="card-overlay fill"
          onClick={() => {
            if (!isCenterSlide) swipeTo(slideIndex);
          }}
        />
      </div>
      <div className="detail fill">
        <div className="description">
          <img alt="user" className="cover-image" src={coverImage} />
          <div className="info">
            <h1>{name}</h1>
            <h3>{occupation}</h3>
            <p>{review}</p>

            <div className={"stars"}>
              {Array.from({ length: stars }).map((_, i) => (
                <span key={i}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                  >
                    <path
                      d="M16.8535 0.511841L20.6464 12.185H32.9202L22.9905 19.3993L26.7833 31.0725L16.8535 23.8581L6.9238 31.0725L10.7166 19.3993L0.786879 12.185H13.0607L16.8535 0.511841Z"
                      fill="#F2D81F"
                    />
                  </svg>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
