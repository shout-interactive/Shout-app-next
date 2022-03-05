import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import Title from "../../Component/TitleComponent";
import PartyCard from "../../Component/PartyCard/index.js";
import { LoadingIcon } from "../../Component/Loading/Loading";
import { featuredParty } from "../../utils/partyData";
import { dummyUpcomingPartyData } from "../../utils/partyData";
import { useRouter } from "next/router";
import { useStyles } from "./style";
// import { getPartyDetailsRequest } from "../../store/actions/get-party-details";
import ModalPopup from "./ModalPopup";
const MyInvites = () => {
  const classes = useStyles();
  const [partyModal, setPartyModal] = useState(false);
  const route = useRouter();
  const handleOnClick = (data, paid) => {
    localStorage.setItem("data", JSON.stringify(data));
    localStorage.setItem("paid", paid);
    navigate("/party/details", { state: { data: data, paid: paid } });
  };

  const enterMyParty = () => {
    // const checkParty = data?.filter((element) => element.id === id);
    // dispatch(getPartyDetailsRequest(checkParty));
    route.push("/detail");
  };

  const handleToggleModal = (open) => {
    setPartyModal(open);
  };

  return (
    <>
      <Container className={classes.inviteTabContainer}>
        <Title title="Featured parties" />

        {featuredParty?.map((data, i) => (
          <PartyCard
            key={i}
            data={data}
            paid={true}
            secondary="#40B464"
            header="25px"
            badge="#bfd9ba"
            button="#091d50"
            partyBtnFunction={() => handleToggleModal(true)}
          />
        ))}
        <ModalPopup show={partyModal} toggleModal={handleToggleModal} />
      </Container>
      <Container className={classes.inviteTabContainer}>
        <Title title="Upcoming parties" />

        {dummyUpcomingPartyData?.map((data) => (
          <PartyCard
            key={data.id}
            id={data.id}
            data={data}
            paid={true}
            button="#14B363"
            secondary="#050C50"
            header="25px"
            badge="#4d4c83"
            // () => handleOnClick(data, true)
            partyBtnFunction={() => enterMyParty()}
          />
        ))}
      </Container>
    </>
  );
};

export default MyInvites;
