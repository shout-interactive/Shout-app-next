import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
    },
    img: {
        transform: "scale(1.5,1.5)",
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
        padding: ".8rem 0rem",
        borderRadius: "13px",
        fontWeight: "bold",
        fontSize: "1rem",
        textTransform: "none",
    },
    /**Bottom drawer styles */
    modalBox: {
        width: "20em",
        height: "18em",
        padding: "20px",
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
        // height: "100%",
        // minHeight: "100vh",
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
}));