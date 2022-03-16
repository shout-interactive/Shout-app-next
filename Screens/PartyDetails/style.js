import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    playerBox: {
        borderRadius: "25px",
        position: "relative",
        paddingTop: "56.25%",
        marginBottom: "2rem",
    },
    player: {
        position: "absolute",
        top: 0,
        left: 0,
        borderRadius: "25px",
    },
    headerWrapper: {
        backgroundColor: "#FA9330",
    },
    paper: {
        padding: "1rem",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        JustifyContent: "center",
        fontSize: "1rem",
        marginBottom: ".5rem",
    },
    iconWrapper: {
        width: "40px",
        height: "40px",
        borderRadius: "20px",
        backgroundColor: "white",
        marginRight: "1rem",
    },
    label: {
        color: "white",
        fontWeight: "bold",
    },
    activitiesWrapper: {
        marginBottom: "1.2rem",
    },
    buttonWrapper: {
        width: "100%",
        marginTop: "3rem",
        marginBottom: "3rem",
    },

    /**Bottom drawer styles */
    bottomDrawerContainer: {},
    bottomDrawerWrapper: {
        padding: "0rem 1rem",
    },
    bottomDrawerHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
    },

    listWrapper: {},
    listItem: {
        padding: ".6rem 0rem",
    },
    listItemStack: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#818FA3",
        padding: "1rem 0rem",
        borderRadius: "13px",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textTransform: "capitalize",
    },
    /**Bottom drawer styles */

    selectedFriendsWrapper: {
        padding: "1.5rem 1rem",
    },
    selectedFriendsItemWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    modalBox: {
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
    myContainer: {
        width: "100%",
        // height: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: "6em",
        color: "orange",
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