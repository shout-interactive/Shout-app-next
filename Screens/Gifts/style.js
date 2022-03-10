import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "100%",
  },
  modalBox: {
    width: "20em",
    height: "18em",
    backgroundColor: "#ffffff",
    marginTop: "20px",
    borderRadius: "10px",
    // display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  container: {
    width: "100%",
    minHeight: "100vh",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    fontSize: "5rem",
    color: "#162767",
    borderRadius: "20px",
    margin: "20px auto",
    position: "relative",
    left: "40%",
  },
  btnRemove: {
    position: "absolute",
    right: "20px",
    outline: "none",
    border: "0",
    backgroundColor: "transparent",
    cursor: "pointer",
    top: "20px",
    color: "black",
  },
  getBtn: {
    color: "white",
    backgroundColor: "#162767",
    width: "300px",
    height: "30px",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 auto",
    position: "relative",
    top: "30px",
  },
  giftImg: {
    backgroundColor: "",
    height: "60px",
    width: "60px",
    borderRadius: "10px",
  },
  paperHover: {
    "&:hover": {
      border: "1px solid blue",
    },
  },
}));
