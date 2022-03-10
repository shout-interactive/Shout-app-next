import React, {useState} from "react";
import GiftGoals from "../../Screens/GiftGoals";
import GiftScreen from "../../Screens/Gifts"
const Giftgoals = () => {
  const [gift, setGift] = useState(false)
  if(gift){
    return <GiftGoals />
  }
  return <GiftGoals />;
};
export default Giftgoals;
