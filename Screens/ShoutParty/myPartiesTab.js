import { Container } from "@mui/material";
import Title from "../../Component/TitleComponent";
import PartyCard from "../../Component/PartyCard/index.js";
import { dummyNextPartyData, dummyUpcomingPartyData } from "../../utils/partyData";
import { useSelector, useDispatch } from "react-redux";
import { getPartyDetailsRequest } from "../../store/actions/get-party-details";
import { useStyles } from "./style";
import { useRouter } from "next/router";
import { getPartiesRequest } from "../../store/actions/get-parties";
import { useEffect } from "react";
import styles from "./style.module.css";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
const MyParties = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const route = useRouter();
  const { parties } = useSelector((s) => s.getParties);

  const enterMyParty = (data, id) => {
    const userId = localStorage.getItem("userId");
    const checkParty = data?.filter((element) => element.id === id);
    const obj = {
      id: checkParty[0].id,
      user: userId,
    };
    dispatch(getPartyDetailsRequest(obj));
    route.push(`/detail/${checkParty[0].id}`);
    console.log(checkParty);
    console.log(checkParty[0].id);
  };
  const fetchParties = () => {
    const obj = {
      user: localStorage.getItem("userId"),
    };

    dispatch(getPartiesRequest(obj));
  };
  const individualParty = parties?.map((party) => party?.type);
  console.log(individualParty);
  const checks = individualParty === "shout";
  console.log(checks);
  return (
    <Container className="invite-tab-container">
      <Title title="Next party" />
      <PartyCard
        data={dummyNextPartyData[0]}
        secondary="#FA9330"
        header="25px"
        paid={false}
        badge="#F5AD65"
        button="#14B363"
      />

      <Title title="Upcoming party" />

      {parties?.map(
        (data) =>
          data?.type === "individual" && (
            <PartyCard
              id={data?.id}
              data={data}
              paid={true}
              secondary="#40B464"
              header="25px"
              badge="#bfd9ba"
              button="#091d50"
              partyBtnFunction={() => handleToggleModal(true)}
            />
          )
      )}
      {/* {individualParty === "shout" ? (
        <div className={styles.noParty}>
          <p>You have not created any party</p>
          <div>
            <KeyboardDoubleArrowDownIcon className={styles.icon} />
          </div>
        </div>
      ) : null} */}
      {parties.length === 0 && (
        <div className={styles.noParty}>
          <p>You have not created any party</p>
          <div>
            <KeyboardDoubleArrowDownIcon className={styles.icon} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default MyParties;
