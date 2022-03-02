import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {},
    listItemWrapper: {
        padding: "1rem",
        borderBottom: "1px solid #F0F2F4",
        "&:hover": {
            backgroundColor: "#F0F2F4",
            borderRadius: "15px",
            margin: "1.5rem 0rem",
        },
    },
    leftDiv: {
        width: "85%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rightDiv: {
        width: "15%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        color: "#FA4A0C",
        fontWeight: "bold",
        fontSize: "1rem",
    },
    total: {
        fontWeight: "bolder",
        fontSize: "1rem",
        marginLeft: "10px",
    },
}));