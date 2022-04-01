export const verifyToken = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    token: "",
    user: {},
    message: "",
};

export const getAllParties = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    parties: [],
    myParties: [],
    message: "",
};
export const getAllCalendar = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    calendar: [],
    message: "",
};
export const getAllInvite = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    invite: [],
    //   myParties: [],
    message: "",
};

export const getPartyDetails = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    partyDetails: {},
    message: "",
};

export const createParty = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    message: "",
    partyData: null,
};

export const createCalendar = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    message: "",
    calendarData: null,
};
export const createGift = {
    isLoading: false,
    error: null,
    isSuccessful: false,
    message: "",
};

export const trackState = {
    partyCreate: false,
    partyEnter: false,
    giftCoin: false,
};
export const checkWalletCoin = {
    message: "",
    data: {},
};
export const topUp = {
    message: "",
};
export const joinPartyPayment = {
    message: "",
    successful: false,
};
export const checkJoinStatus = {
    message: "",
    isSuccessful: false,
};