import React from "react";

let onboard = {
    home: false,
    party: false,
    livestream: false,
};
const onBoardScreen = (state = onboard, action) => {
    switch (action.type) {
        case "ON_BOARD_HOME":
            return {...state, home: true };
        case "ON_BOARD_PARTY":
            return {...state, party: true };
        case "ON_BOARD_LIVE":
            return {...state, livestream: true };
        default:
            return state;
    }
};
export default onBoardScreen;