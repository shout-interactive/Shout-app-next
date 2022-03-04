import LandingPage from "../pages/Screens/LandingPage";

import PartyDetails from "./Screens/PartyDetails/index";
import { CreateParty } from "./Screens/create party/index";

export default function Home() {
  return (
    <div>
      <CreateParty />
      {/* <PartyDetails /> */}
    </div>
  );
}
