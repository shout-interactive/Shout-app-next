import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  navHeaderContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: ".5rem",
  },
  navItems: {
    fontWeight: "bolder",
    fontSize: "1.2rem",
    color: (primary) => (primary ? "#0A1F44" : "white"),
    cursor: "pointer",
  },
}));
