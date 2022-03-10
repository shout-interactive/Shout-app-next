import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  paperBox: {
    width: "100%",
    backgroundColor: (props) => props.backgroundColor,
    marginBottom: "1.5rem",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 0,
    height: "56px",
    padding: "7px 10px",
    color: "white",
    // fontWeight: "bold",
  },
}));
