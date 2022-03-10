import { useState } from "react";
import { Carousel } from "react-bootstrap";
// import Davido from '../../assest/images/davido.png';

// import { dummyData } from '../../utils/homePageDummyData';

import styles from "./index.module.css";

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className={styles["carousel-image-wrapper"]}>
          <img src="/assest/images/wizkid.png" alt="davido" className={styles["carousel-image"]} />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles["carousel-image-wrapper"]}>
          <img src="/assest/images/cuppy.jpg" alt="davido" className={styles["carousel-image"]} />
        </div>
      </Carousel.Item>
      {/* ))} */}
    </Carousel>
  );
};

export default CarouselComponent;
