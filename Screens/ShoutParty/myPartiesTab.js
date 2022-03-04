import { Container } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import Loading from "../LoadingScreen";
import Title from "../../Component/TitleComponent";
import PartyCard from "../../Component/PartyCard/index.js";
// import ButtonComponent from "../../components/Button";
// import { dummyNextPartyData, dummyUpcomingPartyData } from "../../utils/partyData";

const MyParties = () => {
  const { isLoading, error, isSuccessful, myParties, message } = useSelector((s) => s.getParties);
  // const handleSend = () => {};

  return (
    <Container className="invite-tab-container">
      <Title title="Next party" />

      {/* {parties[0]?.map((data) => ( */}
      <PartyCard
        data={myParties[0]}
        secondary="#FA9330"
        header="25px"
        paid={false}
        badge="#F5AD65"
        button="#14B363"
      />
      {/* ))} */}
      <Title title="Upcoming party" />

      {myParties?.map((data, i) => (
        <PartyCard
          key={i}
          data={data}
          paid={false}
          button="#14B363"
          secondary="#050C50"
          header="0"
          badge="#4d4c83"
        />
      ))}
    </Container>
  );
};

export default MyParties;
