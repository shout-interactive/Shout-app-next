import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    squareBox: {
        width: "100%",
        backgroundColor: (props) => props.secondary,
        // backgroundColor: (secondary) => (secondary ? "#FA9330" : "#050C50"),
        marginBottom: "1.5rem",
        borderRadius: (props) => props.header,
        // borderRadius: (header) => (header ? "0" : "25px"),
        display: "flex",
        // flexGrow: ,
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
    },

    squareContent: {
        textAlign: "center",
        width: "100%",
    },
    stack: {
        // didplay: "none",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.5rem",
    },
    badge: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: (props) => props.badge,
        color: "white",
        padding: ".5rem",
        borderRadius: "10px",
    },
    partyCardTitleWrapper: {
        width: "100%",
        padding: "1rem",
    },
    partyCardTitle: {
        fontSize: "2rem",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
    avatarGroupContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    buttonContainer: {
        width: "40%",
        margin: "1rem auto",
        cursor: "pointer",
    },
    //   buttonContainer: {
    //     width: "10em",
    //     margin: "1.5rem auto",
    //     cursor: "pointer",
    // },
    navWrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    squareBoxWrapper: {
        padding: "0 !important",
        width: "100%",
    },
    badgeContainer: {
        width: "30%",
        margin: "0 auto",
        marginBottom: "1.2rem",
    },
}));