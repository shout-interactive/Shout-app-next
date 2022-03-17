import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "0 !important",
    },
    monthWrapper: {
        width: "100%",
        border: "1px solid lightgray",
        height: "55px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "7px",
    },
    expInput: {
        border: "0",
        outline: "none",
    },
    cvvInput: {
        width: "100%",
        border: "1px solid lightgray",
        height: "55px",
        borderRadius: "20px",
        outline: "blue",
        paddingLeft: "5px",
    },
}));