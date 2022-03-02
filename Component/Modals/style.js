import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
    modalBox: {
        width: "30%",
        height: "40vh",
        backgroundColor: "#ffffff",
        marginTop: "20px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    container: {
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        fontSize: "70px",
        color: "orange",
        borderRadius: "20px",
    },
}));