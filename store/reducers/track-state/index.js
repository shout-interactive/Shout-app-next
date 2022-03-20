import React from "react";

let walletState = {
    partyCreate: false,
    enterParti: false,
    giftCoin: false,
};
const trackState = (state = walletState, action) => {
    switch (action.type) {
        case "ON_PARTY_CREATE":
            return {...state, partyCreate: !walletState.partyCreate };
        case "ON_ENTER_PARTY":
            return {...state, enterParti: !walletState.enterParty };
        case "ON_GIFT_COIN":
            return {...state, giftCoin: !walletState.giftCoin };
        default:
            return state;
    }
};
export default trackState;