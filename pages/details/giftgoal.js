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
};
export default Giftgoals;
