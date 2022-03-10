import { Container } from "@mui/material";
import Title from "../../Component/TitleComponent";
import PartyCard from "../../Component/PartyCard/index.js";
import { dummyNextPartyData, dummyUpcomingPartyData } from "../../utils/partyData";
import {useSelector, useDispatch} from "react-redux"
import { getPartyDetailsRequest } from "../../store/actions/get-party-details";
import { useStyles } from "./style";

const MyParties = () => {
 const dispatch = useDispatch()
  const classes = useStyles();
 
  const { parties } = useSelector((s) => s.getParties);
 
   const enterMyParty = (data, id) => {
      const userId =localStorage.getItem("userId")
    const checkParty = data?.filter((element) => element.id === id);
    const obj = {
      id:checkParty[0].id,
      user:userId
    }
    dispatch(getPartyDetailsRequest(obj));
    route.push("/detail");
    console.log(checkParty)
    console.log(checkParty[0].id)

  };
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

      {parties?.map((data, i) => (
        <PartyCard
          key={data?.id}
          data={data}
          id={data?.id}
          paid={false}
          button="#14B363"
          secondary="#050C50"
          header="25px"
          badge="#4d4c83"
           partyBtnFunction={() => enterMyParty(parties, data.id)}

        />
      ))}
    </Container>
  );
};

export default MyParties;
