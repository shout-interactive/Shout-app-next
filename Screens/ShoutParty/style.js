import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    /* tabs styles begins here */
    tabsWrapper: {
        display: "flex",
        width: "100%",
        margin: "0 auto",
    },
    tabs: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "1rem 1rem 2rem 0rem",
    },
    MuiTabsIndicator: {
        backgroundColor: "#050c50 !important",
        height: "3px !important",
    },

    MuiSelected: {
        color: "#110066 !important",
    },
    tab: {
        width: "50%",
        textTransform: "none !important",
        fontSize: "1rem !important",
        fontWeight: "600 !important",
    },
    /* tabs styles ends here */

    btnWrapper: {
        padding: "1rem",
        cursor: "pointer",
    },

    inviteTabContainer: {
        margin: "1.2rem 0rem",
    },
    modalBox: {
        width: "20em",
        height: "10em",
        backgroundColor: "#ffffff",
        marginTop: "20px",
        borderRadius: "10px",
        // display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "20px",
    },
    modalBoxx: {
        width: "20em",
        height: "18em",
        padding: "10px",
        backgroundColor: "#ffffff",
        marginTop: "20px",
        borderRadius: "10px",
        // display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
    },
    containerDetails: {
        width: "100%",
        // height: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: "6rem",
        color: "#FA943E",
        borderRadius: "20px",
        margin: "20px auto",
        position: "relative",
        left: "35%",
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
}));