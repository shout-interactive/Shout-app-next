import { Container } from "react-bootstrap";
import ClearIcon from "@mui/icons-material/Clear";
import InfoIcon from "@mui/icons-material/Info";

import { Header } from "../../Component/Header";
import TabsComponent from "./tabs";

import { useStyles } from "./style";

const ShoutParty = () => {
  const classes = useStyles();
  // const [isLoading, setIsLoading] = useState(false);

  return (
    <Container className={classes.root}>
      <Header
        type="nav"
        title="Leaderboard"
        leftLink="/home"
        rightLink={"/home"}
        leftIcon={<InfoIcon />}
        primary
        rightIcon={<ClearIcon />}
      />

      <TabsComponent />
    </Container>
  );
};

export default ShoutParty;
