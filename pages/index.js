import LandingPage from "../pages/Screens/LandingPage";
import { EditParty } from "./Screens/create party/edit";
import PartyDetails from "./Screens/PartyDetails/index";
import { CreateParty } from "./Screens/create party/index";
// import ShoutParty from "./Screens/ShoutParty/ShoutParty";
// import { EditParty } from "./Screens/create party/edit";
import { Calendar } from "./Screens/create party/calendar";
import { EditCalendar } from "./Screens/create party/editCalendar";
import { AddCalendar } from "./Screens/create party/addCalendar";
import { AddCalendarInvite } from "./Screens/create party/addCalendarInvite";

export default function Home() {
  return (
    <div>
      {/* <Calendar /> */}
      {/* <EditCalendar /> */}
      <AddCalendar />

      {/* <PartyDetails /> */}
      {/* <EditParty /> */}
      {/* <LandingPage /> */}
      {/* <AddCalendarInvite /> */}
    </div>
  );
}
