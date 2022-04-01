import { combineReducers } from "redux";

import verifyToken from "./get-token";
import getParties from "./get-parties";
import createParty from "./create-party";
import getPartyDetails from "./get-party-details";
import createGift from "./create-gift";
import onBoardScreen from "./onboard";
import getInvite from "./get-invite";
import trackState from "./track-state";
import checkCoinReducer from "./check-coin";
import BuyCoin from "./buy-coin";
import createCalendar from "./create-calendar";
import getCalendar from "./all-calendar";
export default combineReducers({
    verifyToken,
    getParties,
    createParty,
    getPartyDetails,
    createGift,
    onBoardScreen,
    getInvite,
    trackState,
    checkCoinReducer,
    BuyCoin,
    createCalendar,
    getCalendar,
});