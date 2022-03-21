import { combineReducers } from "redux";

import verifyToken from "./get-token";
import getParties from "./get-parties";
import createParty from "./create-party";
import getPartyDetails from "./get-party-details";
import createGift from "./create-gift";
import onBoardScreen from "./onboard";
import getInvite from "./get-invite";
import addCalendar from './add-calendar';

export default combineReducers({
    verifyToken,
    getParties,
    createParty,
    getPartyDetails,
    createGift,
    onBoardScreen,
    getInvite,
    addCalendar,
});