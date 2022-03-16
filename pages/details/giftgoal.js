<<<<<<< HEAD
import React, {useState} from "react";
import GiftGoals from "../../Screens/GiftGoals";
import GiftScreen from "../../Screens/Gifts"
const Giftgoals = () => {
  const [gift, setGift] = useState(false)
  if(gift){
    return <GiftGoals />
  }
  return <GiftGoals />;
=======
import React, { useState } from "react";
import GiftGoals from "../../Screens/GiftGoals";
import GiftScreen from "../../Screens/Gifts";
import { useSelector } from "react-redux";
const Giftgoals = () => {
  const { partyDetails } = useSelector((s) => s.getPartyDetails);
  const checkGift = partyDetails?.party?.GiftGoal;

  if (checkGift) {
    return <GiftGoals />;
  } else {
    return <GiftScreen />;
  }
>>>>>>> 7dc4591d82f7c8b4852b21a021af793bee650412
};
export default Giftgoals;
