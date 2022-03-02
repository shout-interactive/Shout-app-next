import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    buttonWrapper: {
        // backgroundColor: "#14B363",
        backgroundColor: (props) => props.button,
        width: "100%",
        padding: (large) => (large ? ".8rem" : ".4rem"),
        borderRadius: "8px",
        cursor: "pointer",
    },
    buttonTitle: {
        margin: "0 !important",
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },

    leaderButtonWrapper: {
        display: "flex",
        backgroundColor: (selected) => selected && "#110066 !important",
        width: "100%",
        padding: (large) => (large ? ".8rem" : ".4rem"),
        borderRadius: "8px",
        cursor: "pointer",
        border: (selected) => !selected && "1px solid #60646A",
        "&:hover": {
            backgroundColor: "#110066 !important",
        },
        "&:active": {
            backgroundColor: "#110066 !important",
        },
        "&:focus": {
            backgroundColor: "#110066 !important",
        },
    },
    leaderButtonTitle: {
        margin: "0 !important",
        color: (selected) => (selected ? "white" : "#60646A"),
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "capitalize",
    },
}));