import { Modal, Box, Typography, Container } from "@mui/material";
import ButtonComponent from "../Button";
import { useStyles } from "./style";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
const ModalComponent = ({ show, toggleModal, children }) => {
  const classes = useStyles();
  return (
    <Modal
      open={show}
      onClose={() => toggleModal(false)}
      onOpen={() => toggleModal(true)}
      aria-labelledby="modal-title"
      arial-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
};
export default ModalComponent;
