import { useNavigate } from "react-router-dom";

import "./index.css";

const Cards = ({ item: { Img, link } }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(link);
  };
  return (
    <div onClick={handleOnClick} className="card-image-wrapper">
      <img src={Img} alt="shout_party" className="card-image" />
    </div>
  );
};

export default Cards;
