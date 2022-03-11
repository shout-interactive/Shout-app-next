import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    buttonGroupWrapper: {
        margin: "1rem 0 1rem 0",
    },
    topLeadersGroupWrapper: {
        margin: "2rem 0rem",
        "& div:nth-child(2) div div div": {
            marginBottom: "25px",
            transform: "scale(1.2,1.2)",
        },
    },
    title: {
        color: "#110066",
        fontWeight: "bold",
        fontSize: "1rem",
    },
    totalInfoWrapper: {
        color: "#FA4A0C",
        display: "flex",
        flexDirection: "row",
        fontWeight: "bolder",
        fontSize: "1rem",
        alignItems: "center",
        justifyContent: "center",
    },
    totalInfo: {
        fontWeight: "bolder",
        fontSize: "1rem",
        marginLeft: "10px",
    },
    /** top leaders div styling start here */

    topLeadersDivContainer: {
        width: "30%",
        maxWidth: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    topLeadersImageContainer: {
        width: "6.5rem",
        height: "6.5rem",
        margin: "1rem 0rem 2rem 0rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative !important",
        top: "-20px",
    },
    topLeadersImage: {
        width: "100%",
        height: "100%",
        position: "inherit",
    },
    circle: {
        color: "white",
        fontWeight: "bold",

        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        position: "absolute !important",
        backgroundColor: "#110066",
        display: "flex",
        padding: "1rem",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bottom: -20,
        left: "30%",
        border: "2px solid white",
    },
    /** top leaders div styling end here */
    tabsWrapper: {
        display: "block",
        width: "100%",
        margin: "0",
        justifyContent: "center",
    },
    tabs: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "1rem 1rem 2rem 0rem",
        // display: "none",
    },
}));