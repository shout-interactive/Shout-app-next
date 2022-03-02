import { useState } from "react";
import { Carousel } from "react-bootstrap";
// import Davido from '../../assest/images/davido.png';

// import { dummyData } from '../../utils/homePageDummyData';

import "./index.css";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="" activeIndex={index} onSelect={handleSelect}>
      {/* {dummyData.map(({ Img }) => ( */}
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            src="https://res.cloudinary.com/de8vrxbqq/image/upload/v1644325905/shout/davido_zj6lcz.png"
            alt="davido"
            className="carousel-image"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            src="https://res.cloudinary.com/de8vrxbqq/image/upload/v1644325905/shout/davido_zj6lcz.png"
            alt="davido"
            className="carousel-image"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            src="https://res.cloudinary.com/de8vrxbqq/image/upload/v1644325905/shout/davido_zj6lcz.png"
            alt="davido"
            className="carousel-image"
          />
        </div>
      </Carousel.Item>
      {/* ))} */}
    </Carousel>
  );
};

export default CarouselComponent;
